export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image_url: string;
  distribution: RatingBarType[];
  images: string[];
  rating_count:number,
  
};

export type RatingBarType = {
  stars: number;
  count: number;
  pct: number;
};
