
declare interface ServerResponse {
  result?: any
  error?: number
}

declare interface ResultType {
  err: string,
  result: string
}

interface WalletTypes extends NewtxsResponseType {
  updated: number
  loading?: boolean
  currentPage: string
}
interface useStoreTypes extends WalletTypes {
  update(payload: { [key: string]: string | number | boolean | PendingTypes | TxTypes | CoinTypes })
  call(url: string, params?: any): Promise<ServerResponse | null>
}

interface Token {
  from: string;
  token: string;
  amount: number;
  usd: number;
  fee: number;
  type: number;   //1: sell, 2: buy, 3: add, 4: remove
}


interface Trade {
  date: string;
  token: string;
  trader: string;
  amount: number;
  usd: number;
  fee: number;
  tx: string;
  type: number;   //1: sell, 2: buy, 3: add, 4: remove
}
