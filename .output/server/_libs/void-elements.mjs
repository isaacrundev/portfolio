import { g as getDefaultExportFromCjs } from "./react.mjs";
var voidElements;
var hasRequiredVoidElements;
function requireVoidElements() {
  if (hasRequiredVoidElements) return voidElements;
  hasRequiredVoidElements = 1;
  voidElements = {
    "area": true,
    "base": true,
    "br": true,
    "col": true,
    "embed": true,
    "hr": true,
    "img": true,
    "input": true,
    "link": true,
    "meta": true,
    "param": true,
    "source": true,
    "track": true,
    "wbr": true
  };
  return voidElements;
}
var voidElementsExports = /* @__PURE__ */ requireVoidElements();
const e = /* @__PURE__ */ getDefaultExportFromCjs(voidElementsExports);
export {
  e
};
