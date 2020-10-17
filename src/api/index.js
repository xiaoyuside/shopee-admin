import ajax from "./ajax";

const BASE = "";
const mockData = true;

export const login = (username, password) => {
  if (mockData) {
    if (username === "xy" && password === "111") {
      return Promise.resolve({
        status: 0,
        msg: '',
        data: {
          _id: "33werse_",
          username,
          password,
        },
      });
    } else {
      // return Promise.reject(">>> error");
      return Promise.resolve({
        status: 1,
        msg: 'uesrname or pwd wrong.',
        data: null
      })
    }
  }
  return ajax(BASE + "/login", { username, password }, "POST");

}

export const addUser = (user) => ajax(BASE + "/manage/user", user, "POST");
