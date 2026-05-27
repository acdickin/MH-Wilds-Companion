import React from 'react';
import { getArmor } from '@/lib/armor';
import Card from '@/components/Card';
import { ArmorType } from '@/types/armor';
export const metadata = {
  title: 'Armor',
  description:
    'A collection of armor sets and pieces for Monster Hunter Wilds.',
};

const ArmorPage = async () => {
  const armor = await getArmor();
  console.log(armor);
  return (
    <div className="flex flex-col gap-6">
      <h3>Armor</h3>

      {armor && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {armor.map(({ id, name, defense }: ArmorType) => (
            <Card key={id}>
              <h4>{name}</h4>
              <p>Defense: {defense.base}</p>
              <p>Max Defense: {defense.max}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArmorPage;
