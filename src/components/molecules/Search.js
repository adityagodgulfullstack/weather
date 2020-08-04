import React, { useState } from 'react';
import { Button } from '../atoms';

const Search = ({ onAction, label, value = '', btn }) => {
    const [fieldValue, setValue] = useState(value);
    const onChange = (e) => {
        const { value } = e.target;
        setValue(value);
    }
    const onSubmit = () => {
        onAction(fieldValue)
    }

    return (<div>
        <label>{label}</label>
        <input type='text' value={fieldValue} onChange={onChange} />
        {btn && <Button {...btn} onAction={onSubmit} />}
    </div>)
}

export default Search;