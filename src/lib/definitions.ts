import type {
  Category,
  Subcategory,
  ClothingItem,
  ClothingVariation,
  Inventory,
} from '@prisma/client';
import Stripe from 'stripe';

export type CategoryWithSubcategories = Category & {
  subcategories?: Subcategory[];
};

export type ClothingVariationWithInventory = ClothingVariation & {
  inventory: Inventory[];
};

export type ClothingItemWithClothingVariations = ClothingItem & {
  clothingVariations: ClothingVariation[];
};

export type ClothingItemWithVariationsAndInventory = ClothingItem & {
  clothingVariations: ClothingVariationWithInventory[];
};

export interface BagItem {
  id: number;
  clothingId: number;
  name: string;
  color: string;
  size: string;
  quantity: number;
  imageUrl: string;
  priceInCents: number;
}

export interface PaymentDetails {
  paymentIntent: Stripe.PaymentIntent;
  charges: Stripe.Charge[];
  lineItems: Stripe.LineItem[];
}

export interface ImageOrMask {
  url: string;
  content_type: string;
  file_name: string;
  file_size: number;
  width: number;
  height: number;
}

export interface ImageMaskData {
  image: ImageOrMask;
  mask: ImageOrMask;
}
