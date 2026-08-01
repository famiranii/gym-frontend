export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image_url: string;
  rating_bar: RatingBarType[];
};

export type RatingBarType = {
  star: number;
  count: number;
  pct: number;
};
