const { User } = require('../models');

const UserController = {
  async index(req, res) {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email'],
    });
    return res.status(200).json(users);
  },
  async delete(req, res) {
    const { id } = req.params;

    const userDestroy = await User.destroy({
      where: {
        id,
      },
    });

    return res.status(200).json(userDestroy);
  },
};

module.exports = UserController;
