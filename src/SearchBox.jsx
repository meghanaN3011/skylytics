import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo, error }) {
  let [city, setCity] = useState("");

  let handleChange = (event) => {
    setCity(event.target.value);
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    if (!city) return;
    updateInfo(city);
    setCity("");
  };

  return (
    <div className="SearchBox">
      <h1>Get the Latest Weather</h1>
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
        <br /><br />
        <Button variant="contained" type="submit">Search</Button>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </form>
    </div>
  );
}
