import React, { Fragment, useState, useEffect } from 'react';
import axios from "axios";
import api from './API/api';

const foreEmpty = {
  condition: "",
  date: "",
  description: "",
  max: 0,
  min: 0,
  weekday: "",
}

const weatherEmpty = {
  cid: "",
  city: "",
  city_name: "",
  condition_code: "",
  condition_slug: "",
  currently: "",
  date: "",
  description: "",
  forecast: [foreEmpty],
  humidity: 0,
  img_id: "",
  latitude: 0,
  longitude: 0,
  sunrise: "",
  sunset: "",
  temp: 0,
  time: "",
  wind_speedy: "",
}
function App() {


  const [data, setData] = useState(weatherEmpty);
  const city = useState('Ferraz De Vasconcelos');


  let getWeather = async () => {
    let res = await api.get(`weather?cityName=${city}`);
    setData(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    getWeather();

  }, [])
  console.log(data)



  return (
    <Fragment>
      <h2>Cidade: {data.city}</h2>

      <h3>Clima nas suas Coordenadas(exmplo)</h3>
      <hr />

      {data.forecast.map((elemento, i) => (

        <div key={i}>
          <h3>dia: {elemento.weekday}</h3>
          <p>data: {elemento.date}</p>
          <p>tempo: {elemento.description}</p>
        </div>
      ))}


    </Fragment >
  );

}


export default App;
