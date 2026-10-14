import { describe, expect, it } from "vitest";

import { wrap } from "./SlideCard";

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
