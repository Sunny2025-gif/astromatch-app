import React, { useState } from "react";

function App() {
  const [yourData, setYourData] = useState({
    name: "",
    birthdate: "",
    birthtime: "",
    birthplace: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setYourData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profil erfolgreich eingereicht!\n(Dies ist nur eine Demo.)");
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>✨ AstroMatch</h1>
      <p>Trage deine Daten ein und finde heraus, wie gut ihr zusammenpasst!</p>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <label>Vorname:</label>
        <input type="text" name="name" value={yourData.name} onChange={handleChange} required />

        <label>Geburtsdatum:</label>
        <input type="date" name="birthdate" value={yourData.birthdate} onChange={handleChange} required />

        <label>Geburtszeit:</label>
        <input type="time" name="birthtime" value={yourData.birthtime} onChange={handleChange} required />

        <label>Geburtsort:</label>
        <input type="text" name="birthplace" value={yourData.birthplace} onChange={handleChange} required />

        <button type="submit">Profil prüfen</button>
      </form>
    </div>
  );
}

export default App;
