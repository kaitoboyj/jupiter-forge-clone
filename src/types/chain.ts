export type ChainType = 'ethereum' | 'bsc' | null;

export interface ChainConfig {
  id: ChainType;
  name: string;
  displayName: string;
  icon: string;
  color: string;
}

export const SUPPORTED_CHAINS: ChainConfig[] = [
  {
    id: 'ethereum',
    name: 'Ethereum',
    displayName: 'Ethereum',
    icon: 'Ξ',
    color: 'hsl(225, 100%, 60%)'
  },
  {
    id: 'bsc',
    name: 'BSC',
    displayName: 'BNB Chain',
    icon: 'B',
    color: 'hsl(45, 100%, 50%)'
  }
];
