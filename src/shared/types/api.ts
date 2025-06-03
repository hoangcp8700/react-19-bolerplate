export type APIResponse<T> = {
  success: boolean;
  payload: T;
  status?: {
    responseCode: number;
    responseCodeDesc: string;
  };
  error?: {
    code: string;
    message: string;
    redirectUrl?: string;
  };
};

export type APIAuthToken = {
  accessToken: string;
  refreshToken: string;
  expiryDate: string;
};

export type APIAuthResult = {
  token?: APIAuthToken;
  error?: {
    code: string;
    message: string;
    redirectUrl?: string;
  };
};
