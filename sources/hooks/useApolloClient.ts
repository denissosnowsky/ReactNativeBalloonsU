import { useEffect } from "react";
import { NormalizedCacheObject } from "@apollo/client";
import { ApolloClient } from "@apollo/client";
import { useCallback, useState } from "react";
import {getApolloClient} from "../store/apollo-client";

export const useApolloClient = () => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

  const initApollo = useCallback(async () => {
    const client = await getApolloClient();
    setClient(client);
  }, []);

  useEffect(() => {
    initApollo();
  }, [initApollo]);

  return client;
};
