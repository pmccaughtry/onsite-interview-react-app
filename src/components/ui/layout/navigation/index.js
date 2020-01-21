import React from 'react';
import Links from '../../links';
import styles from './index.module.css';
import { createNavLinks } from '../../../../utilities';

const Navigation = ({navLinkClicked, selected}) => {
    const links = [
        createNavLinks({
            id: 0,
            href: '/',
            language: '',
            linkClicked: navLinkClicked,
            text: 'All'
        }, selected),
        createNavLinks({
            id: 1,
            href: '/',
            language: 'javascript',
            linkClicked: navLinkClicked,
            text: 'JavaScript'
        }, selected),
        createNavLinks({
            id: 2,
            href: '/',
            language: 'ruby',
            linkClicked: navLinkClicked,
            text: 'Ruby'
        }, selected),
        createNavLinks({
            id: 3,
            href: '/',
            language: 'java',
            linkClicked: navLinkClicked,
            text: 'Java'
        }, selected),
        createNavLinks({
            id: 4,
            href: '/',
            language: 'css',
            linkClicked: navLinkClicked,
            text: 'CSS'
        }, selected),
        createNavLinks({
            id: 5,
            href: '/',
            language: 'python',
            linkClicked: navLinkClicked,
            text: 'Python'
        }, selected)
    ];

    return (
        <nav className={styles.navigation} data-testid="navigation">
            <Links links={links} />
        </nav>)
    ;
};

export default Navigation;