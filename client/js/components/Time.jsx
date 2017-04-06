'use strict';
import React, { Component } from 'react';
const moment = require('moment');

const greetings = [
    { start: 0, end: 6, text: 'You\'re up late.' },
    { start: 6, end: 12, text: 'Good morning, %N.' },
    { start: 12, end: 19, text: 'Good afternoon, %N.' },
    { start: 19, end: 24, text: 'Good evening, %N.' }
];

const generateGreeting = (name) => {
    let hour = moment().hour();
    let text = "";
    greetings.forEach((greeting) => {
        if (hour >= greeting.start && hour < greeting.end) {
            text = greeting.text.replace('%N', name);
        }
    });

    return text;
};

const generateState = (name) => {
    let now = moment();
    return {
        time: now.format('h:mma'),
        date: now.format('dddd, MMMM Do'),
        greeting: generateGreeting(name)
    }
};

export default class Time extends Component {
    componentDidMount() {
        let self = this;
        (function refresh() {
            self.forceUpdate();
            setTimeout(refresh, 1000);
        })();
    }
    
    render () {
        const state = generateState();
        return (
            <div className='greeting component col-sm-5'>
                <h1 className='greeting-time text-right'>{state.time}</h1>
                <h2 className='greeting-date text-right'>{state.date}</h2>
            </div>
        );
    }
}