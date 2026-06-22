//#region node_modules/popmotion/dist/es/utils/wrap.mjs
var wrap = (min, max, v) => {
	const rangeSize = max - min;
	return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};
//#endregion
export { wrap as t };
