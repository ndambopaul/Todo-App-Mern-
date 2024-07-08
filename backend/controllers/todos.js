const Todo = require("../models/todos");

const getTodos = async(req, res) => {
    try {
        if(req.user.role === "admin") {
            const todos = await Todo.find({})
            res.send(todos).status(200)
        } else {
            const todos = await Todo.find({ user: req.user.id })
            res.send(todos).status(200)
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({ error: error.message })
    }
}

const createTodo = async(req, res) => {
    const { title, status } = req.body

    if(!title) return res.status(400).send({ error: "Please provide title" })
    try {
        const todo = await Todo.create({
            title: title,
            status: status,
            user: req.user.id
        });
        if(!todo) return res.status(400).send({ error: "Item could not be created!!" })
        
        res.send(todo).status(201)
    } catch (error) {
        console.log(error)
        return res.status(500).send({ error: error.message })
    }
}

const getTodoById = async(req, res) => {
    const { id } = req.params

    try {
        const todo = await Todo.findById(id).populate("user")
        if(!todo) return res.status(404).send({ error: `Item with id: ${id} not found!` })
        res.send(todo).status(200)

    } catch (error) {
        console.log(error)
        return res.status(500).send({ error: error.message })
    }
}

const updateTodoItem = async(req, res) => {
    const { params: { id }, body } = req;

    try {
        const todo = await Todo.findByIdAndUpdate(id, {...body}, { new: true })
        if(!todo) return res.status(404).send({ error: `Item with id: ${id} not found!!` })
        res.send(todo).status(201)
    } catch (error) {
        console.log(error)
        return res.status(500).send({ error: error.message })
    }
}

const deleteTodoItem = async(req, res) => {
    const { id } = req.params

    try {
        const todo = await Todo.findByIdAndDelete(id)
        if(!todo) return res.status(404).send({ error: `Item with id: ${id} not found!!` })
        return res.send({ message: `Item with id: ${id} deleted successfully` }).status(204)
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: error.message })
    }
}

module.exports = {
    getTodos,
    createTodo,
    getTodoById,
    updateTodoItem,
    deleteTodoItem
}