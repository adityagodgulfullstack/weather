import React from 'react';
import { Temperature, Date } from "../atoms";
const ForeCast = ({ Date: date,
    Time,
    temprature,
    feels }) => {

    return <div><ul>
        <li>Date: <Date value={date} /></li>
        <li>Time: {Time}</li>
        <li>Temprature:<Temperature value={temprature}></Temperature></li>
        <li>feels: {feels}</li>
    </ul>
    </div>
}

export default ForeCast;