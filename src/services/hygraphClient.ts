// Libs
import { gql, GraphQLClient } from "graphql-request";

// eslint-disable-next-line import/no-anonymous-default-export
export default new GraphQLClient(
  "https://sa-east-1.cdn.hygraph.com/content/cldw6lpsu21wr01unhamjhiif/master"
);

export { gql };
