export const home = (req, res) => {
    console.log("")
    res.render("home", { pageTitle: "Home" })
};
export const search = (req, res) => {

    res.render("Search", { pageTitle: "Search" })
};
export const join = (req, res) => {

    res.render("Join", { pageTitle: "Join" })
};
export const login = (req, res) => {

    res.render("Login", { pageTitle: "Login" })
};
export const logout = (req, res) => {

    res.render("Logout", { pageTitle: "Logout" })
};