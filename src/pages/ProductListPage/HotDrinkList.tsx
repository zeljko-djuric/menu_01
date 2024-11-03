import { useProduct } from '@/hooks/useProduct';
import ProductsByCategory from './ProductsByCategory';

export default function HotDrinkList() {
  // Product Provider
  const { hotCoffees } = useProduct();

  return <ProductsByCategory title="Pizza" coffees={hotCoffees} />;
}
