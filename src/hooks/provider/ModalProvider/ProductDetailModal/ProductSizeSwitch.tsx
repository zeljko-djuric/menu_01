import { RadioGroup } from '@headlessui/react';
import { classNames } from '@/utils/helper';
import Title6 from '@/components/shared/typo/Title6';
import { CoffeeSize } from '@/types';
import { coffeeSizeOptions } from '@/constants/constants';

// Define the component props
type ProductSizeSwitchProps = {
  size: CoffeeSize;
  setSize: (size: CoffeeSize) => void;
  price: number | null; // Add price prop
};

export default function ProductSizeSwitch({ size, setSize }: ProductSizeSwitchProps) {
  return (
    <div>
      <Title6 className="mb-2">Veličina</Title6>
      <RadioGroup value={size} onChange={setSize}>
        <RadioGroup.Label className="sr-only">Veličina</RadioGroup.Label>
        <div className="flex flex-row gap-4">
          {coffeeSizeOptions.map((option) => (
            <RadioGroup.Option
              key={option.label}
              value={option.value}
              className={({ checked }) =>
                classNames(
                  'flex items-center justify-center px-4 py-1 border rounded-xl',
                  checked
                    ? 'bg-primary-50'
                    : 'bg-white border-neutral-200'
                )
              }
            >
              {option.label}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
      <hr className="my-4" />
    </div>
  );
}
