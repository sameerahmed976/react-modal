import { useState } from "react";
import Modal from "./Components/Modal";

function App() {
  const [close, setClose] = useState(false);

  return (
    <>
      <h1 className="heading"> Modal</h1>
      <button onClick={() => setClose(true)} className="btn">
        open modal
      </button>
      <Modal close={close} setClose={setClose} />
    </>
  );
}

export default App;
