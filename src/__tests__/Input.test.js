import React from 'react';
import { mount, shallow } from 'enzyme';

import Input from '../components/Input';

describe('<Input />', () => {
    it('should call onChange on keypress', () => {
        const mockChange = jest.fn();
        const wrapper = mount(
            <Input
                onChange={mockChange}
                value="kevin"
            />,
        );
        wrapper.find('input').simulate('change');
        expect(mockChange).toHaveBeenCalled();
    });
});