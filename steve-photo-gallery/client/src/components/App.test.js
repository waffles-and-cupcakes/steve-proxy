import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.jsx';

configure({adapter: new Adapter() });

test('Gallery should render correctly', () => {
  const output = shallow(<App />);
  expect(shallowToJson(output)).toMatchSnapshot();
});