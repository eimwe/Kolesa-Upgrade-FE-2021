const divNode = document.createElement('DIV');

divNode.id = 'app';
const getDivNode = () => document.body.appendChild(divNode);
const clearDivNode = () => {
    divNode.remove();

    return true;
};

describe('Проверка блока #app', () => {
    beforeAll(() => {
        getDivNode();
    });

    test('Формат принимаемых данных - строка', () => {
        const data = 'mock';

        expect(typeof data).toBe('string');
    });

    test('Вставка контента в #app', () => {
        const data = 'mock';

        divNode.innerHTML = data;

        expect(divNode).toMatchSnapshot();
    });

    afterAll(() => {
        clearDivNode();
    });
});
