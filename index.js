const express = require("express");
const server = express();
const PORT = 8685;

server.get("/chocolate", (req,res) => {
    let {amount} = req.query;
    res.send(`<h1>You want ${amount} chocolate</h1>`)
})

server.get("/multiply", (req, res) => { 
    let {value1 , value2} = req.query;
    let equal = value1 * value2;
    // console.log(value1,value2,equal);
    res.send(`the multiply of ${value1} & ${value2} is equal to ${equal}`)
})

server.listen(PORT, () => {
    console.log(`server is runing on port ${PORT}`);
})

// link for test: http://localhost:8685/chocolate?amount=100