import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Date, Temperature, CityWithTime } from '../atoms';
import { Table } from '../molecules';
const colDefs = [
    {
        id: 'Date',
        title: 'Date',
        renderer: Date
    },
    {
        id: 'Time',
        title: 'Time',
    },
    {
        id: 'temprature',
        title: 'Temperature',
        renderer: Temperature
    }, {
        id: 'feels',
        title: 'Feels',
    },
]
const Weather = ({ location }) => {
    const { city = {} } = location;
    const { forecast } = city;
    return (
        <div>
            <Button href='/' text='<< Back' />
            {forecast && forecast.length ? <div><Table data={forecast} colDefs={colDefs} /></div> : <p>No Record Found</p>
            }
        </div>
    )
}


export default (withRouter(Weather));