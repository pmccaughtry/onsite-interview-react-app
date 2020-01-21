import React from 'react';

import styles from './index.module.css';
import Repository from './repository';

const Repositories = ({repos, filter}) => {

    const repositories = !filter
        ? repos
        : repos.filter(r => (r.language && r.language.toLowerCase() === filter));

    const repoList = repositories.map((repo, index) => (
        <Repository
            count={repo.stargazers_count}
            index={index + 1}
            name={repo.name}
            logo={repo.owner.avatar_url}
            owner={repo.owner.login}
            url={repo.html_url}
            key={`${repo.name}-${index}`} />
    ));
        
    return (
        <div className={styles.repositories} data-testid='repositories'>
            {repoList}
        </div>
    );
};

export default Repositories;