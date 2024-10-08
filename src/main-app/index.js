import { ConnectWallet } from "@thirdweb-dev/react";

function SampleComponent() {
  return (
    <div className="App">
     
     <div>
     <ConnectWallet 
     modalSize="wide"
     theme={"dark"}
     btnTitle="Connect Wallet"
     modalTitle="Connect your favourite wallet"
     />
     </div>
    </div>
  );
}

export default SampleComponent;
