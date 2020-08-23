import React from 'react';

import "./styles.css"

function Card ({ data }) {
    const isMobile = !!(window.innerWidth < 992);
    return <div className={`card ${isMobile ? 'marginTop-16' : ''}`}>
        <div className="imageContainer">
            <img className="patch" alt="patch" src={data.links.mission_patch_small || "https://images2.imgbox.com/f9/3a/3kH19hlj_o.png"} />
        </div>
        <div>
            <h2 className="titleh2 marginTop-16">{data.mission_name} #{data.flight_number}</h2>
            <div className="marginTop-16">
                <h3>Mission Ids:</h3>
                <ul>
                    {data.mission_id && data.mission_id.length > 0 ? data.mission_id.map(id => {
                        return <li key={id} className="value">{id}</li>
                    }) : <li>None</li>}
                </ul>
            </div>
            <div className="flex marginTop-16">
                <h3>Launch Year:</h3>&nbsp;<span className="value">{data.launch_year}</span>
            </div>
            <div className="flex marginTop-16">
                <h3>Successful Launch:</h3>&nbsp;<p className="value">{`${data.launch_success}`}</p>
            </div>
            <div className="flex marginTop-16">
                <h3>Launch Site:</h3>&nbsp;<p className="value">{data.launch_site.site_name}</p>
            </div>
        </div>
    </div>
}

export default Card;