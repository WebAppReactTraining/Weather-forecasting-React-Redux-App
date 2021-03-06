import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../chart';
import { bindActionCreators } from 'redux';
import GoogleMap from '../googlemap';


 class WeatherList extends Component{
	
 	renderWeather(cityData){
		 const name =cityData.city.name;
		 const temps = cityData.list.map(weather=> weather.main.temp);
		 const pressures = cityData.list.map(weather=> weather.main.pressure);
		 const humidity = cityData.list.map(weather=> weather.main.humidity);
		 const { lon,lat } = cityData.city.coord;

		 return(
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat}/></td>
				<td><Chart data={temps} color="orange" units="K"/></td>
				<td><Chart data={pressures} color="green" units="hPA"/></td>
				<td><Chart data={humidity} color="black" units="%"/></td>

			</tr>
 			)
 	}



	render(){
		return(
			<table className="table table-hover">
				<thead>
				<tr>
					<th>City</th>
					<th>Temp (K)</th>
					<th>Pressure (hPA)</th>
					<th>Humidity (%)</th>
				</tr>
				</thead>
				<tbody>
				{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
	);
	}
}

function mapStateToProps({weather}){
	return{weather};
}

export default connect(mapStateToProps)(WeatherList);
