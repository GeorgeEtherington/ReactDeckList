import { render, screen, cleanup } from "@testing-library/react";
import TestJSONParser from "./TestJSONParser";

afterEach(() => {
  cleanup();
});
test("Should Render Decklist Comp", () => {
  render(<TestJSONParser file={"./test2.json"} />);
  const TestJsonParserElement = screen.getByTestId("MainDiv");
  expect(TestJsonParserElement).toBeInTheDocument();
});

test("Should Render table", () => {
  render(<TestJSONParser file={"./test2.json"} />);
  const TestJsonParserElement = screen.getByName("Kirby");
  expect(TestJsonParserElement).toBeInTheDocument();
});
