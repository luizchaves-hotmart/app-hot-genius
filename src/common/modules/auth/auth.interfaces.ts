export interface AuthResponse {
  authenticationDate: string;
  authenticationMethod: string;
  credentialType: string;
  isFromNewLogin: string; // as boolean
  id: string;
  locale: string;
  login: string;
  loginAttempts: string;
  longTermAuthenticationRequestTokenUsed: string; // as boolean
}
