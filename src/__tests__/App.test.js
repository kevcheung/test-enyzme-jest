import React from 'react';
import { render } from 'enzyme';

import App from '../App';

describe('<App />', () => {
    it('should contain text', () => {
        const wrapper = render(
            <App />
        );
        expect(wrapper.text()).toContain('Testing With Enzyme and Jest')
    })
})