import { describe, expect, it } from "vitest";

import en from "./en.json";
import zhTW from "./zh-TW.json";

type Tree = { [key: string]: string | Tree };

const flatten = (tree: Tree, prefix = ""): string[] =>
  Object.entries(tree).flatMap(([key, value]) =>
    typeof value === "string" ? [`${prefix}${key}`] : flatten(value, `${prefix}${key}.`),
  );

describe("locales", () => {
  it("en and zh-TW define exactly the same keys", () => {
    expect(flatten(zhTW).sort()).toEqual(flatten(en).sort());
  });

  it("every string is translated", () => {
    const empty = [["en", en] as const, ["zh-TW", zhTW] as const].flatMap(([name, tree]) =>
      flatten(tree as Tree)
        .filter((key) => {
          const value = key
            .split(".")
            .reduce<unknown>((node, part) => (node as Tree)[part], tree);
          return typeof value !== "string" || value.trim() === "";
        })
        .map((key) => `${name}:${key}`),
    );

    expect(empty).toEqual([]);
  });
});
