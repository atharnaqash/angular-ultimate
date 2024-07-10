export interface MenuItem {
  id?: string;
  name: string;
  price: number;
  isVegetarian?: boolean;
  promo?: 'new' | 'limited' | 'free',
  image?: string
}





