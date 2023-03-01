import { gql } from "@/services/hygraphClient";

export interface ThumbnailDTO {
  url: string;
  fileName: string;
}

export interface ProductVideoDTO {
  id: string;
  thumbnail: ThumbnailDTO;
  link: string;
}

export interface ProductShowCaseDTO {
  images: {
    id: string;
    url: string;
    fileName: string;
  }[];
  productVideos: ProductVideoDTO[];
}

export interface ListProductsDTO {
  id: string;
  name: string;
  productVideo: ProductVideoDTO;
}

export interface ProductDTO {
  id: string;
  name: string;
  price: number;
  promotion: number;
  productShowcase: ProductShowCaseDTO;
  description: {
    html: string;
  };
  relatedproducts: ListProductsDTO[];
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

export const ProductGql = (id: string) => {
  const formatId = `"${id}"`;

  return gql`
    query {
      product(where: { id: ${formatId}}) {
        id
        name
        price
        promotion
        productShowcase {
          images {
            id
            url
            fileName
          }
          productVideos {
            id
            thumbnail {
              url
              fileName
            }
            link
          }
        }
        description {
          html
        }
        relatedproducts {
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
      }
    }
  `;
};
