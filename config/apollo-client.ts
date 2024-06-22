import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://your-graphql-endpoint.com/graphql", // Замените на ваш GraphQL эндпоинт
  cache: new InMemoryCache(),
});

export default client;
