import React, { useState } from "react";
import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import { Slider } from "native-base";
import MyText from "../MyText/MyText";

interface SliderFilterPropsType {
  price: number | undefined;
  step: number;
  maxPrice: number;
  changeSlider: (arg: number) => void;
}

const SliderFilter: React.FC<SliderFilterPropsType> = ({
  price,
  step,
  maxPrice,
  changeSlider,
}) => {
  const [priceValue, setPriceValue] = useState(maxPrice);

  const handleSliderMove = (e: number) => {
    setPriceValue(e);
  };

  const handleSliderTouchEnd = (e: number) => {
    changeSlider(e);
  };

  return (
    <View style={styles.container}>
      <MyText style={styles.text}>Max. price</MyText>
      <View style={styles.wrapper}>
        <MyText style={styles.number}>{`${step} $`}</MyText>
        <Slider
          defaultValue={price ? price : maxPrice}
          minValue={step}
          maxValue={maxPrice}
          accessibilityLabel="price"
          step={step}
          style={styles.slider}
          onChangeEnd={handleSliderTouchEnd}
          onChange={handleSliderMove}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <MyText style={styles.number}>{`${priceValue} $`}</MyText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    display: "flex",
    marginTop: 5,
  },
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignContent: "center",
    flex: 1,
  },
  slider: {
    width: "50%",
    height: "100%",
    marginLeft: 20,
    marginRight: 20,
  },
  number: {
    fontSize: 16,
    lineHeight: 25,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    flex: 1,
    lineHeight: 25,
    marginBottom: -10,
  },
});

export default SliderFilter;
