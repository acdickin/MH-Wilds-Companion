import React from 'react';
import { getArmor } from '@/lib/armor';
export const metadata = {
  title: 'Armor',
  description:
    'A collection of armor sets and pieces for Monster Hunter Wilds.',
};

const ArmorPage = async () => {
  const armor = await getArmor();
  console.log(armor);
  return (
    <div>
      <h3>Armor</h3>
    </div>
  );
};

export default ArmorPage;
