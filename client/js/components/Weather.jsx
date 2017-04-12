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


            const dailyForecast = forecast.daily.data.map(function(data, i){
                let unixTimestamp = data.time * 1000;
                const date = Moment(unixTimestamp).format('ddd');


                const high = Math.ceil(data.temperatureMax) + '°';
                const low  = Math.floor(data.temperatureMin) + '°';
                const now  = Math.floor(forecast.currently.temperature) + '°';


                //TODO: find a better way to loop icons

                if (i === 0) {
                    return (
                        <div key={i} className="">

                            <div className="col-sm-6">
                                <h1>{now}</h1>
                            </div>



                            <div className="col-sm-6">


                                {forecast.minutely.icon === 'partly-cloudy-day' &&
                                <div className='icon cloudy large'>
                                    <div className='cloud'></div>
                                    <div className='cloud'></div>
                                </div>
                                }

                                {forecast.minutely.icon === 'partly-cloudy-night' &&
                                <div className='icon cloudy large'>
                                    <div className='cloud'></div>
                                    <div className='cloud'></div>
                                </div>
                                }

                                {forecast.minutely.icon === 'clear-day' &&
                                <div className='icon sunny large'>
                                    <div className='sun'>
                                        <div className='rays'></div>
                                    </div>
                                </div>
                                }

                                {forecast.minutely.icon === 'rain' &&
                                <div className='icon rainy large'>
                                    <div className='cloud'></div>
                                    <div className='rain'></div>
                                </div>
                                }

                            </div>


                            <div className="col-sm-12 forecastSummary">
                                <hr/>
                                <h2>{forecast.currently.summary}</h2>
                                <p>{forecast.hourly.summary}</p>
                                <hr/>
                            </div>


                        </div>
                )
            } else if (i <= 6) {
                return (
                    <div key={i} className="col-sm-4 iconWrapper">
                        <h4 className="text-center">{date}</h4>

                        {data.icon === 'partly-cloudy-day' &&
                        <div className='icon cloudy'>
                            <div className='cloud'></div>
                            <div className='cloud'></div>
                        </div>
                        }

                        {data.icon === 'partly-cloudy-night' &&
                        <div className='icon cloudy'>
                            <div className='cloud'></div>
                            <div className='cloud'></div>
                        </div>
                        }

                        {data.icon === 'clear-day' &&
                        <div className='icon sunny'>
                            <div className='sun'>
                                <div className='rays'></div>
                            </div>
                        </div>
                        }

                        {data.icon === 'rain' &&
                        <div className='icon rainy'>
                            <div className='cloud'></div>
                            <div className='rain'></div>
                        </div>
                        }

                        <h4 className="text-center forecastLabel">{low} / {high}</h4>
                    </div>
                    );
                }


            });



            return (

                
                <div className='weather component col-sm-4'>
                    {dailyForecast}
                </div>
            );
        }
    }
}