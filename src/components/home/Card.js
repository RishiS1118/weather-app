import timeIcon from '../../assets/images/time.png';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';



const CardComponent = (props) => {
  console.log(props);
    return (
      <CardBody>
        <div className="card">
              <h2>{props.cityWeather.name}</h2>
              <h6>{props.cityWeather.date}</h6>
              <img  src={timeIcon} style={{height: '60px'}} />  
              <h1>{ Math.floor(( props.cityWeather.main.temp - 273.15)*100)/100} C</h1>
              <h3>{props.cityWeather.weather[0].main} sky</h3>

        </div>
      </CardBody>
      
      
    

    );
  }
  
  export default CardComponent;