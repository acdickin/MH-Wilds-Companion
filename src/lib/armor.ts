'use server';

export async function getArmor() {
  const response = await fetch(
    'https://wilds.mhdb.io/en/armor?limit=10&offset=0'
  );
  const result = await response.json();
  console.log(result);
  return result;
}
