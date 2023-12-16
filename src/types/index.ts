export type TBlueprintInGame = {
  gameId: number;
  blueprintId: number;
  expirationDay: number;
  createdAt: Date;
  blueprint: TBlueprint;
};

export type TBlueprint = {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  reward: number;
  tips: string;
  category: string;
  deliveryTime: number;
  ingredients: string;
  ingredientCount: number;
  isActivated: boolean;
  createdAt: Date;
};
