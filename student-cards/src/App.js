import React, { useState } from "react";
import "./App.css";

// MenuItem Component
function MenuItem({ item }) {
  return (
    <div
      style={{
        backgroundColor: item.isSpicy ? "#ffcccc" : "#ccffcc",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h2>
        {item.name} {item.isSpicy ? "🔥" : ""}
      </h2>
      <p>Price: Rs {item.price}</p>
    </div>
  );
}

function App() {
  const menu = [
    { id: 1, name: "Chicken Biryani", price: 500, isSpicy: true },
    { id: 2, name: "Beef Biryani", price: 600, isSpicy: false },
    { id: 3, name: "Mutton Biryani", price: 700, isSpicy: true },
    { id: 4, name: "Egg Biryani", price: 400, isSpicy: false },
  ];

  const [showNonSpicy, setShowNonSpicy] = useState(false);

  // Filter logic
  const filteredMenu = showNonSpicy
    ? menu.filter((item) => item.isSpicy === false)
    : menu;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Biryani Menu 🍽️</h1>

      <button onClick={() => setShowNonSpicy(!showNonSpicy)}>
        Show Non-Spicy Only
      </button>

      {/* Map loop */}
      {filteredMenu.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
