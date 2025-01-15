import c from "classnames";
import React from "react";
import bgFooter from "../../public/bg-footer.png";
import icDiscord from "../../public/ic-discord.svg";
import icMedium from "../../public/ic-medium.svg";
import icTele from "../../public/ic-tele.svg";
import icTwitter from "../../public/ic-twitter.svg";

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
};

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="max-w-100% xl:max-w-1200px px-15px py-30px mx-auto w-100% pb-0">
        <div className="flex flex-col items-center lg:grid lg:grid-cols-3 lg:pt-30px b-t-1px b-t-solid b-t-#323543 b-t-op-30 text-14px justify-between">
          <div className="c-#8F8F8FCC order-3 lg:order-1">
            Copyright © 2024. All rights reserved.
          </div>
          <div
            className={c(
              "flex flex-1 items-center justify-center gap-x-24px order-1 mt-50px lg:order-2 lg:mt-0"
            )}
          >
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={ExternalLinks.telegram}
            >
              <img src={icTele} alt="" className="w-30px h-30px" />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={ExternalLinks.twitter}
            >
              <img src={icTwitter} alt="" className="w-30px h-30px" />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={ExternalLinks.discord}
            >
              <img src={icDiscord} alt="" className="w-30px h-30px" />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={ExternalLinks.medium}
            >
              <img src={icMedium} alt="" className="w-30px h-30px" />
            </a>
          </div>
          <div className="flex flex-col items-center gap-y-16px c-#8F8F8FCC my-26px [&>a:hover]:(op-50) text-right order-2 lg:block lg:order-3 lg:my-0">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={ExternalLinks.term}
            >
              Terms of Service
            </a>{" "}
            <span className="hidden lg:(inline)">/</span>{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={ExternalLinks.privacy}
            >
              Privacy Policy
            </a>{" "}
            <span className="hidden lg:(inline)">/</span>{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={ExternalLinks.mediaKit}
            >
              Media Kit
            </a>
          </div>
        </div>
      </div>
      <div className="w-100% overflow-hidden flex justify-center">
        <img
          src={bgFooter}
          className="h-171px w-auto max-w-none md:(w-100% h-auto) block"
        />
      </div>
    </div>
  );
};
