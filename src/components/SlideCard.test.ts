import { describe, expect, it } from "vitest";

import { wrap, swipeDirection } from "./SlideCard";

// Guards the carousel index maths: the slideshow paginates absolutely, so the
// index has to wrap in both directions without ever going out of bounds.
describe("wrap", () => {
  it("keeps indexes inside the range", () => {
    expect(wrap(0, 3, 0)).toBe(0);
    expect(wrap(0, 3, 1)).toBe(1);
    expect(wrap(0, 3, 2)).toBe(2);
  });

  it("wraps forwards and backwards", () => {
    expect(wrap(0, 3, 3)).toBe(0);
    expect(wrap(0, 3, 4)).toBe(1);
    expect(wrap(0, 3, -1)).toBe(2);
    expect(wrap(0, 3, -3)).toBe(0);
  });
});

describe("swipeDirection", () => {
  it("pages on a flick", () => {
    expect(swipeDirection(-200, -60)).toBe(1); // left flick -> next
    expect(swipeDirection(200, 60)).toBe(-1); // right flick -> previous
  });

  it("ignores a slow drag however far it went", () => {
    expect(swipeDirection(-400, 10)).toBe(0);
    expect(swipeDirection(400, -10)).toBe(0);
  });

  it("ignores velocity with no distance", () => {
    expect(swipeDirection(0, -9999)).toBe(0);
  });
});
