// Libs
import { gql, GraphQLClient } from "graphql-request";

// eslint-disable-next-line import/no-anonymous-default-export
export default new GraphQLClient(process.env.NEXT_PUBLIC_API_CMS as string);

export { gql };
