import Image from 'next/image';
import {
  fetchClothingItemById,
  fetchUserByEmail,
  isItemInWishlist,
} from '@/lib/data';
import { notFound } from 'next/navigation';
import Button from '../button';
import SaveIcon from './save-icon';
import { auth } from '@/auth';
import type { Color, Size, User } from '@prisma/client';
import ColorCirclesParams from './color-circles-params';
import Description from './description';
import SizesParams from './sizes-params';
import { getUniqueSizes } from '@/lib/utils';

export default async function ClothingDetails({
  id,
  color,
  size,
}: {
  id: number;
  color?: Color;
  size?: Size;
}) {
  const session = await auth();

  let user: User | null = null;
  if (session && session.user && session.user.email) {
    user = await fetchUserByEmail(session.user.email);
  }

  const item = await fetchClothingItemById(id, color, size);
  const isInWishlist = await isItemInWishlist(id, user!.id);

  if (!item) {
    notFound();
  }

  const imageUrl =
    item.clothingVariations.find((variatinon) => variatinon.color === color)
      ?.imageUrl ?? item.clothingVariations[0].imageUrl;

  const uniqueSizes = getUniqueSizes(item);

  function calculatePriceInCents(): number | null {
    if (!item) {
      return null;
    }

    if (!size) {
      return null;
    }

    if (!color && size) {
      const inventoryItem = item.clothingVariations[0].inventory.find(
        (inventory) => inventory.size === size
      );
      return inventoryItem ? inventoryItem.priceInCents / 100 : null;
    }

    if (color && size) {
      const variation = item.clothingVariations.find(
        (variation) => variation.color === color
      );

      if (variation) {
        const inventory = variation.inventory.find(
          (inventory) => inventory.size === size
        );

        if (inventory) {
          return inventory.priceInCents / 100;
        }
      }
    }

    return null;
  }

  function calculateQuantity(): number | null {
    if (!item) {
      return null;
    }

    if (!size) {
      return null;
    }

    if (size) {
      const inventoryItem = item.clothingVariations[0].inventory.find(
        (inventory) => inventory.size === size
      );
      return inventoryItem ? inventoryItem.quantity : null;
    }

    return null;
  }

  const price = calculatePriceInCents();
  const quantity = calculateQuantity();

  return (
    <section className="mx-4 mt-8 flex flex-col items-center justify-center md:mx-[10%] md:mt-16 md:flex-row">
      <div className="relative mb-8 h-96 w-96 md:mb-0 md:flex-1">
        <Image
          src={imageUrl}
          alt={item.name}
          fill={true}
          priority={true}
          sizes="100%"
          quality={50}
          className="object-contain"
        />
      </div>

      <div className="mx-auto md:flex-1">
        <div className="max-w-96">
          <h1 className="text-xl font-bold md:text-2xl">{item.name}</h1>

          <ColorCirclesParams variations={item.clothingVariations} />
          <SizesParams sizes={uniqueSizes} />

          {price ? (
            quantity && quantity > 0 ? (
              <p className="my-4 text-xl font-bold md:text-2xl">
                {price}&euro;
              </p>
            ) : (
              <p className="my-4 text-xl font-bold text-red-400 md:text-2xl">
                Out of stock
              </p>
            )
          ) : (
            <p className="my-4 text-xl md:text-2xl">Select your size</p>
          )}

          <Button rounded fullWidth={true}>
            Virutal Try-On
          </Button>

          <div className="mt-3 flex items-center">
            <Button
              rounded
              fullWidth={true}
              isDisabled={price === null || quantity === null || quantity <= 0}
            >
              Add to bag
            </Button>
            <SaveIcon
              id={id}
              userId={user ? user.id : null}
              isInWishlist={isInWishlist}
            />
          </div>

          <Description description={item.description} />
        </div>
      </div>
    </section>
  );
}
