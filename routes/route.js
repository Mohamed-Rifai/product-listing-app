import  express  from "express";

const router = express.Router()

router.get('/',(req,res) => {
      res.send('helloo')
})


export default router