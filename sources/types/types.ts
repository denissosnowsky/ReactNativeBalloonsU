import { Maybe } from "graphql/jsutils/Maybe";
import { Person } from "../store/generated/graphql";

export type BouquetType = {
  id: string;
  name: string;
  subname: string;
  price: number;
  description: string;
  code: number;
  image: string;
  personType: Person;
  basketStatus?: {
    isInBasket?: boolean | null | undefined;
    basketQuantity?: number | null | undefined;
  };
};

export type BalloonType = {
  id: string;
  name: string;
  subname: string;
  price: number;
  description: string;
  code: number;
  image: string;
  category?: { id: string; name: string };
  color?: { id: string; name: string };
  basketStatus?: {
    isInBasket?: boolean | null | undefined;
    basketQuantity?: number | null | undefined;
  };
};

export type AssortmentType = {
  id: string;
  name: string;
  price: string;
  fixed: boolean;
};

export type ArrayConvertorResultType =
  | Array<{ leftText: string; rightText: string; id: string; fixed: boolean }>
  | [];

export type FetchedObjectType = {
  id: string;
  name: string;
  price: string;
  fixed: boolean;
};

export type ArrayConvertorArgType = Maybe<Maybe<FetchedObjectType>[]>;
