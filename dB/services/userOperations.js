const User = require('../models/userSchema');

const register = (userDetail) => {
    let newUser = new User({
        firstName: userDetail.firstName,
        lastName: userDetail.lastName,
        emailId: userDetail.emailId,
        password: userDetail.password,
        address: userDetail.address,
        phoneNo: userDetail.phoneNo
    });
    return newUser.save()
};

const signInUser = (username, password) => {
    console.log("inside db operations>>>")
    return User.findOne({
        emailId: username,
        password: password
    });
}

const usersList = () => {
    return User.find({});
}

const deleteUser = (id) => {
    return User.findByIdAndDelete({ _id: id });
}

module.exports = {
    register,
    signInUser,
    usersList,
    deleteUser
}