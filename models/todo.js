'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    name: DataTypes.STRING,
    is_done: DataTypes.BOOLEAN
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};