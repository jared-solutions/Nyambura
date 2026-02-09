import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import ProposalScreen from "@/components/ProposalScreen";
import YesScreen from "@/components/YesScreen";
import NoScreen from "@/components/NoScreen";

type Screen = "proposal" | "yes" | "no";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("proposal");

  return (
    <div className="valentine-gradient min-h-screen relative overflow-hidden">
      <FloatingHearts />

      {screen === "proposal" && (
        <ProposalScreen
          onYes={() => setScreen("yes")}
          onNo={() => setScreen("no")}
        />
      )}

      {screen === "yes" && <YesScreen />}

      {screen === "no" && (
        <NoScreen onReconsider={() => setScreen("proposal")} />
      )}
    </div>
  );
};

export default Index;
