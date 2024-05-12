import { w as writable, r as readable } from "./index.js";
import { l as get_store_value } from "./ssr.js";
const stores = {};
function localStorageStore(key, initialValue, options) {
  options?.serializer ?? JSON;
  options?.storage ?? "local";
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
    });
    const { subscribe, set } = store;
    stores[key] = {
      set(value) {
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        set(value);
      },
      subscribe
    };
  }
  return stores[key];
}
localStorageStore("modeOsPrefers", false);
localStorageStore("modeUserPrefers", void 0);
const modeCurrent = localStorageStore("modeCurrent", false);
function setInitialClassState() {
  const elemHtmlClasses = document.documentElement.classList;
  const condLocalStorageUserPrefs = localStorage.getItem("modeUserPrefers") === "false";
  const condLocalStorageUserPrefsExists = !("modeUserPrefers" in localStorage);
  const condMatchMedia = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (condLocalStorageUserPrefs || condLocalStorageUserPrefsExists && condMatchMedia) {
    elemHtmlClasses.add("dark");
  } else {
    elemHtmlClasses.remove("dark");
  }
}
function autoModeWatcher() {
  const mql = window.matchMedia("(prefers-color-scheme: light)");
  function setMode(value) {
    const elemHtmlClasses = document.documentElement.classList;
    const classDark = `dark`;
    value === true ? elemHtmlClasses.remove(classDark) : elemHtmlClasses.add(classDark);
  }
  setMode(mql.matches);
  mql.onchange = () => {
    setMode(mql.matches);
  };
}
function prefersReducedMotion() {
  return false;
}
readable(prefersReducedMotion(), (set) => {
});
export {
  autoModeWatcher as a,
  modeCurrent as m,
  setInitialClassState as s
};
