export interface InputSize {
  width: string;
  height: string;
}

export enum StrictInputType {
  TEXT = 'text',
  EMAIL = 'email',
  PASSWORD = 'password',
  CHECKBOX = 'checkbox',
}

export type InputType = StrictInputType | string;
