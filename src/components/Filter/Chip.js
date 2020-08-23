import React from 'react';

import './styles.css';

function Chip ({ value, active, onClick }) {
    return (
        <div className={`chip ${active ? 'active' : ''}`} onClick={() => onClick(value.toLowerCase())}>{value}</div>
    )
}

export default Chip;
