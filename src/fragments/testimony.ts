import { gql } from "@/services/hygraphClient";

export interface TestimonyDTO {
  id: string;
  message: string;
  author: string;
}

export const TestimonyFragment = gql`
  testimonies {
    id
    message
    author
  }
`;
