import { gql } from "@/services/hygraphClient";

export interface ThumbnailDTO {
  url: string;
  fileName: string;
}

export interface ProductVideoDTO {
  thumbnail: ThumbnailDTO;
  link: string;
}

export interface ListProductsDTO {
  id: string;
  name: string;
  productVideo: ProductVideoDTO;
}

export const ListProducts = gql`
    products {
        id
        name
        productVideo {
        thumbnail {
            url
            fileName
        }
        link
        }
    }
`;
