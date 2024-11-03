import { PencilSquareIcon } from '@heroicons/react/16/solid';
import { useModal } from '@/hooks/useModal';
import { useUserAddress } from '@/hooks/useUserAddress';

// Assuming you have an image file imported or a URL to the image
const imageSrc = '/images/mozzart_banner.png'; // Replace with the actual path or URL of the image

export default function UserAddressCard() {
  // Address Provider
  const { address } = useUserAddress();
  // Modal Provider
  const { showAddressModal } = useModal();

  return (
    <div className="relative w-full h-full">
      {/* Image Component */}
      <img
        src={imageSrc}
        alt="User Location"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        {address?.fullAddress && (
          <span className="font-semibold text-white line-clamp-2 mt-2">
            {address.fullAddress}
          </span>
        )}
      </div>
      {address?.fullAddress && (
        <div className="absolute top-2 right-2">
          <button
            type="button"
            onClick={showAddressModal}
            className="text-primary bg-white/50 hover:bg-white focus:outline-none rounded-full text-sm p-1.5 inline-flex items-center"
          >
            <PencilSquareIcon className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
