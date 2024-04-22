const EmnployeeBL = require('../businesslayer/employee.businesslayer')

const PostEmployeeRequest = {
    userName: '',
    userCode: '',
    gender: '',
    dateOfBirth: '',
    phone: '',
    address: '',
    email: '',
    identityCard: '',
    status: '',
    position: '',
    laborContract: '',
    salary: '',
    dateEnd: '',
    dateStart: '',
}

getListController = async (req, res) => { 
    try {
        let keywords = req.query.keywords;
        let data = await EmnployeeBL.getListEmployeeBL(keywords);

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

postEmployeeController = async (req, res) => {
    try {
        let postEmployeeRequest = {...PostEmployeeRequest} 
        
        postEmployeeRequest.userName = req.body.userName;
        postEmployeeRequest.userCode = req.body.userCode;
        postEmployeeRequest.gender = req.body.gender;
        postEmployeeRequest.dateOfBirth = req.body.dateOfBirth;
        postEmployeeRequest.phone = req.body.phone;
        postEmployeeRequest.address = req.body.address;
        postEmployeeRequest.email = req.body.email;
        postEmployeeRequest.identityCard = req.body.identityCard;
        postEmployeeRequest.status = req.body.status;
        postEmployeeRequest.position = req.body.position;
        postEmployeeRequest.laborContract = req.body.laborContract;
        postEmployeeRequest.salary = req.body.salary;
        postEmployeeRequest.dateEnd = req.body.dateEnd;
        postEmployeeRequest.dateStart = req.body.dateStart;

        let data = await EmnployeeBL.postEmployeeBL(postEmployeeRequest);

        return res.status(200).json({
            data: data,
            message: 'Thành công!'
        })
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server' });
    }
}

updateEmployeeController = async (req, res) => {
    try {
        let postEmployeeRequest = { ...PostEmployeeRequest } 
        let employeeId = req.params.id

        postEmployeeRequest.userName = req.body.userName;
        postEmployeeRequest.userCode = req.body.userCode;
        postEmployeeRequest.gender = req.body.gender;
        postEmployeeRequest.dateOfBirth = req.body.dateOfBirth;
        postEmployeeRequest.phone = req.body.phone;
        postEmployeeRequest.address = req.body.address;
        postEmployeeRequest.email = req.body.email;
        postEmployeeRequest.identityCard = req.body.identityCard;
        postEmployeeRequest.status = req.body.status;
        postEmployeeRequest.position = req.body.position;
        postEmployeeRequest.laborContract = req.body.laborContract;
        postEmployeeRequest.salary = req.body.salary;
        postEmployeeRequest.dateEnd = req.body.dateEnd;
        postEmployeeRequest.dateStart = req.body.dateStart;

        let data = await EmnployeeBL.updateEmployeeBL(employeeId, postEmployeeRequest);

        return res.status(200).json({
            data: data,
            message: 'Thành công!'
        })
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server' });
    }
}

deleteEmployeeController = async (req, res) => {
    try {
        let employeeId = req.params.id
        let data = await EmnployeeBL.deleteEmployeeBL(employeeId);

        return res.status(200).json({
            data: data,
            message: 'Thành công!'
        })
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server' });
    }
}

module.exports = {
    getListController,
    postEmployeeController,
    updateEmployeeController,
    deleteEmployeeController
}