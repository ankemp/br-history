import { Champion } from '@app/models';

export interface Battlerite {
  cursor: number;
  time: number;
  battlerite: {
    typeID: number;
    name: string;
    description: string;
    tooltipData: TooltipData[];
    icon: string;
    abilitySlot: string;
  };
  loadoutType: string;
  userID: string;
  character: Champion;
}

export interface TooltipData {
  Name: string;
  LocalizedName: string;
  SortID: number;
  ValueType: string;
  UnitType: string;
  Value: string;
  MaxValue: string;
}
