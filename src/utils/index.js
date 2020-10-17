
// localStorage api cannot cross different browsers, we can use store.js (yarn add store)
export const localStorageUtils = {
  save(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  },
  read(key) {
    const jsonStr = localStorage.getItem(key);
    return JSON.parse(jsonStr || '{}');
  },
  remove(key) {
    localStorage.removeItem(key);
  }
};
