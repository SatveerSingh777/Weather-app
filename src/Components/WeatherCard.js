import React from 'react'
import Image1 from "./assests/BackgorundImages/Clear.jpg";
import Image2 from "./assests/BackgorundImages/Clouds.jpg";
import Image3 from "./assests/BackgorundImages/Snow.jpg";
import Image4 from "./assests/BackgorundImages/Rain.jpg";
import Image8 from "./assests/BackgorundImages/ThunderStorm.jpg";
import Image9 from "./assests/BackgorundImages/Mist.jpg";


export default function WeatherCard(props) {
const getBackgroundImage = () => {
    switch (props.weatherCondition) {
        case 'Clear':
            return Image1;
        case 'Clouds':
            return Image2;
        case 'Snow':
            return Image3;
        case 'Rain':
            return Image4;
        case 'Thunderstorm':
            return Image8;
        case 'Mist':
            return Image9;
        default:
            return Image1;
    }
};
    const mystyle ={
        background:`url(${getBackgroundImage()})`,
        height: "100%",
        width: "100%",
        fontSize: "1.5em",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        
    };
    
    return (
        < >
        <div className="card mb-3" style={{ width: "100%", height: "100%", border: "1px dotted black" }}>
            <div className="row g-0" style={mystyle ? mystyle : props.weatherCondition}>
                <div className="col-md-8" >
                    <div className="card-body">
                        <h5 className="card-title"><span className="badge text-bg-light" style={{fontSize:"1.2em"}}>Weather in : {props.city}</span></h5>
                        <br />
                        <p className="card-text  "><span className="badge text-bg-light">Temperature : {props.temp}°</span> </p>
                        <p className="card-text"><span className="badge text-bg-light">humidity : {props.humidity} %</span> </p>
                        <p className="card-text"><span className="badge text-bg-light">Wind speed : {props.Wind} km/h</span> </p>
                        <p className="card-text"> <span className="badge text-bg-light">{(props.weatherCondition)}</span> </p>
                    
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
