import React from 'react';
import styles from './index.module.css';

const Repository = ({count, index, logo, name, owner, url}) => {
    return (
        <div className={styles.repository}>
            <div>#{index}</div>
            <div>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt="avatar"/>
                </a>
            </div>
            <div className={styles.name}>{name}</div>
            <div>@{owner}</div>
            <div>{count} stars</div>
        </div>
    );
};

export default Repository;