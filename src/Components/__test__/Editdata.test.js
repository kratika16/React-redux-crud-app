import React from 'react';
import Editdata from '../Editdata';
import { render as RTLrender } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { BrowserRouter } from 'react-router-dom';
import store from '../../Redux/store';
import { Provider } from 'react-redux';
import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const render = component => RTLrender(
    <Provider store = {store}>
        {component}
    </Provider>
)
test("Check edit form heading", ()=>{
    const {getByTestId} = render(<BrowserRouter>(<Editdata/>)</BrowserRouter>);
    const editheadingEl = getByTestId("editheading");

    expect(editheadingEl.textContent).toBe("Edit Employee Details here!!")
})

test('change value of input name works correctly',()=>{
    const {getByTestId} =render(<BrowserRouter>(<Editdata/>)</BrowserRouter>);
    const inputnameEl = getByTestId("inputname");
    fireEvent.change(inputnameEl, {
        target:{
            value:"5"
        }
    });
    expect(inputnameEl.value).toBe("5")
})

test('change value of input designation works correctly',()=>{
    const {getByTestId} =render(<BrowserRouter>(<Editdata/>)</BrowserRouter>);
    const inputdesEl = getByTestId("inputdes");
    fireEvent.change(inputdesEl, {
        target:{
            value:"5"
        }
    });
    expect(inputdesEl.value).toBe("5")
})

test('change value of input salary works correctly',()=>{
    const {getByTestId} =render(<BrowserRouter>(<Editdata/>)</BrowserRouter>);
    const inputsalEl = getByTestId("inputsal");
    fireEvent.change(inputsalEl, {
        target:{
            value:"5"
        }
    });
    expect(inputsalEl.value).toBe("5")
})

test("Check select department heading", ()=>{
    const {getByTestId} = render(<BrowserRouter>(<Editdata/>)</BrowserRouter>);
    const headingEl = getByTestId("sel-dep");

    expect(headingEl.textContent).toBe("Select Department")
})