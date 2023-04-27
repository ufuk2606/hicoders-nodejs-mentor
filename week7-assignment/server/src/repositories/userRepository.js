import User from "../models/userModel.js";

const getAllUsers = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (pUserId) => {
  try {
    await User.destroy({
      where: {
        id: pUserId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (pUser) => {
  try {
    return await User.create(pUser);
  } catch (error) {
    console.log(error);
  }
};

export { getAllUsers, createUser, deleteUser };
