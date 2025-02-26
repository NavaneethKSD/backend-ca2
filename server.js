const express = require("express");

const app = express()

app.get("/user", (req,res) => {
    const user = req.query;

    if (!user) {
        return res.status(400).json({ message : "user parameter cannot be empty"});

    }

    if (user) {
        return res.json({ message : " user found " })

    }else {
        return res.status(404).json({ message : " user not found "})
    }

})

app.listen(PORT, () => {
    console.log("server is running")
})