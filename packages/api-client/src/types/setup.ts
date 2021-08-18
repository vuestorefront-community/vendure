import ApolloClient, { ApolloClientOptions } from 'apollo-client';
import { VendureApiMethods } from './API';

export interface Storage {
  set: (name: string, value: any) => void;
  get: (name: string) => any;
  remove: (name: string) => any;
  removeAll: () => void;
}

export type AuthMethods = {
  getAuthCookie(): string;
  setAuthCookie(token: string): void;
  removeAuthCookie(): void;
};

export interface ClientConfig {
  api: {
      uri: string;
  }
  auth: AuthMethods;
  currency: string;
  lang: string;
}

export interface Config<T = any> extends ClientConfig {
  client?: ApolloClient<T>;
  storage: Storage;
  customOptions?: ApolloClientOptions<any>;
  overrides: VendureApiMethods;
}

export type ClientInstance = ApolloClient<any>
