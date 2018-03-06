const express = require('express')

const authMiddlewares = require('../middlewares/auth')

const router = express.Router()

router.use(authMiddlewares)

router.get('/', async (req, res) => {
  res.send({ user: req.userId })
})

module.exports = app => app.use('/projects', router)
