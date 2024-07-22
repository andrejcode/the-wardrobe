import type {
  Categories,
  Subcategories,
  Clothing,
  ClothingVariations,
  Inventory,
} from '@prisma/client';
import Stripe from 'stripe';

export type CategoriesWithSubcategories = Categories & {
  subcategories?: Subcategories[];
};

export type ClothingVariationWithInventory = ClothingVariations & {
  inventory: Inventory[];
};

export type ClothingWithClothingVariations = Clothing & {
  clothingVariations: ClothingVariations[];
};

export type ClothingWithVariationsAndInventory = Clothing & {
  clothingVariations: ClothingVariationWithInventory[];
};

export type BagItem = {
  id: number;
  clothingId: number;
  name: string;
  color: string;
  size: string;
  quantity: number;
  imageUrl: string;
  priceInCents: number;
};

export type PaymentDetails = {
  paymentIntent: Stripe.PaymentIntent;
  charges: Stripe.Charge[];
  lineItems: Stripe.LineItem[];
};
