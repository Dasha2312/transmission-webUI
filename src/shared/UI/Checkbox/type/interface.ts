export interface CheckboxProps {
  value?: string | number;
  onChange: (checked: boolean) => void,
  inputText?: string;
  checked?: boolean
}