// Services
import { gql } from "@/services/hygraphClient";

// Fragments
import { TestimonyDTO, TestimonyFragment } from "./testimony";

export interface HomeDTO {
  data: {
    home: {
      testimonies: TestimonyDTO[];
    };
  };
}

export const homeFragment = gql`
    query {
      home(where: {id: "cldw930dc31cb0akj3k5quv21"}) {
        ${TestimonyFragment}
      }
    }
  `;
