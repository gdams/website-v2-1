import { setURLParam } from '../setURLParam';

describe('setURLParam', () => {
    it('verify that setURLParam modifies window.history', () => {
        window.history.replaceState = jest.fn();
        expect(window.history.replaceState).not.toHaveBeenCalled();
        setURLParam('version', '8');
        expect(window.history.replaceState).toHaveBeenCalled();
    });
});