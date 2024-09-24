export interface IValidationRule<T> {
  check: (value: T) => boolean;
  message: string;
}