export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","officers/.DS_Store","officers/IvanMartinez.jpeg","officers/Luke_Fanguna.png","officers/Samantha_Soto.jpeg","officers/Sarah.jpg","officers/anthonyColin.png","officers/anthonyColin2.jpeg","officers/david.jpeg","officers/foaad.jpg"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.6JOlI8vY.js","app":"_app/immutable/entry/app._HgE_HP8.js","imports":["_app/immutable/entry/start.6JOlI8vY.js","_app/immutable/chunks/scheduler.zQ9XRYPG.js","_app/immutable/chunks/singletons.j0YEcQdQ.js","_app/immutable/chunks/index.fA6snhSw.js","_app/immutable/entry/app._HgE_HP8.js","_app/immutable/chunks/scheduler.zQ9XRYPG.js","_app/immutable/chunks/index.R2nzb5FK.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
