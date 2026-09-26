export interface SelectOption<T> {
  value: T;
  label: string;
};

export interface SelectProps<T> {
  selectOptions: SelectOption<T>[];
  selectName: string;
  selectId: string;
  labelText: string;
}