export interface ContactFormValues {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface Web3FormsResponse {
  success: boolean;
  message: string;
}