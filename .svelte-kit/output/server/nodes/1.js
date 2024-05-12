

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f7iYmoLR.js","_app/immutable/chunks/scheduler.zQ9XRYPG.js","_app/immutable/chunks/index.R2nzb5FK.js","_app/immutable/chunks/singletons.KH5azzhG.js","_app/immutable/chunks/index.fA6snhSw.js"];
export const stylesheets = [];
export const fonts = [];
