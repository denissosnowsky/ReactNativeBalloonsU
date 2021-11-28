import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Assortment = {
  __typename?: 'Assortment';
  fixed: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['String'];
};

export type Balloon = {
  __typename?: 'Balloon';
  basketStatus?: Maybe<BasketType>;
  category?: Maybe<Category>;
  code: Scalars['Int'];
  color?: Maybe<Color>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  subname: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BasketType = {
  __typename?: 'BasketType';
  basketQuantity?: Maybe<Scalars['Int']>;
  isInBasket?: Maybe<Scalars['Boolean']>;
};

export type Bouquet = {
  __typename?: 'Bouquet';
  basketStatus?: Maybe<BasketType>;
  code: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  personType: Person;
  price: Scalars['Int'];
  subname: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Category = {
  __typename?: 'Category';
  balloons?: Maybe<Array<Maybe<Balloon>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Color = {
  __typename?: 'Color';
  balloons?: Maybe<Array<Maybe<Balloon>>>;
  cssName: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type DeliveryPrice = {
  __typename?: 'DeliveryPrice';
  id: Scalars['ID'];
  price: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAssortment?: Maybe<Assortment>;
  addBalloon?: Maybe<Balloon>;
  addBouquet?: Maybe<Bouquet>;
  addCategory?: Maybe<Category>;
  addColor?: Maybe<Color>;
  addDeliveryPrice?: Maybe<DeliveryPrice>;
  addPhone?: Maybe<Phone>;
  addSocialNet?: Maybe<SocialNet>;
  changeAssortmant?: Maybe<Assortment>;
  changeBalloon?: Maybe<Balloon>;
  changeBouquet?: Maybe<Bouquet>;
  changeDeliveryPrice?: Maybe<DeliveryPrice>;
  changeManyPricesToBalloons?: Maybe<Scalars['Boolean']>;
  changeManyPricesToBouquets?: Maybe<Scalars['Boolean']>;
  deleteAssortmant?: Maybe<Assortment>;
  deleteBalloon?: Maybe<Balloon>;
  deleteBouquet?: Maybe<Bouquet>;
  deleteCategory?: Maybe<Category>;
  deleteColor?: Maybe<Color>;
  deletePhone?: Maybe<Phone>;
  deleteSocialNet?: Maybe<SocialNet>;
  sendOrder?: Maybe<Scalars['Boolean']>;
};


export type MutationAddAssortmentArgs = {
  fixed: Scalars['Boolean'];
  name: Scalars['String'];
  price: Scalars['String'];
};


export type MutationAddBalloonArgs = {
  categoryId: Scalars['ID'];
  code: Scalars['Int'];
  colorId: Scalars['ID'];
  description: Scalars['String'];
  image: Scalars['Upload'];
  name: Scalars['String'];
  price: Scalars['Int'];
  subname: Scalars['String'];
};


export type MutationAddBouquetArgs = {
  code: Scalars['Int'];
  description: Scalars['String'];
  image: Scalars['Upload'];
  name: Scalars['String'];
  personType: Person;
  price: Scalars['Int'];
  subname: Scalars['String'];
};


export type MutationAddCategoryArgs = {
  name: Scalars['String'];
};


export type MutationAddColorArgs = {
  cssName: Scalars['String'];
  name: Scalars['String'];
};


export type MutationAddDeliveryPriceArgs = {
  price: Scalars['String'];
};


export type MutationAddPhoneArgs = {
  number: Scalars['String'];
};


export type MutationAddSocialNetArgs = {
  image: Scalars['String'];
  link: Scalars['String'];
  name: Scalars['String'];
};


export type MutationChangeAssortmantArgs = {
  fixed?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
};


export type MutationChangeBalloonArgs = {
  categoryId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['Int']>;
  colorId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['Upload']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  subname?: Maybe<Scalars['String']>;
};


export type MutationChangeBouquetArgs = {
  code?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['Upload']>;
  name?: Maybe<Scalars['String']>;
  personType?: Maybe<Person>;
  price?: Maybe<Scalars['Int']>;
  subname?: Maybe<Scalars['String']>;
};


export type MutationChangeDeliveryPriceArgs = {
  id: Scalars['ID'];
  price?: Maybe<Scalars['String']>;
};


export type MutationChangeManyPricesToBalloonsArgs = {
  categoryId?: Maybe<Scalars['ID']>;
  newPrice: Scalars['Int'];
  oldPrice: Scalars['Int'];
};


export type MutationChangeManyPricesToBouquetsArgs = {
  newPrice: Scalars['Int'];
  oldPrice: Scalars['Int'];
};


export type MutationDeleteAssortmantArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBalloonArgs = {
  id: Scalars['String'];
};


export type MutationDeleteBouquetArgs = {
  id: Scalars['String'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteColorArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePhoneArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSocialNetArgs = {
  id: Scalars['ID'];
};


export type MutationSendOrderArgs = {
  order: Scalars['JSON'];
};

export enum Person {
  Child = 'CHILD',
  Man = 'MAN',
  Woman = 'WOMAN'
}

export type Phone = {
  __typename?: 'Phone';
  id: Scalars['ID'];
  number: Scalars['String'];
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  allBalloons?: Maybe<Scalars['Int']>;
  allBouquets?: Maybe<Scalars['Int']>;
  assortment?: Maybe<Array<Maybe<Assortment>>>;
  balloon?: Maybe<Balloon>;
  balloons?: Maybe<Array<Maybe<Balloon>>>;
  bouquet?: Maybe<Bouquet>;
  bouquets?: Maybe<Array<Maybe<Bouquet>>>;
  categories?: Maybe<Array<Maybe<Category>>>;
  colors?: Maybe<Array<Maybe<Color>>>;
  deliveryPrice?: Maybe<DeliveryPrice>;
  maxBalloonPrice?: Maybe<Scalars['Int']>;
  maxBouquetPrice?: Maybe<Scalars['Int']>;
  phones?: Maybe<Array<Maybe<Phone>>>;
  socialNets?: Maybe<Array<Maybe<SocialNet>>>;
};


export type RootQueryTypeAllBalloonsArgs = {
  categoryId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['Int']>;
  colorId?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['Int']>;
};


export type RootQueryTypeAllBouquetsArgs = {
  code?: Maybe<Scalars['Int']>;
  personType?: Maybe<Person>;
  price?: Maybe<Scalars['Int']>;
};


export type RootQueryTypeBalloonArgs = {
  id: Scalars['String'];
};


export type RootQueryTypeBalloonsArgs = {
  categoryId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['Int']>;
  colorId?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['Int']>;
  skip: Scalars['Int'];
  take: Scalars['Int'];
};


export type RootQueryTypeBouquetArgs = {
  id: Scalars['String'];
};


export type RootQueryTypeBouquetsArgs = {
  code?: Maybe<Scalars['Int']>;
  personType?: Maybe<Person>;
  price?: Maybe<Scalars['Int']>;
  skip: Scalars['Int'];
  take: Scalars['Int'];
};


export type RootQueryTypeColorsArgs = {
  categoryId?: Maybe<Scalars['ID']>;
};

export type SocialNet = {
  __typename?: 'SocialNet';
  id: Scalars['ID'];
  image: Scalars['String'];
  link: Scalars['String'];
  name: Scalars['String'];
};

export type SendOrderMutationVariables = Exact<{
  order: Scalars['JSON'];
}>;


export type SendOrderMutation = { __typename?: 'Mutation', sendOrder?: boolean | null | undefined };

export type AllBalloonsQueryVariables = Exact<{
  price?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['ID']>;
  colorId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['Int']>;
}>;


export type AllBalloonsQuery = { __typename?: 'RootQueryType', allBalloons?: number | null | undefined };

export type AllBouquetsQueryVariables = Exact<{
  price?: Maybe<Scalars['Int']>;
  personType?: Maybe<Person>;
  code?: Maybe<Scalars['Int']>;
}>;


export type AllBouquetsQuery = { __typename?: 'RootQueryType', allBouquets?: number | null | undefined };

export type AssortmentQueryVariables = Exact<{ [key: string]: never; }>;


export type AssortmentQuery = { __typename?: 'RootQueryType', assortment?: Array<{ __typename?: 'Assortment', id: string, name: string, price: string, fixed: boolean } | null | undefined> | null | undefined };

export type BalloonQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type BalloonQuery = { __typename?: 'RootQueryType', balloon?: { __typename?: 'Balloon', id: string, name: string, subname: string, price: number, description: string, code: number, image: string, category?: { __typename?: 'Category', id: string, name: string } | null | undefined, color?: { __typename?: 'Color', id: string, name: string } | null | undefined, basketStatus?: { __typename?: 'BasketType', isInBasket?: boolean | null | undefined, basketQuantity?: number | null | undefined } | null | undefined } | null | undefined };

export type BalloonsQueryVariables = Exact<{
  skip: Scalars['Int'];
  take: Scalars['Int'];
  price?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['ID']>;
  colorId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['Int']>;
}>;


export type BalloonsQuery = { __typename?: 'RootQueryType', balloons?: Array<{ __typename?: 'Balloon', id: string, name: string, subname: string, price: number, description: string, code: number, image: string, category?: { __typename?: 'Category', id: string, name: string } | null | undefined, color?: { __typename?: 'Color', id: string, name: string } | null | undefined, basketStatus?: { __typename?: 'BasketType', isInBasket?: boolean | null | undefined, basketQuantity?: number | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type BouquetQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type BouquetQuery = { __typename?: 'RootQueryType', bouquet?: { __typename?: 'Bouquet', id: string, name: string, subname: string, price: number, description: string, code: number, image: string, personType: Person, basketStatus?: { __typename?: 'BasketType', isInBasket?: boolean | null | undefined, basketQuantity?: number | null | undefined } | null | undefined } | null | undefined };

export type BouquetsQueryVariables = Exact<{
  skip: Scalars['Int'];
  take: Scalars['Int'];
  price?: Maybe<Scalars['Int']>;
  personType?: Maybe<Person>;
  code?: Maybe<Scalars['Int']>;
}>;


export type BouquetsQuery = { __typename?: 'RootQueryType', bouquets?: Array<{ __typename?: 'Bouquet', id: string, name: string, subname: string, price: number, description: string, code: number, image: string, personType: Person, basketStatus?: { __typename?: 'BasketType', isInBasket?: boolean | null | undefined, basketQuantity?: number | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'RootQueryType', categories?: Array<{ __typename?: 'Category', id: string, name: string } | null | undefined> | null | undefined };

export type ColorsQueryVariables = Exact<{
  categoryId?: Maybe<Scalars['ID']>;
}>;


export type ColorsQuery = { __typename?: 'RootQueryType', colors?: Array<{ __typename?: 'Color', id: string, name: string, cssName: string } | null | undefined> | null | undefined };

export type DeliveryPriceQueryVariables = Exact<{ [key: string]: never; }>;


export type DeliveryPriceQuery = { __typename?: 'RootQueryType', deliveryPrice?: { __typename?: 'DeliveryPrice', id: string, price: string } | null | undefined };

export type MaxBalloonPriceQueryVariables = Exact<{ [key: string]: never; }>;


export type MaxBalloonPriceQuery = { __typename?: 'RootQueryType', maxBalloonPrice?: number | null | undefined };

export type MaxBouquetPriceQueryVariables = Exact<{ [key: string]: never; }>;


export type MaxBouquetPriceQuery = { __typename?: 'RootQueryType', maxBouquetPrice?: number | null | undefined };

export type PhonesQueryVariables = Exact<{ [key: string]: never; }>;


export type PhonesQuery = { __typename?: 'RootQueryType', phones?: Array<{ __typename?: 'Phone', id: string, number: string } | null | undefined> | null | undefined };

export type SocialNetsQueryVariables = Exact<{ [key: string]: never; }>;


export type SocialNetsQuery = { __typename?: 'RootQueryType', socialNets?: Array<{ __typename?: 'SocialNet', id: string, name: string, link: string, image: string } | null | undefined> | null | undefined };

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Assortment: ResolverTypeWrapper<Assortment>;
  Balloon: ResolverTypeWrapper<Balloon>;
  BasketType: ResolverTypeWrapper<BasketType>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bouquet: ResolverTypeWrapper<Bouquet>;
  Category: ResolverTypeWrapper<Category>;
  Color: ResolverTypeWrapper<Color>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DeliveryPrice: ResolverTypeWrapper<DeliveryPrice>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Mutation: ResolverTypeWrapper<{}>;
  Person: Person;
  Phone: ResolverTypeWrapper<Phone>;
  RootQueryType: ResolverTypeWrapper<{}>;
  SocialNet: ResolverTypeWrapper<SocialNet>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Assortment: Assortment;
  Balloon: Balloon;
  BasketType: BasketType;
  Boolean: Scalars['Boolean'];
  Bouquet: Bouquet;
  Category: Category;
  Color: Color;
  DateTime: Scalars['DateTime'];
  DeliveryPrice: DeliveryPrice;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  Mutation: {};
  Phone: Phone;
  RootQueryType: {};
  SocialNet: SocialNet;
  String: Scalars['String'];
  Upload: Scalars['Upload'];
}>;

export type AssortmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Assortment'] = ResolversParentTypes['Assortment']> = ResolversObject<{
  fixed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BalloonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Balloon'] = ResolversParentTypes['Balloon']> = ResolversObject<{
  basketStatus?: Resolver<Maybe<ResolversTypes['BasketType']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['Color']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BasketTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasketType'] = ResolversParentTypes['BasketType']> = ResolversObject<{
  basketQuantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isInBasket?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BouquetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bouquet'] = ResolversParentTypes['Bouquet']> = ResolversObject<{
  basketStatus?: Resolver<Maybe<ResolversTypes['BasketType']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personType?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  balloons?: Resolver<Maybe<Array<Maybe<ResolversTypes['Balloon']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ColorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Color'] = ResolversParentTypes['Color']> = ResolversObject<{
  balloons?: Resolver<Maybe<Array<Maybe<ResolversTypes['Balloon']>>>, ParentType, ContextType>;
  cssName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeliveryPriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeliveryPrice'] = ResolversParentTypes['DeliveryPrice']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addAssortment?: Resolver<Maybe<ResolversTypes['Assortment']>, ParentType, ContextType, RequireFields<MutationAddAssortmentArgs, 'fixed' | 'name' | 'price'>>;
  addBalloon?: Resolver<Maybe<ResolversTypes['Balloon']>, ParentType, ContextType, RequireFields<MutationAddBalloonArgs, 'categoryId' | 'code' | 'colorId' | 'description' | 'image' | 'name' | 'price' | 'subname'>>;
  addBouquet?: Resolver<Maybe<ResolversTypes['Bouquet']>, ParentType, ContextType, RequireFields<MutationAddBouquetArgs, 'code' | 'description' | 'image' | 'name' | 'personType' | 'price' | 'subname'>>;
  addCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationAddCategoryArgs, 'name'>>;
  addColor?: Resolver<Maybe<ResolversTypes['Color']>, ParentType, ContextType, RequireFields<MutationAddColorArgs, 'cssName' | 'name'>>;
  addDeliveryPrice?: Resolver<Maybe<ResolversTypes['DeliveryPrice']>, ParentType, ContextType, RequireFields<MutationAddDeliveryPriceArgs, 'price'>>;
  addPhone?: Resolver<Maybe<ResolversTypes['Phone']>, ParentType, ContextType, RequireFields<MutationAddPhoneArgs, 'number'>>;
  addSocialNet?: Resolver<Maybe<ResolversTypes['SocialNet']>, ParentType, ContextType, RequireFields<MutationAddSocialNetArgs, 'image' | 'link' | 'name'>>;
  changeAssortmant?: Resolver<Maybe<ResolversTypes['Assortment']>, ParentType, ContextType, RequireFields<MutationChangeAssortmantArgs, 'id'>>;
  changeBalloon?: Resolver<Maybe<ResolversTypes['Balloon']>, ParentType, ContextType, RequireFields<MutationChangeBalloonArgs, 'id'>>;
  changeBouquet?: Resolver<Maybe<ResolversTypes['Bouquet']>, ParentType, ContextType, RequireFields<MutationChangeBouquetArgs, 'id'>>;
  changeDeliveryPrice?: Resolver<Maybe<ResolversTypes['DeliveryPrice']>, ParentType, ContextType, RequireFields<MutationChangeDeliveryPriceArgs, 'id'>>;
  changeManyPricesToBalloons?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationChangeManyPricesToBalloonsArgs, 'newPrice' | 'oldPrice'>>;
  changeManyPricesToBouquets?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationChangeManyPricesToBouquetsArgs, 'newPrice' | 'oldPrice'>>;
  deleteAssortmant?: Resolver<Maybe<ResolversTypes['Assortment']>, ParentType, ContextType, RequireFields<MutationDeleteAssortmantArgs, 'id'>>;
  deleteBalloon?: Resolver<Maybe<ResolversTypes['Balloon']>, ParentType, ContextType, RequireFields<MutationDeleteBalloonArgs, 'id'>>;
  deleteBouquet?: Resolver<Maybe<ResolversTypes['Bouquet']>, ParentType, ContextType, RequireFields<MutationDeleteBouquetArgs, 'id'>>;
  deleteCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'id'>>;
  deleteColor?: Resolver<Maybe<ResolversTypes['Color']>, ParentType, ContextType, RequireFields<MutationDeleteColorArgs, 'id'>>;
  deletePhone?: Resolver<Maybe<ResolversTypes['Phone']>, ParentType, ContextType, RequireFields<MutationDeletePhoneArgs, 'id'>>;
  deleteSocialNet?: Resolver<Maybe<ResolversTypes['SocialNet']>, ParentType, ContextType, RequireFields<MutationDeleteSocialNetArgs, 'id'>>;
  sendOrder?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationSendOrderArgs, 'order'>>;
}>;

export type PhoneResolvers<ContextType = any, ParentType extends ResolversParentTypes['Phone'] = ResolversParentTypes['Phone']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RootQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RootQueryType'] = ResolversParentTypes['RootQueryType']> = ResolversObject<{
  allBalloons?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<RootQueryTypeAllBalloonsArgs, never>>;
  allBouquets?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<RootQueryTypeAllBouquetsArgs, never>>;
  assortment?: Resolver<Maybe<Array<Maybe<ResolversTypes['Assortment']>>>, ParentType, ContextType>;
  balloon?: Resolver<Maybe<ResolversTypes['Balloon']>, ParentType, ContextType, RequireFields<RootQueryTypeBalloonArgs, 'id'>>;
  balloons?: Resolver<Maybe<Array<Maybe<ResolversTypes['Balloon']>>>, ParentType, ContextType, RequireFields<RootQueryTypeBalloonsArgs, 'skip' | 'take'>>;
  bouquet?: Resolver<Maybe<ResolversTypes['Bouquet']>, ParentType, ContextType, RequireFields<RootQueryTypeBouquetArgs, 'id'>>;
  bouquets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Bouquet']>>>, ParentType, ContextType, RequireFields<RootQueryTypeBouquetsArgs, 'skip' | 'take'>>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  colors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Color']>>>, ParentType, ContextType, RequireFields<RootQueryTypeColorsArgs, never>>;
  deliveryPrice?: Resolver<Maybe<ResolversTypes['DeliveryPrice']>, ParentType, ContextType>;
  maxBalloonPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxBouquetPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  phones?: Resolver<Maybe<Array<Maybe<ResolversTypes['Phone']>>>, ParentType, ContextType>;
  socialNets?: Resolver<Maybe<Array<Maybe<ResolversTypes['SocialNet']>>>, ParentType, ContextType>;
}>;

export type SocialNetResolvers<ContextType = any, ParentType extends ResolversParentTypes['SocialNet'] = ResolversParentTypes['SocialNet']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = ResolversObject<{
  Assortment?: AssortmentResolvers<ContextType>;
  Balloon?: BalloonResolvers<ContextType>;
  BasketType?: BasketTypeResolvers<ContextType>;
  Bouquet?: BouquetResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Color?: ColorResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DeliveryPrice?: DeliveryPriceResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Phone?: PhoneResolvers<ContextType>;
  RootQueryType?: RootQueryTypeResolvers<ContextType>;
  SocialNet?: SocialNetResolvers<ContextType>;
  Upload?: GraphQLScalarType;
}>;



export const SendOrderDocument = gql`
    mutation SendOrder($order: JSON!) {
  sendOrder(order: $order)
}
    `;
export type SendOrderMutationFn = Apollo.MutationFunction<SendOrderMutation, SendOrderMutationVariables>;

/**
 * __useSendOrderMutation__
 *
 * To run a mutation, you first call `useSendOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendOrderMutation, { data, loading, error }] = useSendOrderMutation({
 *   variables: {
 *      order: // value for 'order'
 *   },
 * });
 */
export function useSendOrderMutation(baseOptions?: Apollo.MutationHookOptions<SendOrderMutation, SendOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendOrderMutation, SendOrderMutationVariables>(SendOrderDocument, options);
      }
export type SendOrderMutationHookResult = ReturnType<typeof useSendOrderMutation>;
export type SendOrderMutationResult = Apollo.MutationResult<SendOrderMutation>;
export type SendOrderMutationOptions = Apollo.BaseMutationOptions<SendOrderMutation, SendOrderMutationVariables>;
export const AllBalloonsDocument = gql`
    query AllBalloons($price: Int, $categoryId: ID, $colorId: ID, $code: Int) {
  allBalloons(
    price: $price
    categoryId: $categoryId
    colorId: $colorId
    code: $code
  )
}
    `;

/**
 * __useAllBalloonsQuery__
 *
 * To run a query within a React component, call `useAllBalloonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBalloonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBalloonsQuery({
 *   variables: {
 *      price: // value for 'price'
 *      categoryId: // value for 'categoryId'
 *      colorId: // value for 'colorId'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useAllBalloonsQuery(baseOptions?: Apollo.QueryHookOptions<AllBalloonsQuery, AllBalloonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllBalloonsQuery, AllBalloonsQueryVariables>(AllBalloonsDocument, options);
      }
export function useAllBalloonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllBalloonsQuery, AllBalloonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllBalloonsQuery, AllBalloonsQueryVariables>(AllBalloonsDocument, options);
        }
export type AllBalloonsQueryHookResult = ReturnType<typeof useAllBalloonsQuery>;
export type AllBalloonsLazyQueryHookResult = ReturnType<typeof useAllBalloonsLazyQuery>;
export type AllBalloonsQueryResult = Apollo.QueryResult<AllBalloonsQuery, AllBalloonsQueryVariables>;
export const AllBouquetsDocument = gql`
    query AllBouquets($price: Int, $personType: Person, $code: Int) {
  allBouquets(price: $price, personType: $personType, code: $code)
}
    `;

/**
 * __useAllBouquetsQuery__
 *
 * To run a query within a React component, call `useAllBouquetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBouquetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBouquetsQuery({
 *   variables: {
 *      price: // value for 'price'
 *      personType: // value for 'personType'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useAllBouquetsQuery(baseOptions?: Apollo.QueryHookOptions<AllBouquetsQuery, AllBouquetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllBouquetsQuery, AllBouquetsQueryVariables>(AllBouquetsDocument, options);
      }
export function useAllBouquetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllBouquetsQuery, AllBouquetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllBouquetsQuery, AllBouquetsQueryVariables>(AllBouquetsDocument, options);
        }
export type AllBouquetsQueryHookResult = ReturnType<typeof useAllBouquetsQuery>;
export type AllBouquetsLazyQueryHookResult = ReturnType<typeof useAllBouquetsLazyQuery>;
export type AllBouquetsQueryResult = Apollo.QueryResult<AllBouquetsQuery, AllBouquetsQueryVariables>;
export const AssortmentDocument = gql`
    query Assortment {
  assortment {
    id
    name
    price
    fixed
  }
}
    `;

/**
 * __useAssortmentQuery__
 *
 * To run a query within a React component, call `useAssortmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useAssortmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAssortmentQuery({
 *   variables: {
 *   },
 * });
 */
export function useAssortmentQuery(baseOptions?: Apollo.QueryHookOptions<AssortmentQuery, AssortmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AssortmentQuery, AssortmentQueryVariables>(AssortmentDocument, options);
      }
export function useAssortmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AssortmentQuery, AssortmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AssortmentQuery, AssortmentQueryVariables>(AssortmentDocument, options);
        }
export type AssortmentQueryHookResult = ReturnType<typeof useAssortmentQuery>;
export type AssortmentLazyQueryHookResult = ReturnType<typeof useAssortmentLazyQuery>;
export type AssortmentQueryResult = Apollo.QueryResult<AssortmentQuery, AssortmentQueryVariables>;
export const BalloonDocument = gql`
    query Balloon($id: String!) {
  balloon(id: $id) {
    id
    name
    subname
    price
    description
    code
    image
    category {
      id
      name
    }
    color {
      id
      name
    }
    basketStatus @client {
      isInBasket
      basketQuantity
    }
  }
}
    `;

/**
 * __useBalloonQuery__
 *
 * To run a query within a React component, call `useBalloonQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalloonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalloonQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBalloonQuery(baseOptions: Apollo.QueryHookOptions<BalloonQuery, BalloonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BalloonQuery, BalloonQueryVariables>(BalloonDocument, options);
      }
export function useBalloonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BalloonQuery, BalloonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BalloonQuery, BalloonQueryVariables>(BalloonDocument, options);
        }
export type BalloonQueryHookResult = ReturnType<typeof useBalloonQuery>;
export type BalloonLazyQueryHookResult = ReturnType<typeof useBalloonLazyQuery>;
export type BalloonQueryResult = Apollo.QueryResult<BalloonQuery, BalloonQueryVariables>;
export const BalloonsDocument = gql`
    query Balloons($skip: Int!, $take: Int!, $price: Int, $categoryId: ID, $colorId: ID, $code: Int) {
  balloons(
    skip: $skip
    take: $take
    price: $price
    categoryId: $categoryId
    colorId: $colorId
    code: $code
  ) {
    id
    name
    subname
    price
    description
    code
    image
    category {
      id
      name
    }
    color {
      id
      name
    }
    basketStatus @client {
      isInBasket
      basketQuantity
    }
  }
}
    `;

/**
 * __useBalloonsQuery__
 *
 * To run a query within a React component, call `useBalloonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalloonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalloonsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      price: // value for 'price'
 *      categoryId: // value for 'categoryId'
 *      colorId: // value for 'colorId'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useBalloonsQuery(baseOptions: Apollo.QueryHookOptions<BalloonsQuery, BalloonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BalloonsQuery, BalloonsQueryVariables>(BalloonsDocument, options);
      }
export function useBalloonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BalloonsQuery, BalloonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BalloonsQuery, BalloonsQueryVariables>(BalloonsDocument, options);
        }
export type BalloonsQueryHookResult = ReturnType<typeof useBalloonsQuery>;
export type BalloonsLazyQueryHookResult = ReturnType<typeof useBalloonsLazyQuery>;
export type BalloonsQueryResult = Apollo.QueryResult<BalloonsQuery, BalloonsQueryVariables>;
export const BouquetDocument = gql`
    query Bouquet($id: String!) {
  bouquet(id: $id) {
    id
    name
    subname
    price
    description
    code
    image
    personType
    basketStatus @client {
      isInBasket
      basketQuantity
    }
  }
}
    `;

/**
 * __useBouquetQuery__
 *
 * To run a query within a React component, call `useBouquetQuery` and pass it any options that fit your needs.
 * When your component renders, `useBouquetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBouquetQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBouquetQuery(baseOptions: Apollo.QueryHookOptions<BouquetQuery, BouquetQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BouquetQuery, BouquetQueryVariables>(BouquetDocument, options);
      }
export function useBouquetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BouquetQuery, BouquetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BouquetQuery, BouquetQueryVariables>(BouquetDocument, options);
        }
export type BouquetQueryHookResult = ReturnType<typeof useBouquetQuery>;
export type BouquetLazyQueryHookResult = ReturnType<typeof useBouquetLazyQuery>;
export type BouquetQueryResult = Apollo.QueryResult<BouquetQuery, BouquetQueryVariables>;
export const BouquetsDocument = gql`
    query Bouquets($skip: Int!, $take: Int!, $price: Int, $personType: Person, $code: Int) {
  bouquets(
    skip: $skip
    take: $take
    price: $price
    personType: $personType
    code: $code
  ) {
    id
    name
    subname
    price
    description
    code
    image
    personType
    basketStatus @client {
      isInBasket
      basketQuantity
    }
  }
}
    `;

/**
 * __useBouquetsQuery__
 *
 * To run a query within a React component, call `useBouquetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBouquetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBouquetsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      price: // value for 'price'
 *      personType: // value for 'personType'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useBouquetsQuery(baseOptions: Apollo.QueryHookOptions<BouquetsQuery, BouquetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BouquetsQuery, BouquetsQueryVariables>(BouquetsDocument, options);
      }
export function useBouquetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BouquetsQuery, BouquetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BouquetsQuery, BouquetsQueryVariables>(BouquetsDocument, options);
        }
export type BouquetsQueryHookResult = ReturnType<typeof useBouquetsQuery>;
export type BouquetsLazyQueryHookResult = ReturnType<typeof useBouquetsLazyQuery>;
export type BouquetsQueryResult = Apollo.QueryResult<BouquetsQuery, BouquetsQueryVariables>;
export const CategoriesDocument = gql`
    query Categories {
  categories {
    id
    name
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const ColorsDocument = gql`
    query Colors($categoryId: ID) {
  colors(categoryId: $categoryId) {
    id
    name
    cssName
  }
}
    `;

/**
 * __useColorsQuery__
 *
 * To run a query within a React component, call `useColorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useColorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useColorsQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useColorsQuery(baseOptions?: Apollo.QueryHookOptions<ColorsQuery, ColorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ColorsQuery, ColorsQueryVariables>(ColorsDocument, options);
      }
export function useColorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ColorsQuery, ColorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ColorsQuery, ColorsQueryVariables>(ColorsDocument, options);
        }
export type ColorsQueryHookResult = ReturnType<typeof useColorsQuery>;
export type ColorsLazyQueryHookResult = ReturnType<typeof useColorsLazyQuery>;
export type ColorsQueryResult = Apollo.QueryResult<ColorsQuery, ColorsQueryVariables>;
export const DeliveryPriceDocument = gql`
    query DeliveryPrice {
  deliveryPrice {
    id
    price
  }
}
    `;

/**
 * __useDeliveryPriceQuery__
 *
 * To run a query within a React component, call `useDeliveryPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeliveryPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeliveryPriceQuery({
 *   variables: {
 *   },
 * });
 */
export function useDeliveryPriceQuery(baseOptions?: Apollo.QueryHookOptions<DeliveryPriceQuery, DeliveryPriceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DeliveryPriceQuery, DeliveryPriceQueryVariables>(DeliveryPriceDocument, options);
      }
export function useDeliveryPriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DeliveryPriceQuery, DeliveryPriceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DeliveryPriceQuery, DeliveryPriceQueryVariables>(DeliveryPriceDocument, options);
        }
export type DeliveryPriceQueryHookResult = ReturnType<typeof useDeliveryPriceQuery>;
export type DeliveryPriceLazyQueryHookResult = ReturnType<typeof useDeliveryPriceLazyQuery>;
export type DeliveryPriceQueryResult = Apollo.QueryResult<DeliveryPriceQuery, DeliveryPriceQueryVariables>;
export const MaxBalloonPriceDocument = gql`
    query MaxBalloonPrice {
  maxBalloonPrice
}
    `;

/**
 * __useMaxBalloonPriceQuery__
 *
 * To run a query within a React component, call `useMaxBalloonPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useMaxBalloonPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMaxBalloonPriceQuery({
 *   variables: {
 *   },
 * });
 */
export function useMaxBalloonPriceQuery(baseOptions?: Apollo.QueryHookOptions<MaxBalloonPriceQuery, MaxBalloonPriceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MaxBalloonPriceQuery, MaxBalloonPriceQueryVariables>(MaxBalloonPriceDocument, options);
      }
export function useMaxBalloonPriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MaxBalloonPriceQuery, MaxBalloonPriceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MaxBalloonPriceQuery, MaxBalloonPriceQueryVariables>(MaxBalloonPriceDocument, options);
        }
export type MaxBalloonPriceQueryHookResult = ReturnType<typeof useMaxBalloonPriceQuery>;
export type MaxBalloonPriceLazyQueryHookResult = ReturnType<typeof useMaxBalloonPriceLazyQuery>;
export type MaxBalloonPriceQueryResult = Apollo.QueryResult<MaxBalloonPriceQuery, MaxBalloonPriceQueryVariables>;
export const MaxBouquetPriceDocument = gql`
    query MaxBouquetPrice {
  maxBouquetPrice
}
    `;

/**
 * __useMaxBouquetPriceQuery__
 *
 * To run a query within a React component, call `useMaxBouquetPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useMaxBouquetPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMaxBouquetPriceQuery({
 *   variables: {
 *   },
 * });
 */
export function useMaxBouquetPriceQuery(baseOptions?: Apollo.QueryHookOptions<MaxBouquetPriceQuery, MaxBouquetPriceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MaxBouquetPriceQuery, MaxBouquetPriceQueryVariables>(MaxBouquetPriceDocument, options);
      }
export function useMaxBouquetPriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MaxBouquetPriceQuery, MaxBouquetPriceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MaxBouquetPriceQuery, MaxBouquetPriceQueryVariables>(MaxBouquetPriceDocument, options);
        }
export type MaxBouquetPriceQueryHookResult = ReturnType<typeof useMaxBouquetPriceQuery>;
export type MaxBouquetPriceLazyQueryHookResult = ReturnType<typeof useMaxBouquetPriceLazyQuery>;
export type MaxBouquetPriceQueryResult = Apollo.QueryResult<MaxBouquetPriceQuery, MaxBouquetPriceQueryVariables>;
export const PhonesDocument = gql`
    query Phones {
  phones {
    id
    number
  }
}
    `;

/**
 * __usePhonesQuery__
 *
 * To run a query within a React component, call `usePhonesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePhonesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePhonesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePhonesQuery(baseOptions?: Apollo.QueryHookOptions<PhonesQuery, PhonesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PhonesQuery, PhonesQueryVariables>(PhonesDocument, options);
      }
export function usePhonesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PhonesQuery, PhonesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PhonesQuery, PhonesQueryVariables>(PhonesDocument, options);
        }
export type PhonesQueryHookResult = ReturnType<typeof usePhonesQuery>;
export type PhonesLazyQueryHookResult = ReturnType<typeof usePhonesLazyQuery>;
export type PhonesQueryResult = Apollo.QueryResult<PhonesQuery, PhonesQueryVariables>;
export const SocialNetsDocument = gql`
    query SocialNets {
  socialNets {
    id
    name
    link
    image
  }
}
    `;

/**
 * __useSocialNetsQuery__
 *
 * To run a query within a React component, call `useSocialNetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSocialNetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSocialNetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSocialNetsQuery(baseOptions?: Apollo.QueryHookOptions<SocialNetsQuery, SocialNetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SocialNetsQuery, SocialNetsQueryVariables>(SocialNetsDocument, options);
      }
export function useSocialNetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SocialNetsQuery, SocialNetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SocialNetsQuery, SocialNetsQueryVariables>(SocialNetsDocument, options);
        }
export type SocialNetsQueryHookResult = ReturnType<typeof useSocialNetsQuery>;
export type SocialNetsLazyQueryHookResult = ReturnType<typeof useSocialNetsLazyQuery>;
export type SocialNetsQueryResult = Apollo.QueryResult<SocialNetsQuery, SocialNetsQueryVariables>;