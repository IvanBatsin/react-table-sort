export interface IRules {
  required?: boolean,
  min?: number,
  max?: number,
  minLength?: number,
  maxLength?: number,
  pattern?: RegExp
}