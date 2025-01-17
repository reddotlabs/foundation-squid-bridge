import { SquidWidget } from "@0xsquid/widget";
import { NavLink } from "react-router-dom";
import icSquid from "../../assets/icons/squid.svg";
import { Footer } from "../../components/Footer";

const INTEGRATOR_ID = "foundation-866ad524-cc48-4358-af54-384421e6f890";

export const Bridge: React.FC = () => {
  return (
    <>
      <div className="relative z-0 flex flex-col flex-1 overflow-hidden justify-center items-center md:py-30px">
        <div className="max-w-100% xl:max-w-1200px md:px-30px mx-auto w-100% flex justify-center items-center">
          <div className="w-480px">
            <SquidWidget
              advancedUi={{
                labels: {
                  titles: {
                    swap: "Swap/Bridge",
                  },
                },
              }}
              config={{
                integratorId: INTEGRATOR_ID,
                apiUrl: "https://apiplus.squidrouter.com",
                slippage: 1.5,
                mainLogoUrl: "",
                priceImpactWarnings: {
                  warning: 3,
                  critical: 5,
                },
                hideAnimations: true,
                // loadPreviousStateFromLocalStorage: true,
                initialAssets: {
                  from: {
                    chainId: "1", // Ethereum
                    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                  },
                  to: {
                    chainId: "42161", // Arbitrum
                    address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
                  },
                },
                defaultTokensPerChain: [
                  {
                    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                    chainId: "1",
                  },
                  {
                    address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
                    chainId: "42161",
                  },
                ],
                theme: {
                  borderRadius: {
                    "button-lg-primary": "10px",
                    "button-lg-secondary": "10px",
                    "button-lg-tertiary": "10px",
                    "button-md-primary": "10px",
                    "button-md-secondary": "10px",
                    "button-md-tertiary": "10px",
                    container: "10px",
                    input: "10px",
                    "menu-sm": "10px",
                    "menu-lg": "10px",
                    modal: "10px",
                  },
                  fontSize: {
                    caption: "0.875rem",
                    "body-small": "1rem",
                    "body-medium": "1rem",
                    "body-large": "1rem",
                    "heading-small": "1.5rem",
                    "heading-medium": "3.08125rem",
                    "heading-large": "4.40625rem",
                  },
                  fontWeight: {
                    caption: "500",
                    "body-small": "400",
                    "body-medium": "500",
                    "body-large": "500",
                    "heading-small": "700",
                    "heading-medium": "400",
                    "heading-large": "400",
                  },
                  fontFamily: {
                    "squid-main": "Lexend",
                  },
                  boxShadow: {
                    container: "none",
                  },
                  color: {
                    "grey-100": "#FBFBFD",
                    "grey-200": "#EDEFF3",
                    "grey-300": "#161616",
                    "grey-400": "#A7ABBE",
                    "grey-500": "#8f8f8f",
                    "grey-600": "#292D32",
                    "grey-700": "#4C515D",
                    "grey-800": "#FCFAF4",
                    "grey-900": "#FCFAF4",
                    "royal-300": "#D9BEF4",
                    "royal-400": "#B893EC",
                    "royal-500": "#B38160",
                    "royal-600": "#8353C5",
                    "royal-700": "#6B45A1",
                    "status-positive": "#B38160",
                    "status-negative": "#e43e53",
                    "status-partial": "#c49573",
                    "highlight-700": "#E4FE53",
                    "animation-bg": "#18191c",
                    "animation-text": "#c49573",
                    "button-lg-primary-bg": "#c49573",
                    "button-lg-primary-text": "#FBFBFD",
                    "button-lg-secondary-bg": "#FBFBFD",
                    "button-lg-secondary-text": "#292C32",
                    "button-lg-tertiary-bg": "#FCFAF4",
                    "button-lg-tertiary-text": "#292D32",
                    "button-md-primary-bg": "#c49573",
                    "button-md-primary-text": "#FBFBFD",
                    "button-md-secondary-bg": "#FBFBFD",
                    "button-md-secondary-text": "#292C32",
                    "button-md-tertiary-bg": "#FCFAF4",
                    "button-md-tertiary-text": "#292D32",
                    "input-bg": "#FCFAF4",
                    "input-placeholder": "#FBFBFD",
                    "input-text": "#292C32",
                    "input-selection": "#292D32",
                    "menu-bg": "#000000",
                    "menu-text": "#161616",
                    "menu-backdrop": "#CCC8C2",
                    "modal-backdrop": "#17191C54",
                  },
                },
              }}
            />
            <div className="flex items-center justify-end mt-12px px-20px md:px-0 w-100%">
              <NavLink
                to={`https://www.squidrouter.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icSquid} className="h-24px" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
