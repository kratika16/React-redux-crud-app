import React from 'react';
import Create from '../Create';
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
test("Check enter form heading", ()=>{
    const {getByTestId} = render(<BrowserRouter>(<Create/>)</BrowserRouter>);
    const headingEl = getByTestId("enterheading");

    expect(headingEl.textContent).toBe("Enter Employee Details here!!")
})

test('change value of input name works correctly',()=>{
    const {getByTestId} =render(<BrowserRouter>(<Create/>)</BrowserRouter>);
    const inputnameEl = getByTestId("inputname");
    fireEvent.change(inputnameEl, {
        target:{
            value:"5"
        }
    });
    expect(inputnameEl.value).toBe("5")
})

test('change value of input designation works correctly',()=>{
    const {getByTestId} =render(<BrowserRouter>(<Create/>)</BrowserRouter>);
    const inputdesEl = getByTestId("inputdes");
    fireEvent.change(inputdesEl, {
        target:{
            value:"5"
        }
    });
    expect(inputdesEl.value).toBe("5")
})

test('change value of input salary works correctly',()=>{
    const {getByTestId} =render(<BrowserRouter>(<Create/>)</BrowserRouter>);
    const inputsalEl = getByTestId("inputsal");
    fireEvent.change(inputsalEl, {
        target:{
            value:"5"
        }
    });
    expect(inputsalEl.value).toBe("5")
})

test("Check select department heading", ()=>{
    const {getByTestId} = render(<BrowserRouter>(<Create/>)</BrowserRouter>);
    const headingEl = getByTestId("sel-dep");

    expect(headingEl.textContent).toBe("Select Department")
})
//check checkbox should be there and unchecked by default
test("check render component",()=>{
    const {getByTestId} = render(<BrowserRouter>(<Create/>)</BrowserRouter>);
    const cbEl1 = getByTestId("cbshow1");
    expect(cbEl1).toBeInTheDocument();
    expect(cbEl1).not.toBeChecked();
})

test("check toggle element by selecting checkbox",()=>{
    const {getByTestId} = render(<BrowserRouter>(<Create/>)</BrowserRouter>);
    const cbEl1 = getByTestId("cbshow1");

    //execute click event of box
    userEvent.click(cbEl1);
    expect(cbEl1).toBeChecked();
    expect(cbEl1).toBeInTheDocument();

    //execute click event again
    userEvent.click(cbEl1);
    expect(cbEl1).not.toBeChecked();
    
})

//check checkbox should be there and unchecked by default
test("check render component",()=>{
    const {getByTestId} = render(<BrowserRouter>(<Create/>)</BrowserRouter>);
    const cbEl2 = getByTestId("cbshow2");
    expect(cbEl2).toBeInTheDocument();
    expect(cbEl2).not.toBeChecked();
})

test("check toggle element by selecting checkbox",()=>{
    const {getByTestId} = render(<BrowserRouter>(<Create/>)</BrowserRouter>);
    const cbEl2 = getByTestId("cbshow2");

    //execute click event of box
    userEvent.click(cbEl2);
    expect(cbEl2).toBeChecked();
    expect(cbEl2).toBeInTheDocument();

    //execute click event again
    userEvent.click(cbEl2);
    expect(cbEl2).not.toBeChecked();
    
})

//check checkbox should be there and unchecked by default
test("check render component",()=>{
    const {getByTestId} = render(<BrowserRouter>(<Create/>)</BrowserRouter>);
    const cbEl3 = getByTestId("cbshow3");
    expect(cbEl3).toBeInTheDocument();
    expect(cbEl3).not.toBeChecked();
})

test("check toggle element by selecting checkbox",()=>{
    const {getByTestId} = render(<BrowserRouter>(<Create/>)</BrowserRouter>);
    const cbEl3 = getByTestId("cbshow3");

    //execute click event of box
    userEvent.click(cbEl3);
    expect(cbEl3).toBeChecked();
    expect(cbEl3).toBeInTheDocument();

    //execute click event again
    userEvent.click(cbEl3);
    expect(cbEl3).not.toBeChecked();
    
})

test("check submit button", ()=>{
    const onSubmit = jest.fn();
    onSubmit();
    const {getByTestId} = render(<BrowserRouter>(<Create/>)</BrowserRouter>);
    fireEvent.submit(getByTestId("submit-btn"));
    expect(onSubmit).toBeCalled();
});