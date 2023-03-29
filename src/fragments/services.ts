// Services
import { gql } from "@/services/hygraphClient";

export interface ServicesDTO {
  id: string;
  image: {
    url: string;
    fileName: string;
  };
  video: string;
}

export interface ServicesType {
  data: {
    services: ServicesDTO[];
  };
}

export const services = gql`
  query {
    services {
      id
      image {
        url
        fileName
      }
      video
    }
  }
`;
