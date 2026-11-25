export interface ListItemType {
  id: string;
  label: string;
  colorTag: string;
  href: string;
}

export interface ListItemProps extends ListItemType {
  count: number;
  isActive: boolean;
  onClick: () => void;
  onDelete?: (id: string) => void;
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
