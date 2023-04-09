import User from "../model/user-model.js";

const getAllUsers = async () => {
    const posts = await User.findAll();
    return posts;
};

const createUser = async (pUser) => {
    const newUser = await User.create(pUser);
    return newUser;
};
const deleteUser = async (userId) => {
    const user = await User.destroy({ where: { id: userId } });
    return user;
};

export default {
    getAllUsers,
    createUser,
    deleteUser,
};
