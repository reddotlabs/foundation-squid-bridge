import { SquidWidget } from "@0xsquid/widget";

const INTEGRATOR_ID = "foundation-866ad524-cc48-4358-af54-384421e6f890";

function App() {
  return (
    <>
      <SquidWidget
        config={{
          integratorId: INTEGRATOR_ID,
          apiUrl: "https://apiplus.squidrouter.com",
          slippage: 1.5,
          mainLogoUrl: "",
          hideAnimations: true,
          priceImpactWarnings: {
            warning: 3,
            critical: 5,
          },
          theme: {
            borderRadius: {
              "button-lg-primary": "0.3125rem",
              "button-lg-secondary": "0.3125rem",
              "button-lg-tertiary": "0.3125rem",
              "button-md-primary": "0.3125rem",
              "button-md-secondary": "0.3125rem",
              "button-md-tertiary": "0.3125rem",
              container: "0rem",
              input: "0.3125rem",
              "menu-sm": "0.3125rem",
              "menu-lg": "0.3125rem",
              modal: "0rem",
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
              caption: "400",
              "body-small": "500",
              "body-medium": "500",
              "body-large": "400",
              "heading-small": "700",
              "heading-medium": "400",
              "heading-large": "400",
            },
            fontFamily: {
              "squid-main": "Roboto Flex",
            },
            boxShadow: {
              container: "none",
            },
            color: {
              "grey-100": "#FBFBFD",
              "grey-200": "#EDEFF3",
              "grey-300": "#ffffff",
              "grey-400": "#A7ABBE",
              "grey-500": "#8f8f8f",
              "grey-600": "#ffffff",
              "grey-700": "#4C515D",
              "grey-800": "#292C32",
              "grey-900": "#171920",
              "royal-300": "#D9BEF4",
              "royal-400": "#B893EC",
              "royal-500": "#c49573",
              "royal-600": "#8353C5",
              "royal-700": "#6B45A1",
              "status-positive": "#0ecb81",
              "status-negative": "#e43e53",
              "status-partial": "#c49373",
              "highlight-700": "#E4FE53",
              "animation-bg": "#18191c",
              "animation-text": "#c49573",
              "button-lg-primary-bg": "#c49573",
              "button-lg-primary-text": "#FBFBFD",
              "button-lg-secondary-bg": "#FBFBFD",
              "button-lg-secondary-text": "#292C32",
              "button-lg-tertiary-bg": "#292C32",
              "button-lg-tertiary-text": "#D1D6E0",
              "button-md-primary-bg": "#c49573",
              "button-md-primary-text": "#FBFBFD",
              "button-md-secondary-bg": "#FBFBFD",
              "button-md-secondary-text": "#292C32",
              "button-md-tertiary-bg": "#292C32",
              "button-md-tertiary-text": "#D1D6E0",
              "input-bg": "#1b1c1d",
              "input-placeholder": "#454545",
              "input-text": "#ffffff",
              "input-selection": "#D1D6E0",
              "menu-bg": "#000000",
              "menu-text": "#FBFBFDA8",
              "menu-backdrop": "#FBFBFD1A",
              "modal-backdrop": "#17191C54",
            },
          },
        }}
      />
      <div></div>
    </>
  );
}

export default App;
