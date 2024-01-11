import { useState } from "react";
import "./App.css";
import { sendMessage } from "./api/whatsapp";

function App() {
  const [mensaje, setMensaje] = useState("");
  const [numberList, setNumberList] = useState([]);

  const handleMensaje = (e) => {
    setMensaje(e.target.value);
  };

  const handleNumber = (e) => {
    setNumberList(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await sendMessage(mensaje, numberList);

    console.log({ response });
  };

  return (
    <div className="App">
      <h1>Envio de mensajes masivos</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          required
          placeholder="Redacta un mensaje"
          onChange={handleMensaje}
        />{" "}
        <input
          placeholder="Digíta un número telefónico"
          onChange={handleNumber}
          required
          size={9}
        />
        <button
          style={{ background: "#000", color: "#fff" }}
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
