import ajax from "./ajax";

const BASE = "";

export const login = (username, password) =>
  ajax(BASE + "/login", { username, password }, "POST");

export const loginMock = (username, password) => {
  if (username === "xy" && password === "111") {
    return Promise.resolve({
      status: 0,
      data: {
        _id: "33werse_",
        username,
        password,
      },
    });
  } else {
    return Promise.reject(">>> error");
  }
};

export const addUser = (user) => ajax(BASE + "/manage/user", user, "POST");
