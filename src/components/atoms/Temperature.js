import React, { useState } from 'react';

const Temperature = ({ value }) => {
    const [valueInScale, setValue] = useState(value);
    const [scaleValue, setScale] = useState('c');
    const changeScale = (e) => {
        const { dataset } = e.target;
        const { scale } = dataset;
        switch (scale) {
            case 'c':
                if (scaleValue !== "c") {
                    setValue(((valueInScale - 32) / 1.8).toFixed(2))
                }; break;
            case 'f':
                if (scaleValue !== "f") {
                    setValue(((valueInScale * 1.8) + 32).toFixed(2))
                }; break;
        }
        setScale(scale);
    }

    return <p onClick={changeScale} className='temperature'>{valueInScale} <span data-scale='c' className={`${scaleValue === 'c' ? 'active' : ''}`}><sup>0</sup>C</span> | <span data-scale='f' className={`${scaleValue === 'f' ? 'active' : ''}`}> <sup>0</sup>F</span></p>
}

export default Temperature;