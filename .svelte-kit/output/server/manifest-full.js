export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","officers/.DS_Store","officers/IvanMartinez.jpeg","officers/Samantha_Soto.jpeg","officers/Sarah.jpg","officers/anthonyColin2.png","officers/david.jpeg","officers/foaad.jpg","officers/luke2.png"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.MQcj79xj.js","app":"_app/immutable/entry/app.P5osdKnx.js","imports":["_app/immutable/entry/start.MQcj79xj.js","_app/immutable/chunks/scheduler.zQ9XRYPG.js","_app/immutable/chunks/singletons.L6ibVgZq.js","_app/immutable/chunks/index.fA6snhSw.js","_app/immutable/entry/app.P5osdKnx.js","_app/immutable/chunks/scheduler.zQ9XRYPG.js","_app/immutable/chunks/index.R2nzb5FK.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
