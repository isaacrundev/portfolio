globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as NodeResponse, i as defineLazyEventHandler, l as serve, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import "./_libs/hookable.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/icon.png": {
		"type": "image/png",
		"etag": "\"3b5-OYCsyulzu7879/ut+Sv+M3VHryo\"",
		"mtime": "2026-06-22T05:10:28.951Z",
		"size": 949,
		"path": "../public/icon.png"
	},
	"/assets/Bubble-talk-B4cnLxru.svg": {
		"type": "image/svg+xml",
		"etag": "\"1114-flzJq+J5rAIhw/H3GKk01CGhm6U\"",
		"mtime": "2026-06-22T05:10:28.785Z",
		"size": 4372,
		"path": "../public/assets/Bubble-talk-B4cnLxru.svg"
	},
	"/assets/back-to-top-icon-png-8-SvrKYaR4.jpg": {
		"type": "image/jpeg",
		"etag": "\"22e3a-sNvx9w92rzWGqievA1FYvnr5Nvo\"",
		"mtime": "2026-06-22T05:10:28.785Z",
		"size": 142906,
		"path": "../public/assets/back-to-top-icon-png-8-SvrKYaR4.jpg"
	},
	"/assets/14C60149-3736-4BE8-86D4-AAF1BDA7F2AF_1_201_a-e_jSj7GJ.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3656e-UB+1f7Aeo1DlUL/uTw4h5WfxDyM\"",
		"mtime": "2026-06-22T05:10:28.784Z",
		"size": 222574,
		"path": "../public/assets/14C60149-3736-4BE8-86D4-AAF1BDA7F2AF_1_201_a-e_jSj7GJ.jpeg"
	},
	"/assets/cardGame-mobile1-Dp02_E8p.png": {
		"type": "image/png",
		"etag": "\"cf25-tj8C9oCrdkGTOVQyYxF0X8Moceg\"",
		"mtime": "2026-06-22T05:10:28.785Z",
		"size": 53029,
		"path": "../public/assets/cardGame-mobile1-Dp02_E8p.png"
	},
	"/assets/cardGame-mobile3-Dg6GbFUc.png": {
		"type": "image/png",
		"etag": "\"4626-jo/O5Zqdz2pkOAx5XqCefbPF4t0\"",
		"mtime": "2026-06-22T05:10:28.785Z",
		"size": 17958,
		"path": "../public/assets/cardGame-mobile3-Dg6GbFUc.png"
	},
	"/assets/cardGame-mobile2-CoHCge91.png": {
		"type": "image/png",
		"etag": "\"1121d-gJ17D2ds8NFE0lmiYfeKuYiea7E\"",
		"mtime": "2026-06-22T05:10:28.785Z",
		"size": 70173,
		"path": "../public/assets/cardGame-mobile2-CoHCge91.png"
	},
	"/assets/cardGame2-Z87eKbT8.png": {
		"type": "image/png",
		"etag": "\"45799-B99FAP32TZH5oPwv4VnCK/wCsXM\"",
		"mtime": "2026-06-22T05:10:28.785Z",
		"size": 284569,
		"path": "../public/assets/cardGame2-Z87eKbT8.png"
	},
	"/assets/dod1-WdJTRfAl.png": {
		"type": "image/png",
		"etag": "\"2a653-H9+MirgKreEPDH0EjSXnjfZ+YFU\"",
		"mtime": "2026-06-22T05:10:28.785Z",
		"size": 173651,
		"path": "../public/assets/dod1-WdJTRfAl.png"
	},
	"/assets/cardGame3-BDdrh6WP.png": {
		"type": "image/png",
		"etag": "\"5766-vzOsnLRTkw59gYEhNw67fJ/vtkM\"",
		"mtime": "2026-06-22T05:10:28.785Z",
		"size": 22374,
		"path": "../public/assets/cardGame3-BDdrh6WP.png"
	},
	"/assets/dod2-WX6KGgsR.png": {
		"type": "image/png",
		"etag": "\"a9d3-Xt+9Sg5+Gj6TV7zCvbAIFPiz5X0\"",
		"mtime": "2026-06-22T05:10:28.785Z",
		"size": 43475,
		"path": "../public/assets/dod2-WX6KGgsR.png"
	},
	"/assets/dod3-D-Fs-ivw.png": {
		"type": "image/png",
		"etag": "\"272eb-vb7Oo1dgOr7q0426r/4c1iwG/gg\"",
		"mtime": "2026-06-22T05:10:28.786Z",
		"size": 160491,
		"path": "../public/assets/dod3-D-Fs-ivw.png"
	},
	"/assets/dod4-CqewDsc4.png": {
		"type": "image/png",
		"etag": "\"1513c-Tyfog6b6HfJ56wGQ3t7IklLsXKg\"",
		"mtime": "2026-06-22T05:10:28.786Z",
		"size": 86332,
		"path": "../public/assets/dod4-CqewDsc4.png"
	},
	"/assets/foxBook-mobile2-Cph_3s8d.png": {
		"type": "image/png",
		"etag": "\"770b-XFJ/rH+Deo+DtH8FudODRR97EEc\"",
		"mtime": "2026-06-22T05:10:28.786Z",
		"size": 30475,
		"path": "../public/assets/foxBook-mobile2-Cph_3s8d.png"
	},
	"/assets/cardGame1-cdb6cKA4.png": {
		"type": "image/png",
		"etag": "\"753ba-IAORPiCVJLuCaiEayVcBL5rz+pA\"",
		"mtime": "2026-06-22T05:10:28.785Z",
		"size": 480186,
		"path": "../public/assets/cardGame1-cdb6cKA4.png"
	},
	"/assets/foxBook-mobile3-DyAQ49AK.png": {
		"type": "image/png",
		"etag": "\"6b49-BP7RjINnEQvRZLKFl6DjdZ8KuV8\"",
		"mtime": "2026-06-22T05:10:28.786Z",
		"size": 27465,
		"path": "../public/assets/foxBook-mobile3-DyAQ49AK.png"
	},
	"/assets/foxBook-mobile1-CHvVr3ar.png": {
		"type": "image/png",
		"etag": "\"aecf-Z8m0DdZZsZl7Nx8E+q5nlG60yPA\"",
		"mtime": "2026-06-22T05:10:28.786Z",
		"size": 44751,
		"path": "../public/assets/foxBook-mobile1-CHvVr3ar.png"
	},
	"/assets/foxBook3-DdCgJiq_.png": {
		"type": "image/png",
		"etag": "\"1fe0d-oIRWrOPgzVIRunqCO39ChyvttVc\"",
		"mtime": "2026-06-22T05:10:28.786Z",
		"size": 130573,
		"path": "../public/assets/foxBook3-DdCgJiq_.png"
	},
	"/assets/foxBook2-CpGqTEB_.png": {
		"type": "image/png",
		"etag": "\"2f6c7-TdJb9AQzqXYWjm5fi8wFjUZEvbg\"",
		"mtime": "2026-06-22T05:10:28.786Z",
		"size": 194247,
		"path": "../public/assets/foxBook2-CpGqTEB_.png"
	},
	"/assets/index-Dj_ZXd2A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5aa7d-DGWXwmUkm4KxveqHtpA6/ouO3kw\"",
		"mtime": "2026-06-22T05:10:28.784Z",
		"size": 371325,
		"path": "../public/assets/index-Dj_ZXd2A.js"
	},
	"/assets/index-794B_BEl.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"c27d-/Z1zJtmka9cudKanDGh2YO1LUzA\"",
		"mtime": "2026-06-22T05:10:28.787Z",
		"size": 49789,
		"path": "../public/assets/index-794B_BEl.css"
	},
	"/assets/mvdb_desktop_3-B0eqVJH6.png": {
		"type": "image/png",
		"etag": "\"55ecc-HVBoynIRM3tNRVZUglpBZYMnupM\"",
		"mtime": "2026-06-22T05:10:28.789Z",
		"size": 351948,
		"path": "../public/assets/mvdb_desktop_3-B0eqVJH6.png"
	},
	"/assets/foxBook1-R6nyEk2X.png": {
		"type": "image/png",
		"etag": "\"2ee94-AN/88djgy9OAp9+/qZhyDLfgS4Y\"",
		"mtime": "2026-06-22T05:10:28.786Z",
		"size": 192148,
		"path": "../public/assets/foxBook1-R6nyEk2X.png"
	},
	"/assets/mvdb_desktop_2-DMuKbGdp.png": {
		"type": "image/png",
		"etag": "\"1cc3c8-8Z1u+cwUthzqihI73AE/sZKb5BI\"",
		"mtime": "2026-06-22T05:10:28.788Z",
		"size": 1885128,
		"path": "../public/assets/mvdb_desktop_2-DMuKbGdp.png"
	},
	"/assets/mvdb_mobile_1-CXgbcNWg.png": {
		"type": "image/png",
		"etag": "\"4bf00-4WWW2Ol3VSwiuxkGjIgYbzAX/5U\"",
		"mtime": "2026-06-22T05:10:28.789Z",
		"size": 311040,
		"path": "../public/assets/mvdb_mobile_1-CXgbcNWg.png"
	},
	"/assets/mvdb_mobile_2-B5Qt5YII.png": {
		"type": "image/png",
		"etag": "\"59b98-p2Az1vq7XQduT8wHXtSkCY0tju0\"",
		"mtime": "2026-06-22T05:10:28.790Z",
		"size": 367512,
		"path": "../public/assets/mvdb_mobile_2-B5Qt5YII.png"
	},
	"/assets/mvdb_mobile_3-doIhfJOD.png": {
		"type": "image/png",
		"etag": "\"40e84-LDI78AmFi0q9bH/lwajkB3LyCEo\"",
		"mtime": "2026-06-22T05:10:28.790Z",
		"size": 265860,
		"path": "../public/assets/mvdb_mobile_3-doIhfJOD.png"
	},
	"/assets/undraw_hello_re_3evm-DpTObfXx.svg": {
		"type": "image/svg+xml",
		"etag": "\"2fef-yWDAVbJJJkUCRWaGje6A8S2ZPbw\"",
		"mtime": "2026-06-22T05:10:28.790Z",
		"size": 12271,
		"path": "../public/assets/undraw_hello_re_3evm-DpTObfXx.svg"
	},
	"/assets/routes-Cu_33sRC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f250-jG/hyQmX3EFMe9fzBvGff1lzSEA\"",
		"mtime": "2026-06-22T05:10:28.784Z",
		"size": 193104,
		"path": "../public/assets/routes-Cu_33sRC.js"
	},
	"/assets/whistlerApp-mobile2-DNNdUfF6.png": {
		"type": "image/png",
		"etag": "\"1cc67-E+8IxmoG8ErIu490dFhoTy0pMwY\"",
		"mtime": "2026-06-22T05:10:28.790Z",
		"size": 117863,
		"path": "../public/assets/whistlerApp-mobile2-DNNdUfF6.png"
	},
	"/assets/whistlerApp-mobile1-CPinA0GK.png": {
		"type": "image/png",
		"etag": "\"e5ac-9wDz+U4wXUwCSUZ/sQyK2hCCTYs\"",
		"mtime": "2026-06-22T05:10:28.790Z",
		"size": 58796,
		"path": "../public/assets/whistlerApp-mobile1-CPinA0GK.png"
	},
	"/assets/whistlerApp-mobile3-C3SpGP84.png": {
		"type": "image/png",
		"etag": "\"fe84-41ap0HTABZdBTXlyxvUz8tt4hDY\"",
		"mtime": "2026-06-22T05:10:28.790Z",
		"size": 65156,
		"path": "../public/assets/whistlerApp-mobile3-C3SpGP84.png"
	},
	"/assets/whistlerApp1-BtHac4bb.png": {
		"type": "image/png",
		"etag": "\"25d06-WPSeTb3j6UK5eiZ6S/EjA+X9OyA\"",
		"mtime": "2026-06-22T05:10:28.790Z",
		"size": 154886,
		"path": "../public/assets/whistlerApp1-BtHac4bb.png"
	},
	"/assets/whistlerApp3-BwRKIDF3.png": {
		"type": "image/png",
		"etag": "\"29d67-uI78/v+S6PvATSgwHha4GtCE9nY\"",
		"mtime": "2026-06-22T05:10:28.790Z",
		"size": 171367,
		"path": "../public/assets/whistlerApp3-BwRKIDF3.png"
	},
	"/assets/whistlerApp2-YxQyETJG.png": {
		"type": "image/png",
		"etag": "\"45335-YurjRFMBogk7hroVKZvmCDn1M0U\"",
		"mtime": "2026-06-22T05:10:28.790Z",
		"size": 283445,
		"path": "../public/assets/whistlerApp2-YxQyETJG.png"
	},
	"/assets/youbike-mobile1-DscWBeFf.png": {
		"type": "image/png",
		"etag": "\"1bb00-08pF7dUaxktmn28mgXWjxGF0fGo\"",
		"mtime": "2026-06-22T05:10:28.791Z",
		"size": 113408,
		"path": "../public/assets/youbike-mobile1-DscWBeFf.png"
	},
	"/assets/youbike-desktop1-C0fMXB6J.png": {
		"type": "image/png",
		"etag": "\"67da6-PryvN/JoG1kAHz29nedxAsCO9MA\"",
		"mtime": "2026-06-22T05:10:28.790Z",
		"size": 425382,
		"path": "../public/assets/youbike-desktop1-C0fMXB6J.png"
	},
	"/assets/mvdb_desktop_1-BrNsSMcs.png": {
		"type": "image/png",
		"etag": "\"31e8d5-Z9Jf4ThjMDuzDDt1our6f2YU4wM\"",
		"mtime": "2026-06-22T05:10:28.788Z",
		"size": 3270869,
		"path": "../public/assets/mvdb_desktop_1-BrNsSMcs.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_lepU2L = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_lepU2L
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function createNitroApp() {
	const hooks = void 0;
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		{
			const routeRules = getRouteRules(method, pathname);
			event.context.routeRules = routeRules?.routeRules;
			if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		}
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	for (const rule of Object.values(routeRules)) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
