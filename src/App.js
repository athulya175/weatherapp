
import { useState } from 'react';
import axios from "axios"

function App() {
  const[city,setCity]=useState("")
  const[weather,setWeather]=useState(null)
  const[error,setError]=useState("")
  const getweather=async()=>{
    try{
      setError("")
      const res = await axios.get(`https://weatherapp-hfqv.onrender.com/home/weather/?city=${city}`)
      setWeather(res.data)
      setCity("") 
    }
    catch(err){
      setError("City not found")
      setWeather(null)
    }
    
  }
  return (
  <div
    style={{
      background:
        "linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 50%, #091428 100%)",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        padding: "30px",
        borderRadius: "15px",
        width: "300px",
        textAlign: "center",
        boxShadow: "0 0 20px rgba(0,0,0,0.3)",
      }}
    >
      {/* 🔍 Search Area */}
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <input
          type="text"
          value={city} 
          placeholder="Enter a city"
          onChange={(e) => setCity(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid white",
            background: "transparent",
            color: "white",
          }}
        />
        <button
          onClick={getweather}
          style={{
            marginLeft: "10px",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            background: "#378ADD",
            color: "white",
            cursor: "pointer",
          }}
        >
          🔍
        </button>
      </div>

      {/* 🌍 Default Message */}
      {!weather && !error && (
        <p style={{ color: "#aaa" }}>Enter a city to continue 🌍</p>
      )}

      {/* ❌ Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* ✅ Weather Data */}
      {weather && (
        <div style={{ color: "white" }}>
          <h2 style={{ margin: "10px 0" }}>{weather.city}</h2>
          <p style={{ fontSize: "24px", margin: "5px 0" }}>
            {weather.temperature}°C
          </p>
          <p style={{ textTransform: "capitalize" }}>
            {weather.weather}
          </p>
        </div>
      )}
    </div>
  </div>
);
}

export default App;
