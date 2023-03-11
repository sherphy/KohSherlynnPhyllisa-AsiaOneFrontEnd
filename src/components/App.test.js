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
        console.log(menuLogo.debug());
        menuLogo.simulate('click');
        expect(menu.length > 0);
        // can only find after menuLogo has been clicked
        const menuExit = wrapper.find('#escape-logo');
        console.log(menuExit.debug());
        menuExit.simulate('click');
        expect(menu.length < 0);
    });
})