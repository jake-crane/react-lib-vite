import { render } from "@testing-library/react";
import Component1 from "../Component1";


describe("<Component1 />", () => {
    test("should display a blank login form, with remember me checked by default", async () => {
        const { container } = render(<Component1 />)
        expect(container).toMatchSnapshot();
    });
});