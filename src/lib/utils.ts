import { Gender } from '@prisma/client';
import { CLOTHING_ITEMS_PER_PAGE } from './constants';

export function getGenderForSection(section: string) {
  if (section === 'women') {
    return Gender.FEMALE;
  }

  if (section === 'men') {
    return Gender.MALE;
  }

  return undefined;
}

export function calculatePages(totalItems: number) {
  return Math.ceil(totalItems / CLOTHING_ITEMS_PER_PAGE);
}
