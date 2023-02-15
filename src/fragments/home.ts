// Services
import { gql } from "@/services/hygraphClient";

// Fragments
import { TestimonyDTO, TestimonyFragment } from "./testimony";
import { ListProductsDTO, ListProducts } from "./products";

export interface HomeDTO {
  data: {
    home: {
      products: ListProductsDTO[];
      testimonies: TestimonyDTO[];
    };
  };
}

export const homeFragment = gql`
    query {
      home(where: {id: "cldw930dc31cb0akj3k5quv21"}) {
        ${ListProducts}
        ${TestimonyFragment}
      }
    }
  `;
