// const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize')

class CategoryService {

  constructor(){
  }
  async create(data) {
    const newCategory = await models.Category.create(data)
    return newCategory;
  }

  async find() {
    const categories = await models.Category.findAll()
    return categories
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id, {
      include: ['products']
    })
    return category
  }

  async update(id, changes) {
    const model = await this.findOne(id)
    const response = await model.update(changes)
    return response;
  }

  async delete(id) {
    const model = await this.findOne(id)
    await model.destroy()
    return { response: true }
  }

}

module.exports = CategoryService;
