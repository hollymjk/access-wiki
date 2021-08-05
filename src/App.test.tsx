import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders input search area', () => {
    render(<App/>);
    const label = screen.getByText(/Cerca parola/i);
    const input = screen.getByTestId("search")
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
});
