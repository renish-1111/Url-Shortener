const { getUser } = require("../service/auth");

async function restricToUser(req,res,next) {
    const UserUid = req.cookies?.uid;

    if(!UserUid) return res.redirect("/user/login")

    const user = getUser(UserUid)

    if(!user) return res.redirect("/user/login")

    req.user = user;

    next();

}

module.exports = {
    restricToUser
}