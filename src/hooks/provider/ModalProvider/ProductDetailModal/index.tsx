import { useState } from 'react';
import BaseModal from '@/components/shared/modal/BaseModal';
import { CoffeeProduct, CoffeeSize } from '@/types';
import Footer from './Footer';
import ProductSizeSwitch from './ProductSizeSwitch';
import ProductInfo from './ProductInfo';
import ProductImage from './ProductImage';
import Title6 from '@/components/shared/typo/Title6';

interface ProductDetailModalProps {
  product: CoffeeProduct | null;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  onClose,
}: ProductDetailModalProps) {
  // State for coffee size
  const [size, setSize] = useState<CoffeeSize>(CoffeeSize.SMALL);

  // Calculate the price based on the selected size
  const sizeIndex = Object.values(CoffeeSize).indexOf(size); // Get index of the selected size
  const selectedPrice =
    product && product.price.length > 1
      ? product.price[sizeIndex] // Get the price based on the index if multiple prices exist
      : product?.price[0]; // If only one price, use the single price value

  return (
    <BaseModal show={!!product} onClose={onClose}>
      {product && (
        <>
          <ProductImage product={product} onClose={onClose} />
          <div className="p-4 pb-8">
            <ProductInfo product={product} />
            <hr className="my-4" />
            
            {/* Conditionally render ProductSizeSwitch only if product.type is 'hot' */}
            {product.type === 'hot' && (
              <ProductSizeSwitch size={size} setSize={setSize} price={selectedPrice} />
            )}
            
            <Title6 className="mt-4">Cijena: {selectedPrice}</Title6>
          </div>
          <Footer product={product} onClose={onClose} />
        </>
      )}
    </BaseModal>
  );
}
