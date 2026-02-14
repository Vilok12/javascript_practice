import exp from 'express'
import { connect } from "mongoose"
import { UserApp } from './api/userapi.js'
import { ProductApp } from './api/productapi.js'

const app = exp()

// middleware
app.use(exp.json())

// routes
app.use('/userapi', UserApp)
app.use('/productapi', ProductApp)

// error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "error",
        reason: err.message
    })
})

// db connection + server start
async function db() {
    try {
        await connect('mongodb://localhost:27017/ecomdb')
        console.log("connected to database")

        app.listen(3000, () =>
            console.log("server is running at port number 3000")
        )
    } catch (err) {
        console.error("DB connection failed:", err.message)
    }
}

db()
