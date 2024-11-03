import { useProduct } from '@/hooks/useProduct';
import PopularCategoryList from './PopularCategoryList';

export default function PopularOstalaJela() {
  // Product Provider
  const { ostalaJela } = useProduct();

  return (
    <PopularCategoryList
      title="Ostala jela"
      coffees={ostalaJela?.slice(0, 4)}
    />
  );
}
