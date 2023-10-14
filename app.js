import express from 'express';
import connectDatabase from './config/database.js'

//route
import route from './routes/route.js'


const app = express();
//database connnection
connectDatabase()

app.use('/api',route)


const PORT =process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);   
})