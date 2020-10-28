const { QueryTypes, Sequelize } = require('sequelize');

const ConfigDatabase = require('../config/database');
const connection = new Sequelize(ConfigDatabase);

const ProductController = {
  async index(req, res) {
    res.status(200).json(['array de produtos', req.userId]);
  },
  async store() {},
  async show() {},
  async update() {},
  async delete() {},
};

module.exports = ProductController;
