const User = require('../models/User');

const findALLUsers = async () => {
    return await Task.find();
};
const createUser = async (user) => {
    return await Task.create(task);
};

const searchUsers = async (params) =>{
    return await Task.find(params);
}

module.exports = {
    findALLUsers,
    createUser,
    searchUsers,
};