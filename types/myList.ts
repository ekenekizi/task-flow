export interface ListItemType {
  id: string;
  label: string;
  colorTag: string;
  href: string;
  count: number;
}

export interface ColorOptionType {
  name: string;
  value: string;
}

export interface ListItemProps extends Omit<ListItemType, "id"> {
  isActive: boolean;
}

export interface ListFormProps {
  colors: ColorOptionType[];
  toggleListMenu: () => void;
}
