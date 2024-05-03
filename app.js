import express from 'express'

const app = express()
const router = express.Router()

app.use(express.static('public'))

router.route('/').get((req, res) =>  res.sendFile('index.html', {root: 'public'}))

app.use(router)
const PORT = 5001
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))