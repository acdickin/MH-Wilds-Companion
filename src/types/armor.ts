export interface Skill {
  id: number;
  name: string;
  description: string;
  level: number;
  setPiecesRequired: number | null;
  skill: {
    id: number;
    gameId: number;
    name: string;
    description: string;
    kind: string;
    icon: {
      id: number;
      kind: string;
    };
  };
}
export interface material {
  item: {
    id: number;
    gameId: number;
    rarity: number;
    name: string;
    description: string;
    value: number;
    carryLimit: number;
    recipes: [];
    icon: {
      id: number;
      kind: string;
      colorId: number;
      color: string;
    };
  };
  quantity: number;
  id: number;
}

export interface ArmorType {
  id: number;
  kind: string;
  name: string;
  description: string;
  rank: string;
  rarity: number;
  resistances: {
    fire: number;
    water: number;
    ice: number;
    thunder: number;
    dragon: number;
  };
  defense: {
    base: number;
    max: number;
  };
  skills: Skill[];
  slots: number[];
  crafting: {
    armor: { id: number } | null;
    materials: [];
    zennyCost: number;
    id: number;
  };
  armorSet: {
    id: number;
    gameId: number;
  };
}
