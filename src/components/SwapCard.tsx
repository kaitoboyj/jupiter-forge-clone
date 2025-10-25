import { Card } from "@/components/ui/card";
import { ChainType } from "@/types/chain";

interface SwapCardProps {
  selectedChain: ChainType;
}

export const SwapCard = ({ selectedChain }: SwapCardProps) => {
  if (!selectedChain) {
    return (
      <Card className="w-full max-w-md mx-auto p-12 bg-card border-border shadow-xl">
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">🔗</div>
          <h3 className="text-2xl font-bold text-foreground">Select a Network</h3>
          <p className="text-muted-foreground">
            Click "Connect Wallet" to choose a blockchain and start swapping
          </p>
        </div>
      </Card>
    );
  }

  // Get the appropriate DEX iframe URL based on chain
  const getSwapUrl = () => {
    // Solana uses Jupiter Terminal
    if (selectedChain === 'solana') {
      return 'https://terminal.jup.ag/';
    }
    // Ethereum mainnet uses Uniswap
    if (selectedChain === 'ethereum') {
      return 'https://app.uniswap.org/#/swap';
    }
    // BNB Chain uses Uniswap
    if (selectedChain === 'bsc') {
      return 'https://app.uniswap.org/#/swap?chain=bnb';
    }
    return 'https://app.uniswap.org/#/swap';
  };

  return (
    <div className="w-full max-w-[1800px] mx-auto p-6 bg-gray-900 rounded-xl">
      <iframe
        src={getSwapUrl()}
        height="660px"
        width="100%"
        style={{
          border: 0,
          margin: '0 auto',
          display: 'block',
          borderRadius: '10px',
          minWidth: '300px',
        }}
        title={`${selectedChain} Swap Interface`}
      />
    </div>
  );
};
