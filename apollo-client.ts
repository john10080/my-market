import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:9000", // Change to your GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;