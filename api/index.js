import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js' // import expressle kullanırsan js ekle
import hotelRoute from './routes/hotels.js' // import expressle kullanırsan js ekle
import roomRoute from './routes/rooms.js' // import expressle kullanırsan js ekle
import userRoute from './routes/users.js' // import expressle kullanırsan js ekle
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

dotenv.config()

const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to mongoDB");
    } catch (error) {
        throw error
    }


}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
})


//middlewares
// app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/hotels", hotelRoute)
app.use("/api/rooms", roomRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})


app.get('/', (req, res) => {
    res.json({ "Home page": "kadircan KELEBEK" })
})




app.listen(8800, () => {
    connect()
    console.log("Connected to backend");
})



