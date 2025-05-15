export interface DataType {
  name: string;
  artifacts: ArtifactsType[];
}

interface ArtifactsType {
  name: string;
  price: number;
  history: number[];
}

export interface TokenResponse {
  token: string;
  expiry: string;
}

export interface getDateParams {
  token: string;
  station: string;
  artifact: string;
  historic: boolean;
}

export type QueryType = Omit<getDateParams, 'token'>;
