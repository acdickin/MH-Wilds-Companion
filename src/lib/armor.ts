'use server';

import { ArmorType } from '@/types/armor';

export async function getArmor(): Promise<ArmorType[]> {
  const response = await fetch(
    'https://wilds.mhdb.io/en/armor?limit=12&offset=0'
  );
  const result = await response.json();
  console.log(result);
  return result;
}
