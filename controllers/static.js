async function handleOpenLogin(req,res) {
    res.redirect('user/login')
}

module.exports = {handleOpenLogin}