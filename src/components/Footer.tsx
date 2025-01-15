import React from "react";
import bgFooter from "../assets/images/bg-footer.png";

export const ExternalLinks = {
  twitter: "https://twitter.com/Foundation_nw",
  medium: "https://medium.com/@foundation_network",
  telegram: "https://t.me/foundationnetwork",
  discord: "https://discord.gg/foundationnetwork",
  explorer: "https://explorer.foundation.network",
  points: "https://foundation.network/points",
  docs: "https://docs.foundation.network/",
  privacy: "https://docs.foundation.network/miscellaneous/privacy-policy",
  term: "https://docs.foundation.network/miscellaneous/terms-of-service",
  mediaKit: "https://docs.foundation.network/miscellaneous/brand-assets",
  trade: "https://testnet.foundation.network",
};

export const Footer: React.FC = () => {
  return (
    <div className="font-['Lexend'] mt-auto">
      <div className="w-100% overflow-hidden flex justify-center">
        <img
          src={bgFooter}
          className="h-171px w-auto max-w-none md:w-100% md:h-auto block"
        />
      </div>
    </div>
  );
};
