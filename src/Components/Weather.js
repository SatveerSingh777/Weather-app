import React from 'react'
import { useState, } from 'react';
import WeatherCard from './WeatherCard'
import Alert from './Alert';
import Loading from './Loading';
import SearchBar from './SearchBar';

export default function Weather() {

    const [text, setText] = useState("");
    const [useWeather, setWeather] = useState(null);
    const [error, setError] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [loading, setLoading] = useState(false)


    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        fetchWeatherData();
    }

    const fetchWeatherData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${text}&appid=b7df88f0e19fbbe0ee54ed21d4c8672e`);
            const data = await response.json();
            
        
            if (data.cod === '404' || data.cod === '400') {
                setError(true);
                setWeather(null);
                setShowAlert(true);

            } else {
                setError(false);
                setWeather(data);
                setShowAlert(false);
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setError(true);
            setWeather(null);
            setShowAlert(true);
        } finally {
            setLoading(false);
        }
    }


    const handleOnChange = (event) => {
        console.log("Handle changed");
        setText(event.target.value);
    }


    return (
        <div className="container my-5 d-flex align-items-center" style={{ width: "500px", flexDirection: "column" }}>
            <SearchBar handleSubmit={handleSubmit} handleOnChange={handleOnChange} text={text} />

            {loading ? (<Loading />) : (

                error ? (<>
                    {showAlert && <Alert alert={"Enter correct city"} />}
                </>) :

                    (<><WeatherCard
                        city={useWeather ? useWeather.name : `"Enter city"`}
                        temp={useWeather ? useWeather.main.temp : "N/A"}
                        humidity={useWeather ? useWeather.main.humidity : "N/A"}
                        Wind={useWeather ? useWeather.wind.speed : "N/A"}
                        desc={useWeather ? useWeather.weather[0].main : "N/A"}
                        weatherCondition={useWeather ? useWeather.weather[0].main : "N/A"}
                    />
                    </>)
            )}

        </div>
    )
}
