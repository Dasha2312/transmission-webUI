export interface InputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  inputType?: string;
  labelText: string;
  inputValue: string | number;
  inputId: string;
  inputPlaceholder?: string;
  InputDisabled?: boolean;
  inputOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}