class UserStorage {
  loginUser(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === "madie" || id === "ahading") {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "madie") {
          resolve({ name: user, role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompmadiet("enter user id");

userStorage
  .loginUser(id)
  .then(userStorage.getRoles)
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role.`))
  .catch(console.log);
