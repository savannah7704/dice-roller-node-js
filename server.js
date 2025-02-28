const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/roll-die', (req, res) => {
    const roll = Math.floor(Math.random() * 6) + 1
    res.json({ roll })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})