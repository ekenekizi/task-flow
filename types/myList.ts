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

export interface ListItemProps extends ListItemType {
  isActive: boolean;
  onClick: () => void;
  onDelete?: (id: string) => void;
}

export interface ListFormProps {
  colors: ColorOptionType[];
  toggleListMenu: () => void;
  onAddList: (label: string, colorTag: string) => void;
}
