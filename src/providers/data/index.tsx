import { GraphQLClient } from "@refinedev/nestjs-query";
import { promiseHooks } from "v8";

export const API_URL = "http://api.crm.refine.dev"

export const client = new GraphQLClient(API_URL, {
    fetch: (url: string, options: RequestInit) => {
        try {
            return fetchWrapper(url, options);
        } catch (error) {
            return promiseHooks.reject(error as Error);
        }
    }
})