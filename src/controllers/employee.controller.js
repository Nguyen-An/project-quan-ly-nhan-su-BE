const EmnployeeBL = require('../businesslayer/employee.businesslayer')

getListController = async (req, res) => { 
    try {
        let data = await EmnployeeBL.getListEmployeeBL();

        if (data) {
            return res.status(200).json(
                {
                    data: data,
                    message: 'Thành công!'
                }
            )
        }else {
            return res.status(400).json({ message: 'Cú pháp sai, yêu cầu thực hiện lại' });
        }
            
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server' });
    }
}

module.exports = {
    getListController,
}