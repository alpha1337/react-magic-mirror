'use strict';
import React, { Component } from 'react';
import Moment from 'moment';

export default class Weather extends Component {
    render () {
        const forecast = this.props.forecast;
        const Timestamp = require('react-timestamp');
        if (!forecast) {
            return (<div className='weather col-sm-7'>Loading weather...</div>);
        }
        else {


            const high = forecast.daily.data[0].temperatureMax + '°';
            const low = forecast.daily.data[0].temperatureMin + '°';
            const now = forecast.currently.temperature + '°';


            const dailyForecast = forecast.daily.data.map(function(data, i){
                let unixTimestamp = data.time * 1000;
                const date = Moment(unixTimestamp).format('dddd');


                const high = Math.ceil(data.temperatureMax) + '°';
                const low  = Math.floor(data.temperatureMin) + '°';

                const cloudy =  <div className='icon cloudy'>
                                    <div className='cloud'></div>
                                    <div className='cloud'></div>
                                </div>;


                if (i === 0) {
                    return (
                        <div>
                            <div key={i} className="row">
                                <div className="col-sm-3">
                                    <div className='icon cloudy'>
                                        <div className='cloud'></div>
                                        <div className='cloud'></div>
                                    </div>
                                </div>

                                <div className="col-sm-9">
                                    <p>{forecast.currently.summary} - {low} / {high}</p>
                                    <p>{forecast.daily.summary}</p>
                                </div>
                            </div>
                        </div>
                    )
                } else if (i <= 6) {
                    return (

                        <div key={i} className="col-sm-2">
                            <h4>{date}</h4>

                            {cloudy}

                            <h4>{low} / {high}</h4>
                        </div>
                    );
                }


            });



            return (

                
                <div className='weather component col-sm-7'>
                    {dailyForecast}
                </div>
            );
        }
    }
}