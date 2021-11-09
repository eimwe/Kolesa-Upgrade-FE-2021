const errorElement = document.createElement('DIV');

errorElement.id = 'loader';

const displayLoader = (noError) => {
    if (!noError) {
        return false;
    }

    return true;
};

describe('Проверка лоадера', () => {
    beforeAll(() => {
        displayLoader(true);
    });

    test('Лоадер отображается', () => {
        expect(displayLoader(true)).toBeTruthy();
    });

    test('Лоадер не отображается', () => {
        expect(displayLoader(false)).toBeFalsy();
    });

    afterAll(() => {
        displayLoader(false);
    });
});
