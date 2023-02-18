// Services
import { gql } from "@/services/hygraphClient";

// Fragments
import { TestimonyDTO, TestimonyFragment } from "./testimony";
import { ListProductsDTO, ListProducts } from "./products";

export interface HomeDTO {
  data: {
    board: {
      products: ListProductsDTO[];
    };
    mirror: {
      products: ListProductsDTO[];
    };
    testimonies: TestimonyDTO[];
  };
}

export const homeFragment = gql`
    query {
      board(where: { id: "cle9cj2834hy30blxrbg9vs2z" }) {
        ${ListProducts}
      }
      mirror(where: {id: "cle8y6t383r4u0blxhibst3pg"}) {
        ${ListProducts}
      }
      ${TestimonyFragment}
    }
  `;
