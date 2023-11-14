onload = () => {
  const get = (elem) => document.getElementById(elem),
    registerButton = get("register"),
    loginButton = get("login"),
    container = get("container");

  registerButton.onclick = () => {
    container.className = "active";
  };

  loginButton.onclick = () => {
    container.className = "close";
  };
};
