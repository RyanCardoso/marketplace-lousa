export interface PhotoswipeDTO {
  type: "img" | "video";
  thumbnail: string;
  src: string;
  alt: string;
}

export interface ProductDTO {
  id: string;
  name: string;
  description: string;
  promotion: number;
  price: number;
  img: string;
  photoswipe: PhotoswipeDTO[];
}
