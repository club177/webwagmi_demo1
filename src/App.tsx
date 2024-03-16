import "./App.css";
import Read from "./Read";
import Reads from "./Reads";
import "./nav.css";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <div className="navtw"></div>
        <div className="walletdev">
          <w3m-button />
        </div>
      </div>
      {/* ------------------------------------------------------ */}
      <div className="pages">
        {/* <div className="h1text">
          <h1 className='names'>name:</h1>
          <h1>1111</h1>
        </div>
        <div className="h2text">
          <h1 className='minted'>minted:</h1>
          <h1>222</h1>
        </div> */}
        {/* -------------------------------------------------- */}

        <p>Read</p>
        <Read />
        <p>ReadContracts</p>
        <Reads />
      </div>
    </div>
  );
}

export default App;
