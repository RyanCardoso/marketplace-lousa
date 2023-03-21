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
  slug: string;
  name: string;
  productVideo: ProductVideoDTO;
}

export interface ProductDTO {
  id: string;
  name: string;
  productShowcase: ProductShowCaseDTO;
  description: {
    html: string;
  };
  relatedproducts: ListProductsDTO[];
}

export const ListProducts = gql`
    products {
      id
      slug
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

export const ProductGql = (slug: string) => {
  const formatSlug = `"${slug}"`;

  return gql`
    query {
      product(where: { slug: ${formatSlug}}) {
        id
        name
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
