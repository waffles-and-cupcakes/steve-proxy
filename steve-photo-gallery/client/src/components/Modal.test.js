import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Modal from './Modal.jsx';

configure({adapter: new Adapter() });

test('Gallery should render correctly', () => {
  const output = shallow(<Modal />);
  expect(shallowToJson(output)).toMatchSnapshot();
});