import ProductCardBgImage from '@/components/shared/card/ProductCardBgImage';
import CategoryTitle from './CategoryTitle';
import { useProduct } from '@/hooks/useProduct';

export default function PopularProductList() {
  const { hotCoffees, ostalaJela  } = useProduct();


  return (
    <div className="mt-6">
      <CategoryTitle>Mozzart preporuka</CategoryTitle>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {hotCoffees && ostalaJela && (
           <>
           {hotCoffees[3] && <ProductCardBgImage key={hotCoffees[3]?.id} coffee={hotCoffees[3]} />}
           {ostalaJela[2] && <ProductCardBgImage key={ostalaJela[2]?.id} coffee={ostalaJela[2]} />}
           {hotCoffees[0] && <ProductCardBgImage key={hotCoffees[0]?.id} coffee={hotCoffees[0]} />}
           {hotCoffees[5] && <ProductCardBgImage key={hotCoffees[5]?.id} coffee={hotCoffees[5]} />}
         </>
        )}
      </div>
    </div>
  );
}
