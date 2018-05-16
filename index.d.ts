declare module "web3-provider-engine" {
  namespace Web3ProviderEngine {
    export interface ProviderOpts {
      static?: {
        eth_syncing?: boolean
        web3_clientVersion?: string
      }
      rpcUrl?: string
      getAccounts?: (error: any, accounts?: Array<string>) => void
      approveTransaction?: Function
      signTransaction?: Function
      signMessage?: Function
      processTransaction?: Function
      processMessage?: Function
      processPersonalMessage?: Function
    }
  }

  class Web3ProviderEngine {
    on(event: string, handler: Function): void;
    send(payload: any): void;
    sendAsync(payload: any, callback: (error: any, response: any) => void): void;
    addProvider(provider: any): void;
    start(): void;
    stop(): void;
  }

  export = Web3ProviderEngine
}

declare module "web3-provider-engine/zero" {
  import * as Web3ProviderEngine from "web3-provider-engine"

  function ZeroClientProvider(opts: Web3ProviderEngine.ProviderOpts): Web3ProviderEngine

  namespace ZeroClientProvider {
  }

  export = ZeroClientProvider
}

declare module "web3-provider-engine/subproviders/filters" {
  class FiltersSubprovider {

  }

  namespace FiltersSubprovider {

  }

  export = FiltersSubprovider
}

declare module "web3-provider-engine/subproviders/hooked-wallet" {
  import * as Web3 from 'web3'
  import * as Transaction from 'ethereumjs-tx'

  class HookedWalletSubprovider {
    constructor(opts?: HookedWalletSubprovider.Options)
  }

  namespace HookedWalletSubprovider {
    type Address = string
    type HexString = string
    export type Callback<A> = (err: Error|null|undefined, result?: A) => void
    export type Function1<A, B> = (a: A, callback: Callback<B>) => void
    export type MsgParams = { from: Address, data: HexString }
    export type TypedMsgParams = { from: Address, data: object }
    export type RecoveryParams = { sig: HexString, data: HexString }

    export interface Options {
      signTransaction: Function1<Web3.TxData, Transaction>
      signMessage: Function1<MsgParams, HexString>
      signPersonalMessage: Function1<MsgParams, HexString>
      signTypedMessage: Function1<TypedMsgParams, HexString>

      getAccounts?: (callback: Callback<Array<string>>) => void
      processTransaction?: Function1<Web3.TxData, HexString>
      processMessage?: Function1<MsgParams, HexString>
      processPersonalMessage?: Function1<MsgParams, HexString>
      processTypedMessage?: Function1<TypedMsgParams, HexString>
      approveTransaction?: Function1<Web3.TxData, boolean>
      approveMessage?: Function1<MsgParams, boolean>
      approvePersonalMessage?: Function1<MsgParams, boolean>
      approveTypedMessage?: Function1<TypedMsgParams, boolean>
      recoverPersonalSignature?: Function1<RecoveryParams, Address>
      publishTransaction?: Function1<HexString, HexString>
    }
  }

  export = HookedWalletSubprovider
}

declare module "web3-provider-engine/subproviders/provider" {
  import * as Web3 from 'web3'

  class ProviderSubprovider {
    constructor (provider: Web3.Provider)
  }

  namespace ProviderSubprovider {

  }

  export = ProviderSubprovider
}
