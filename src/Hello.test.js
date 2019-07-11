import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom'

/*
describe("When setting up testing", () => {
    it("should fail", () => {
        expect(1 + 1).toBe(3);
    });
});
*/

function Hello(props) {
    return <h1>Hello at {props.now}</h1>;
}

describe("When testing directly", () => {

    let result;
    beforeAll(() => {
        result = Hello({ now: moment().toISOString() });
    });

    it("should return a value", () => {
        expect(result).not.toBeNull();
    });

    it("is a h1", () => {
        expect(result.type).toBe("h1");
    });

    it("has children", () => {
        expect(result.props.children).toBeTruthy();
    });
});

describe("When testing with ReactDOM", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Hello now={moment().toISOString()} />, div);
    });
});
