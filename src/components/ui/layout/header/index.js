import React, { useState } from 'react';
import Links from '../../links';
import styles from './index.module.css';
import { createNavLinks } from '../../../../utilities';

const Header = () => {
    const [selected, setSelected] = useState('');

    const headerLinkClickHandler = (event) => {
        event.preventDefault();
        setSelected(event.target.id);
    };


    const links = [
        createNavLinks({
            id: 0,
            href: '/',
            language: 'home',
            linkClicked: headerLinkClickHandler,
            text: 'Home',
        }, selected),
        createNavLinks({
            id: 1,
            href: '/',
            language: 'battle',
            linkClicked: headerLinkClickHandler,
            text: 'Battle',
        }, selected),
        createNavLinks({
            id: 2,
            href: '/',
            language: '',
            linkClicked: headerLinkClickHandler,
            text: 'Popular',
        }, selected)
    ];

    return (
        <header className={styles.header} data-testid="header">
            <Links links={links} />
        </header>
    );
};

export default Header;