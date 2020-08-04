import React from 'react';

const CityWithTime = ({ name, foreCast }) => {
    return <p>{name} ({foreCast.Time})</p>
}

export default CityWithTime;