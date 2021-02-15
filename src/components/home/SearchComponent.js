import React from 'react';
import axios from "axios";
import { handleErrorResponse, handleApiCallException } from "../../utils/CommonUtils";
import searchIcon from '../../assets/images/search.png';
import './Home.css';
import swal from "sweetalert";
import Card from './Card';
import MetaTags from 'react-meta-tags';


const SearchComponent = () => { 
    
    const [state, setState] = React.useState(null);
    var cityWeatherList = [];

    const handleCityChange = (e) => {
        setState({cityName: e.target.value});
     }


    const onSearch = () => {
        let e = state.cityName;
        if(e){
            axios
            .get("https://api.openweathermap.org/data/2.5/weather?q=" + e + "&appid=d6ef8d71936b4b77fe2fce38cc296deb")
            .then((response) => {
                console.log('response' , response);
                if (response.status === 200) {
                    if(response && response.data){
                        console.log('response' , response);
                        if(state && state.weatherData ){
                            cityWeatherList.push(state.weatherData)
                        }
                        cityWeatherList.push(response.data);

                        setState({ ...state, weatherData: cityWeatherList});
                    }
                }else handleErrorResponse(response);
            })
            .catch((error) => {
                handleApiCallException(error);
            });
        }
      }



        return ( 
        <div> 
            <MetaTags>
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
            </MetaTags>
            <div className="search_background" >
                <div className="col-lg-12 col-sm-12 title" >
                    <h1>Weather App</h1>
                </div>
                <div className="col-lg-12 col-sm-12" style={{marginTop: '20px'}}>
                    <div style={{display: 'flex',margin: 'auto', width: 'fit-content', border:'1px solid #bbb4b4eb'}}> 
                        <input type="text" style={{width: '300px',height: '36px',
                        border: 'none', outline: 'none',padding: '5px'}}  onChange={(e) => handleCityChange(e)}
                         />
                        <img  src={searchIcon} style={{height: '36px',padding: '5px',background: 'white'}} onClick={((e) => onSearch())} />  
                    </div>              
                </div>
            </div>
            {state && state.weatherData ? 
                <div>
                    { state.weatherData.map( (cityWeather) => (
                        <Card cityWeather={cityWeather} />
                    ))
                    }
                </div>
                : "" 
            }
        </div> 
        ); 
  } 
  
  export default SearchComponent;