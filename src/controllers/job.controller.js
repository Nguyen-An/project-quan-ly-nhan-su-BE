const JobBL = require('../businesslayer/job.businesslayer')

getListController = async (req, res) => {
    try {
        let data = await JobBL.getListJobBL()

        if (data) {
            return res.status(200).json(
                {
                    data: data,
                    message: 'Thành công!'
                }
            )
        } else {
            return res.status(400).json({ message: 'Cú pháp sai, yêu cầu thực hiện lại' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server' });
    }
}

getDetailController = async (req, res) => { 
    try {
        let id = req.params.id

        let data = await JobBL.getDetailJobBL(id)

        return res.status(200).json(
            {
                data: data[0],
                message: 'Thành công!'
            }
        )
    } catch (error) {
        
    }
}

module.exports = {
    getListController,
    getDetailController
}