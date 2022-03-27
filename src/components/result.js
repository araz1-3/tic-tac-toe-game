import React from 'react';

import styles from "./result.module.css"

const Result = ({winner,reset}) => {
    return (
        <div className={styles.result}>
            {winner === 'Circle' && 'Circle won the game'}
            {winner === 'Cross' && 'Cross won the game'}
            {winner === 'it is a tie!' && 'it is a tie!'}
            <button onClick={reset} className={styles.btn}>Reset</button>
        </div>
    );
}
export default Result;