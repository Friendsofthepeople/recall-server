import config from './index';

describe('Test configuration', () => {
    test('config', () => {
        console.log(config);
        expect(true).toBeTruthy();
    });
});
