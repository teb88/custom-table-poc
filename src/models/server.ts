interface PaginatedResponse {
  total: number;
  skip: number;
  limit: number;
}

export interface ProductsVM extends PaginatedResponse {
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
