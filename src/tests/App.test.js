import { fireEvent, render } from "@testing-library/react";

import App from "../App";

import "@testing-library/jest-dom";

const setupTest = () => {
    const screen = render(<App/>);

    const input = screen.getByPlaceholderText("Enter your number");
    const button = screen.getByRole("countButton");
    const resultWrapper = screen.getByRole("resultWrapper");

    const changeInputValue = (value) => fireEvent.change(input, { target: { value } });
    const clickCountButton = () => fireEvent.click(button);
    const handleSubmit = (value) => {
        changeInputValue(value);
        clickCountButton();
    };
    const getChildrenCountByTextContent = (content) => {
        return Array.from(resultWrapper.children).filter((item) => item.textContent === content).length;
    }

    return {
        resultWrapper,
        handleSubmit,
        getChildrenCountByTextContent
    }
}

it("Should be fizz result", () => {
    const { handleSubmit, getChildrenCountByTextContent } = setupTest();

    handleSubmit(3);
    expect(getChildrenCountByTextContent('Fizz')).toBe(1);

    handleSubmit(9);
    expect(getChildrenCountByTextContent('Fizz')).toBe(3);

    handleSubmit(15);
    expect(getChildrenCountByTextContent('Fizz')).toBe(4);
});

it("Should be buzz result", () => {
    const { handleSubmit, getChildrenCountByTextContent } = setupTest();

    handleSubmit(5);
    expect(getChildrenCountByTextContent('Buzz')).toBe(1);

    handleSubmit(10);
    expect(getChildrenCountByTextContent('Buzz')).toBe(2);

    handleSubmit(12);
    expect(getChildrenCountByTextContent('Buzz')).toBe(2);
});

it("Should be fizzbuzz result", () => {
    const { handleSubmit, getChildrenCountByTextContent } = setupTest();

    handleSubmit(15);
    expect(getChildrenCountByTextContent('FizzBuzz')).toBe(1);

    handleSubmit(30);
    expect(getChildrenCountByTextContent('FizzBuzz')).toBe(2);

    handleSubmit(3);
    expect(getChildrenCountByTextContent('FizzBuzz')).toBe(0);
})
