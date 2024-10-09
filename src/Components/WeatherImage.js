import React from 'react';
import Image1 from "./assests/WeatherImages/01d@2x.png";
import Image2 from "./assests/WeatherImages/11d@2x.png";
import Image3 from "./assests/WeatherImages/50d@2x.png";
import Image4 from "./assests/WeatherImages/04d@2x.png";
import Image8 from "./assests/WeatherImages/13d@2x.png";
import Image9 from "./assests/WeatherImages/09d@2x.png";

export default function WeatherImage(props) {
    const getWeatherImage = () => {
        switch (props.weatherCondition) {
            case 'Clear':
                return <img src={Image1} alt="Clear sun"  style={{width:"200px"}}/>;

            case 'Clouds':
                return <img src={Image4} alt="Clouds"  style={{width:"200px"}}/>;

            case 'Snow':
                return <img src={Image8} alt="	Snow"  style={{width:"200px"}}/>;

            case 'Rain':
                return <img src={Image9} alt="Rain"  style={{width:"200px"}}/>;

            case 'Thunderstorm':
                return <img src={Image2}  alt="Thunderstorm"  style={{width:"200px"}}/>;

            case 'Mist':
                return <img src={Image3}  alt="Thunderstorm"  style={{width:"200px"}}/>;

            default:
                return <img src={Image1}  alt="SUN"  style={{width:"200px"}}/>;
        }
    };
    return (

        getWeatherImage()

    )
}



