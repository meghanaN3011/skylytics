import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
  if (!info) return <p style={{ textAlign: "center", marginTop: "20px" }}>Loading weather info...</p>;

  const INIT_URL = "https://plus.unsplash.com/premium_photo-1729600377083-bbe558d8b7a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL = "https://www.bpmcdn.com/f/files/hope/import/2021-04/24809959_web1_Sky-Blue-White-Sunny-Day-Sunny-Summer-Day-Clouds-1117586.jpg;w=960";
  const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL = "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?semt=ais_items_boosted&w=740";

  return (
    <div className="infoBox">
      <h2>Current Weather Details</h2>

      <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 180 }}
            image={info.humidity > 80 ? RAIN_URL : (info.temp > 15 ? HOT_URL : COLD_URL)}
            title={`Weather image for ${info.city}`}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}
            >
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon sx={{ verticalAlign: 'middle' }} />
              ) : info.temp > 15 ? (
                <SunnyIcon sx={{ verticalAlign: 'middle' }} />
              ) : (
                <AcUnitIcon sx={{ verticalAlign: 'middle' }} />
              )}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
              <p>Temperature: {info.temp.toFixed(1)}&deg;C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Min Temperature: {info.tempMin.toFixed(1)}&deg;C</p>
              <p>Max Temperature: {info.tempMax.toFixed(1)}&deg;C</p>
              <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike.toFixed(1)}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

