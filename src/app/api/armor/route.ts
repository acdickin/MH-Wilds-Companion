import { NextResponse } from 'next/server';
import { getArmor } from '../../../lib/armor';

export async function GET() {
  const armor = await getArmor();
  return NextResponse.json(armor);
}
