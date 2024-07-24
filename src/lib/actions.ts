'use server';

import { signIn } from '@/auth';
import { redirect } from 'next/navigation';
import {
  removeClothingItemFromWishlist,
  saveClothingItemToWishlist,
} from './data';
import { revalidatePath } from 'next/cache';

export async function signInWithGoogle() {
  await signIn('google', { redirectTo: '/' });
}

export async function addOrRemoveFromWishlist(
  id: number,
  userId: string | null,
  isInWishlist: boolean
) {
  if (userId === null) {
    redirect('/api/auth/signin');
  }

  try {
    if (isInWishlist) {
      await removeClothingItemFromWishlist(id, userId);
    } else {
      await saveClothingItemToWishlist(id, userId);
    }
  } catch (error) {
    throw new Error('Could not save item to wishlist');
  }

  revalidatePath(`shop/clothing-item/${id}`);
}
