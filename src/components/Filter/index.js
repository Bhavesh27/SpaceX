import React, { useState } from 'react'
import { YEARS } from '../../utils/constants';
import Chip from './Chip';

function Filter ({ filterClick, initial }) {
    console.log(initial);
    const [active, setActive] = useState(initial);

    const filterUpdate = (key, value) => {
        setActive({ ...active, [key]: value });
        filterClick(key, value)
    }

    console.log(active);
    return (
        <div>
            <h2>Filters</h2>
            <div className="bodyContainer">
                <div className="heading">Launch Year</div>
                <div className="container">
                    {YEARS.map(year => {
                        return <Chip key={year} value={year} active={active['launch_year'] === year} onClick={(year) => filterUpdate("launch_year", year)} />
                    })}
                </div>
            </div>
            <div className="bodyContainer">
                <div className="heading">Successful Launch</div>
                <div className="container">
                    {["True", "False"].map(value => {
                        return <Chip key={value} active={active['launch_success'] === value.toLowerCase()} onClick={(value) => filterUpdate("launch_success", value)} value={value} />
                    })}
                </div>
            </div>
            <div className="bodyContainer">
                <div className="heading">Successful Landing</div>
                <div className="container">
                    {["True", "False"].map(value => {
                        return <Chip key={value} active={active['land_year'] === value.toLowerCase()} onClick={(value) => filterUpdate("land_year", value)} value={value} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Filter