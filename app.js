import express from 'express';
import connectDatabase from './config/database.js'

//route
import categoryRoute from './routes/category.js'
import productRoute from './routes/product.js'

const app = express();



//body parsers
app.use(express.json())
app.use(express.urlencoded({extended: true}))



//database connnection
connectDatabase()

app.use('/api',categoryRoute)
app.use('/api',productRoute)


const PORT =process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);   
})