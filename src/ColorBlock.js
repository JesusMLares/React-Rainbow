import React from 'react';

function ColorBlock(props) {
    return (
        <div className="colorBlock" key={props.i} style={{ backgroundColor: props.color }}>
            <p>{props.color}</p>
        </div>
    );
}

export default ColorBlock;
