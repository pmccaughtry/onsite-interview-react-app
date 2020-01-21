const createNavLinks = (config, selected) => ({
    id: config.id,
    href: config.href || '/',
    language: config.language || '',
    linkClicked: config.linkClicked,
    text: config.text,
    selected: config.language === selected
});

export { createNavLinks }