import express, { Request, Response } from 'express';
const app = express();

app.get("/", (req:Request,res:Response)=>{
    res.send("heb")
})
app.listen(3000, () => {
    console.log("Hitting on port 3000")
})