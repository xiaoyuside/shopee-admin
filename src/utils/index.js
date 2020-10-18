
// localStorage api cannot cross different browsers, we can use store.js (yarn add store)
//
// there are three way to save login user info :
//(https://segmentfault.com/q/1010000012617431, https://www.cnblogs.com/yaogengzhu/p/11006547.html)
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
