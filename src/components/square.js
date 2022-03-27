import React from 'react';

import Circle from "./circle";

import styles from "./square.module.css"
import Cross from "./cross";

const Square = ({position,value,taketurn}) => {

    const handleClick =()=>{
        if (value === 'EMPTY')taketurn(position)
    }

    return (
        <div className={styles.square} onClick={handleClick}>
            {value === 'Circle' && <Circle/>}
            {value === 'Cross' && <Cross/>}
        </div>
    );
};

export default Square;