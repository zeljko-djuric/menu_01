import { useProduct } from '@/hooks/useProduct';
import ProductsByCategory from './ProductsByCategory';

export default function ColdDrinkList() {
  // Product Provider
  const { ostalaJela } = useProduct();

  return <ProductsByCategory title="Ostala jela" coffees={ostalaJela} />;
}
