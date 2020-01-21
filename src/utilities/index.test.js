import { createNavLinks } from './index';

describe('Create Navigation Links', () => {
    const noop = () => {};

    const testLink = {
        link: createNavLinks({
                id: 0,
                language: '',
                linkClicked: noop,
                text: 'Howdy'
            }, '')
    };

    it('creates a link object', () => {
        expect(Object.keys(testLink.link).length).toBeGreaterThan(0);
        expect(testLink.link.text).toEqual('Howdy');
    });

    it('populates default values for properties not supplied by the user', () => {
        expect(testLink.link.href).toEqual('/');
        expect(Object.keys(testLink.link).length).toEqual(6);
    })
});