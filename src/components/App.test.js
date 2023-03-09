import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import React from  'react';
import {mount, shallow} from 'enzyme';
import Banner from './Banner';

Enzyme.configure({ adapter: new Adapter() });

describe('<Banner/>', () => {
    it('toggles menu when logo is clicked', () => {
        const wrapper = shallow(<Banner/>);
        const menu = wrapper.find('menu');
        const menuLogo = wrapper.find('#menu-logo');
        const menuExit = wrapper.find('#escape-logo');
        menuLogo.simulate('click');
        expect(menu.length > 0);
        menuExit.simulate('click');
        expect(menu.length < 0);
    });
})