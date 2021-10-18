import { Divider, Input } from "native-base";
import React, { SyntheticEvent, useEffect, useMemo, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Foooter from "../../components/Foooter/Foooter";
import ListForBasket from "../../components/ListForBasket/ListForBasket";
import DateTimePicker from "@react-native-community/datetimepicker";
import { timeConvertorTo12Format } from "../../utils/timeConvertorTo12Format";
import MyText from "../../components/MyText/MyText";
import { useGetBasketValues } from "../../hooks/useGetBasketValues";
import { useSendOrderMutation } from "../../store/generated/graphql";
import { showSuccess } from "../../utils/showSucces";
import { showError } from "../../utils/showError";
import { FormType } from "../../types/types";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { emptifyBasket } from "../../utils/emptifyBasket";
import { useCounterInitState } from "../../hooks/useCounterInitState";
import { sumOfObjectValues } from "../../utils/sumOfObjectValues";
import { counterStateChanger } from "../../utils/counterStateChanger";
import { changeQuantInBasket } from "../../utils/changeQuantInBasket";
import { deleteFromBasket } from "../../utils/deleteFromBasket";
import Error from "../Error/Error";
import { useToast } from "native-base";
import { useGetErrorStatus } from "../../hooks/useGetErrorStatus";
import { useGetSuccessStatus } from "../../hooks/useGetSuccessStatus";

const Cart: React.FC = () => {
  /////// Date and Time code
  const initDate = new Date();
  const [date, setDate] = useState({ allDate: initDate, time: "", date: "" });
  const [showTime, setShowTime] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const onChangeTime = async (
    event: SyntheticEvent<Readonly<{ timestamp: number }>, Event>,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate || initDate;
    !(Platform.OS === "ios") && setShowTime(false);
    setDate({
      ...date,
      allDate: currentDate,
      time: timeConvertorTo12Format(
        currentDate
      ) /* `${currentDate.getHours()}:${currentDate.getMinutes()}`, */,
    });
  };

  const onChangeDate = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || initDate;
    const year = currentDate.getFullYear();
    const month =
      String(currentDate.getMonth()).length === 1
        ? `0${currentDate.getMonth()}`
        : currentDate.getMonth();
    const day =
      String(currentDate.getDate()).length === 1
        ? `0${currentDate.getDate()}`
        : currentDate.getDate();
    !(Platform.OS === "ios") && setShowDate(false);
    setDate({
      ...date,
      allDate: currentDate,
      date: `${year}-${month}-${day}`,
    });
  };

  const showDatepicker = () => {
    setShowDate(true);
  };

  const showTimepicker = () => {
    setShowTime(true);
  };

  ////// Cart logic code
  const toast = useToast();

  const [disabled, setDisabled] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [code, setCode] = useState("");

  const basket = useGetBasketValues();

  const [sendOrder, { data, loading, error }] = useSendOrderMutation({
    onCompleted(data) {
      data.sendOrder
        ? showSuccess("The order has been sent! Our manager will contact you")
        : showError("Error. The order has not been sent!");
      setDisabled(false);
      emptifyBasket();
      setName("");
      setPhone("");
      setEmail("");
      setAddress("");
      setCode("");
      setDate({ ...date, allDate: initDate, time: "", date: "" });
    },
    onError(error) {
      showError("Error. The order has not been sent!");
      return <Error />;
    },
  });

  const completeOrder = useMemo(
    () => ({
      name: name,
      phone: phone,
      email: email,
      address: address,
      code: Number(code),
      date: date.date,
      time: date.time,
      totalPrice: basket.reduce(
        (sum, obj) => sum + obj.price * obj.quantity,
        0
      ),
      userId: uuidv4(),
      orders: basket,
    }),
    [name, phone, email, address, code, date.date, date.time, basket]
  );

  const errors = useGetErrorStatus();
  const success = useGetSuccessStatus();

  useEffect(() => {
    errors &&
      toast.show({
        render: () => {
          return (
            <View style={[styles.errorToast, styles.toastView]}>
              <Text style={styles.toastText}>{errors}</Text>
            </View>
          );
        },
        duration: 3000,
        placement: "top",
      });
    success &&
      toast.show({
        render: () => {
          return (
            <View style={[styles.successToast, styles.toastView]}>
              <Text style={styles.toastText}>{success}</Text>
            </View>
          );
        },
        duration: 3000,
        placement: "top",
      });
  }, [errors, success]);

  const handleOrder = () => {
    if (!name) return showError("Enter your name");
    if (!phone) return showError("Enter your phone");
    if (!email) return showError("Enter your e-mail");
    if (!address) return showError("Enter your address");
    if (!code) return showError("Enter your ZIP code");
    if (!date.date) return showError("Enter the date");
    if (!date.time) return showError("Enter the time");
    setDisabled(true);
    sendOrder({
      variables: {
        order: JSON.stringify(completeOrder),
      },
    });
  };

  const initialState = useCounterInitState(basket);

  const [counters, setCounters] =
    useState<Record<string, number>>(initialState);

  const [sum, setSum] = useState<number>(0);

  useMemo(() => setSum(sumOfObjectValues(counters)), [counters]);

  const handleCounterPrice = (id: string, initValue: number) => {
    return (value: number) => {
      setCounters(counterStateChanger(counters, id, value, initValue));
      changeQuantInBasket && changeQuantInBasket(id, value);
    };
  };

  const handleDeleteItem = (id: string, initValue: number) => {
    setCounters(counterStateChanger(counters, id, 0, initValue));
    deleteFromBasket && deleteFromBasket(id);
  };

  return (
    <>
      {basket &&
        (basket.length > 0 ? (
          <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
              <View style={styles.cardWrapper}>
                {basket.map((item, i) => (
                  <View key={item.id}>
                    <ListForBasket
                      data={item}
                      order={i + 1}
                      countClb={handleCounterPrice(item.id, item.price)}
                      deleteClb={() => handleDeleteItem(item.id, item.price)}
                      totalPrice={counters[item.id]}
                    />
                    <Divider w={"100%"} style={styles.divider} />
                  </View>
                ))}
                <View style={styles.total}>
                  <MyText style={styles.totalText}>TOTAL:</MyText>
                  <MyText style={styles.totalText}>{`${sum} $`}</MyText>
                </View>
              </View>
              <View style={styles.formWrapper}>
                <MyText style={styles.formHeader}>
                  Application for deliveries:
                </MyText>
                <Input
                  placeholder="Enter your name"
                  variant="outline"
                  style={styles.input}
                  textContentType="name"
                  onChangeText={(name) => setName(name)}
                  value={name}
                />
                <Input
                  placeholder="Enter your phone"
                  variant="outline"
                  style={styles.input}
                  keyboardType="phone-pad"
                  textContentType="telephoneNumber"
                  onChangeText={(phone) => setPhone(phone)}
                  value={phone}
                />
                <Input
                  placeholder="Enter your e-mail"
                  variant="outline"
                  style={styles.input}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  onChangeText={(email) => setEmail(email)}
                  value={email}
                />
                <Input
                  placeholder="Enter your address"
                  variant="outline"
                  style={styles.input}
                  textContentType="fullStreetAddress"
                  onChangeText={(address) => setAddress(address)}
                  value={address}
                />
                <Input
                  placeholder="Enter your ZIP code"
                  variant="outline"
                  style={styles.input}
                  keyboardType="numeric"
                  textContentType="postalCode"
                  onChangeText={(code) => setCode(code)}
                  value={code}
                />
                {!(Platform.OS === "ios") && (
                  <>
                    <View>
                      <Pressable
                        onPress={showDatepicker}
                        style={[styles.dataInput, styles.androidDateText]}
                      >
                        <MyText style={styles.dataInputText}>
                          Select date:{" "}
                        </MyText>
                        <MyText style={styles.androidDatePicked}>
                          {date.date}
                        </MyText>
                      </Pressable>
                    </View>
                    <View>
                      <Pressable
                        onPress={showTimepicker}
                        style={[styles.dataInput, styles.androidDateText]}
                      >
                        <MyText style={styles.dataInputText}>
                          Select time:{" "}
                        </MyText>
                        <MyText style={styles.androidDatePicked}>
                          {date.time}
                        </MyText>
                      </Pressable>
                    </View>
                  </>
                )}
                {(showDate || Platform.OS === "ios") && (
                  <View
                    style={
                      Platform.OS === "ios"
                        ? styles.dataInput
                        : { display: "none" }
                    }
                  >
                    <MyText
                      style={
                        Platform.OS === "ios"
                          ? styles.dataInputText
                          : { display: "none" }
                      }
                    >
                      Select date:{" "}
                    </MyText>
                    <DateTimePicker
                      data-type="date"
                      testID="timePicker"
                      value={date.allDate}
                      mode={"date"}
                      display="default"
                      onChange={onChangeDate}
                      style={styles.dataInputBlock}
                    />
                  </View>
                )}
                {(showTime || Platform.OS === "ios") && (
                  <View
                    style={
                      Platform.OS === "ios"
                        ? styles.dataInput
                        : { display: "none" }
                    }
                  >
                    <MyText
                      style={
                        Platform.OS === "ios"
                          ? styles.dataInputText
                          : { display: "none" }
                      }
                    >
                      Select time:{" "}
                    </MyText>
                    <DateTimePicker
                      data-type="time"
                      testID="datePicker"
                      value={date.allDate}
                      mode={"time"}
                      display="default"
                      onChange={onChangeTime}
                      style={styles.dataInputBlock}
                    />
                  </View>
                )}
                <Pressable
                  style={styles.confirmBtn}
                  onPress={handleOrder}
                  disabled={disabled}
                >
                  <MyText style={styles.confirmBtnText}>
                    Confirm the Order
                  </MyText>
                </Pressable>
              </View>
              <Foooter />
            </View>
          </ScrollView>
        ) : (
          <View style={styles.emptyBasket}>
            <MyText style={styles.emptyBasketText}>Cart is empty</MyText>
          </View>
        ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
    padding: 15,
  },
  cardWrapper: {
    paddingTop: 20,
  },
  formWrapper: {
    display: "flex",
    alignItems: "center",
  },
  formHeader: {
    fontSize: 23,
    color: "#e91e63",
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    width: "70%",
    height: 50,
    fontSize: 18,
    backgroundColor: "white",
    marginBottom: 15,
    color: "#0d6efd",
  },
  dataInput: {
    width: "70%",
    height: 50,
    fontSize: 18,
    backgroundColor: "white",
    marginBottom: 15,
    borderColor: "#eee",
    borderRadius: 5,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
  },
  dataInputBlock: {
    flex: 5,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dataInputText: {
    flex: 4,
    fontSize: 18,
    color: "#999",
    height: 50,
    lineHeight: 50,
    paddingLeft: 10,
  },
  androidDatePicked: {
    color: "#0d6efd",
    fontSize: 18,
    lineHeight: 50,
    flex: 5,
  },
  androidDateText: {
    display: "flex",
    flexDirection: "row",
  },
  confirmBtn: {
    borderColor: "#eee",
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    backgroundColor: "#0d6efd",
    marginBottom: 40,
    marginTop: 5,
  },
  confirmBtnText: {
    fontSize: 20,
    lineHeight: 50,
    color: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
  },
  emptyBasket: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyBasketText: {
    fontSize: 20,
    color: "#e91e63",
  },
  totalText: {
    marginTop: 10,
    fontSize: 20,
    color: "#e91e63",
    fontFamily: "Roboto_700Bold",
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  errorToast: {
    backgroundColor: "rgba(233,30,99,.9)",
  },
  successToast: {
    backgroundColor: "rgba(92,184,92,.9)",
  },
  toastView: {
    margin: 10,
    borderRadius: 10,
  },
  toastText: {
    fontSize: 18,
    padding: 10,
    fontFamily: "Roboto_400Regular",
    color: "#fff",
  },
});

export default Cart;
