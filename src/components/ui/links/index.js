import React from 'react';
import Link from './link';

const Links = ({links}) => {
    const linkList = links.map(link => (<li key={link.id}>
        <Link
            href={link.href}
            linkClicked={link.linkClicked}
            language={link.language}
            selected={link.selected}>
                {link.text}
        </Link>
    </li>));

    return (
        <ul>
            {linkList}
        </ul>
    );
};

export default Links;