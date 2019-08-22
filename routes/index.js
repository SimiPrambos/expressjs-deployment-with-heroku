var express = require('express');
var router = express.Router();

var {Todo} = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/todos', async (req, res) => {
  const todos = await Todo.findAll()

  return res.status(200).send(todos)
})

router.post('/todos', async (req, res) => {
  const todo = await Todo.create(req.body)
  return res.status(200).send(todo)
})

router.get('/todos/:id', async (req, res) => {
  const {id} = req.params
  const todo = await Todo.findByPk(parseInt(id))

  return res.status(200).send(todo)
})

router.patch('/todos/:id', async (req, res) => {
  const {id} = req.params
  const data = req.body
  const todo = await Todo.findByPk(parseInt(id))

  todo.update(data)

  return res.status(200).send(todo)
})


module.exports = router;
