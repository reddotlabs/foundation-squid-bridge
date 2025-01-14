import "./App.css";
import { SquidWidget } from "@0xsquid/widget";

const INTEGRATOR_ID = "foundation-47d2248b-9640-4d73-bd35-14c1c8fcfa27";

function App() {
  return (
    <>
      <h1 className="title">Vite + Squid</h1>
      <SquidWidget
        config={{
          integratorId: INTEGRATOR_ID,
          apiUrl: "https://apiplus.squidrouter.com",
        }}
      />
    </>
  );
}

export default App;
