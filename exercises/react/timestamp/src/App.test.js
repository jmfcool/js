import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("When setting up testing", () => {
    it("should fail", () => {
        expect(1 + 1).toBe(4);
    });
});
