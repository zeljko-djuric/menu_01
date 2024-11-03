import { CoffeeSize, DeliOption, LatLng, PaymentMethod } from '@/types';

export const APP_NAME = "Pizzeria Mozzart";

export const GOOGLE_OAUTH_CLIENT_ID = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID;

export const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export const defaultCoordinate: LatLng = {
  lng: 96.17045650343823,
  lat: 16.785692464382592,
};

export const defaultDeliFee = 2000;

export const coffeeSizeOptions = [
  {
    value: CoffeeSize.SMALL,
    label: 'Mala',
  },
  {
    value: CoffeeSize.MEDIUM,
    label: 'Srednja',
  },
  {
    value: CoffeeSize.LARGE,
    label: 'Velika',
  },
];

export const deliOptions = [
  {
    value: DeliOption.DELIVER,
    label: 'Deliver',
  },
  {
    value: DeliOption.PICK_UP,
    label: 'Pick Up',
  },
];

export const paymentMethodOptions = [
  {
    value: PaymentMethod.CASH,
    label: "Cash on Delivery",
    icon: '/images/cash-payment-icon.png',
  },
  {
    value: PaymentMethod.KBZ_PAY,
    label: "KBZ Pay",
    icon: '/images/kbz-pay-icon.png',
  },
  {
    value: PaymentMethod.WAVE_MONEY,
    label: "Wave Money",
    icon: '/images/wave-money-icon.png',
  },
];
