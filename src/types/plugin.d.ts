declare global {
  interface Window {
    Jupiter: JupiterPlugin;
  }
}

export type WidgetPosition = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
export type WidgetSize = 'sm' | 'default';
export type SwapMode = "ExactInOrOut" | "ExactIn" | "ExactOut";
export type DEFAULT_EXPLORER = 'Solana Explorer' | 'Solscan' | 'Solana Beach' | 'SolanaFM';

export interface FormProps {
  swapMode?: SwapMode;
  initialAmount?: string;
  initialInputMint?: string;
  initialOutputMint?: string;
  fixedAmount?: boolean;
  fixedMint?: string;
  referralAccount?: string;
  referralFee?: number;
}

export interface IInit {
  localStoragePrefix?: string;
  formProps?: FormProps;
  defaultExplorer?: DEFAULT_EXPLORER;
  autoConnect?: boolean;
  displayMode?: 'modal' | 'integrated' | 'widget';
  integratedTargetId?: string;
  widgetStyle?: {
    position?: WidgetPosition;
    size?: WidgetSize;
  };
  containerStyles?: React.CSSProperties;
  containerClassName?: string;
  enableWalletPassthrough?: boolean;
  onRequestConnectWallet?: () => void | Promise<void>;
  onSwapError?: (error: any) => void;
  onSuccess?: (result: any) => void;
  onFormUpdate?: (form: any) => void;
  onScreenUpdate?: (screen: any) => void;
}

export interface JupiterPlugin {
  _instance: JSX.Element | null;
  init: (props: IInit) => void;
  resume: () => void;
  close: () => void;
  root: any | null;
  enableWalletPassthrough: boolean;
  onRequestConnectWallet: IInit['onRequestConnectWallet'];
  store: any;
  syncProps: (props: any) => void;
  onSwapError: IInit['onSwapError'];
  onSuccess: IInit['onSuccess'];
  onFormUpdate: IInit['onFormUpdate'];
  onScreenUpdate: IInit['onScreenUpdate'];
  localStoragePrefix: string;
}

export {};
