import { ApolloClient, InMemoryCache } from "@apollo/client";
import { graphqlUrl } from "../../config";
import { basketVar } from "./variables";
import { ReadFieldFunction } from "@apollo/client/cache/core/types/common";

export function getApolloClient() {
  const client = new ApolloClient({
    uri: graphqlUrl,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            bouquets: {
              keyArgs: ["price", "personType", "code"],
              ...offsetAndLimitPagination(),
            },
            balloons: {
              keyArgs: ["price", "categoryId", "colorId", "code"],
              ...offsetAndLimitPagination(),
            },
          },
        },
        Balloon: {
          fields: {
            basketStatus: {
              ...readLocalBasketStatusValues(),
            },
          },
        },
        Bouquet: {
          fields: {
            basketStatus: {
              ...readLocalBasketStatusValues(),
            },
          },
        },
      },
    }),
  });

  function offsetAndLimitPagination() {
    return {
      merge(
        existing: any[] = [],
        incoming: any[],
        { args: { skip } }: Record<string, any>
      ) {
        const merged = existing ? existing.slice(0) : [];
        for (let i = 0; i < incoming.length; ++i) {
          merged[skip + i] = incoming[i];
        }
        return merged;
      },
      read(existing: any[], { args: { skip, take } }: Record<string, any>) {
        return existing && existing.slice(skip, skip + take);
      },
    };
  }

  function readLocalBasketStatusValues() {
    return {
      read(_, { readField }: { readField: ReadFieldFunction }) {
        const orders = basketVar();
        const foundInBasket = orders.filter(
          (obj) => obj.id === readField("id")
        )[0];
        if (foundInBasket) {
          return {
            isInBasket: true,
            basketQuantity: foundInBasket.quantity,
          };
        } else {
          return {
            isInBasket: false,
            basketQuantity: 0,
          };
        }
      },
    };
  }

  return client;
}
