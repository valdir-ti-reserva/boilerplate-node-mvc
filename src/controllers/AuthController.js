const { QueryTypes, Sequelize } = require('sequelize');
const bcryptjs = require('bcryptjs');
const JWT = require('jsonwebtoken');
const ConfigDatabase = require('../config/database');
const connection = new Sequelize(ConfigDatabase);

const AuthController = {
  async index(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Usuário e/ou senha não informados!' });
    }

    const [user] = await connection.query(
      'SELECT id, email, password FROM users WHERE email=$email',
      {
        type: QueryTypes.SELECT,
        bind: { email },
      },
    );

    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas!' });
    }

    if (!bcryptjs.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Credenciais inválidas!' });
    }

    const token = JWT.sign({ id: user.id }, process.env.APP_SECRET, {
      expiresIn: process.env.APP_EXPIRES,
    });

    res.status(200).json({ id: user.id, token });
  },
  async store(req, res) {
    try {
      const { name, email, password } = req.body;
      const now = new Date();

      const newPassword = bcryptjs.hashSync(password, 10);

      const [idUser, err] = await connection.query(
        `INSERT INTO users(name, email, password, createdAt, updatedAt) values ($name, $email, $password, $createdAt, $updateAt)`,
        {
          bind: {
            name,
            email,
            password: newPassword,
            createdAt: now,
            updateAt: now,
          },
          raw: true,
        },
      );

      return res.status(201).json({ id: idUser, name, email });
    } catch (error) {
      return res
        .status(400)
        .json({ details: 'Usuário não foi criado, tente novamente!' });
    }
  },
  async show() {},
  async update() {},
  async delete() {},
};

module.exports = AuthController;
