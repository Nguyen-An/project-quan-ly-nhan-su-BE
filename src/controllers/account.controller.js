const AccountBL = require('../businesslayer/account.businesslayer')
const JWT = require('../config/_JWT.js')

let getLissAcountController = async (req, res) => {
    try {
        let account = await AccountBL.getListAcountBL()

        return res.status(200).json(account);
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server' });
    }
}

let getTokenController = async (req, res) => { 
    try {
        let email = req.body.email;
        let password = req.body.password;

        if (email && password) {
            let checkAccount = await AccountBL.checkAccountBL({ email: email, password: password })

            if (checkAccount.length == 0) {
                return res.status(400).json({ message: 'Tài khoản, mật khẩu không chính xác!' });
            } else if (checkAccount.length == 1) {
                let _token = await JWT.make({ id: checkAccount.id, username: checkAccount.username })
                return res.status(200).json({
                    token: _token,
                    accountname: checkAccount[0].name,
                    message: 'Thành công!'
                })
            } else {
                return res.status(400).json({ message: 'Không tim thấy tài khoản, đã có lỗi xảy ra!' });
            }

        } else {
            return res.status(400).json({ message: 'Bạn chưa nhập tài khoản hoặc mật khẩu' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server' });

    }
}

module.exports = {
    getLissAcountController,
    getTokenController
}