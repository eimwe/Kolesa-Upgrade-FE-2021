class EventHandler {
    setupEvents() {
        document.addEventListener('click', this.clicked.bind(this), false);
    }

    clicked() {
        return this;
    }
}

describe('Проверка обработчика событий', () => {
    let evt;
    let events = {};

    beforeEach(() => {
        evt = new EventHandler();

        events = {};

        document.addEventListener = jest.fn((event, callback) => {
            events[event] = callback;
        });
    });

    test('Событие --click-- вызывает коллбек', () => {
        jest.spyOn(evt, 'clicked');

        evt.setupEvents();

        events.click({ event: 'click' });

        expect(evt.clicked).toHaveBeenCalled();
    });

    afterEach(() => {
        document.removeEventListener = jest.fn((event, callback) => {
            events[event] = callback;
            delete events[event];
        });
    });
});
