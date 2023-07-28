
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));


app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    
    try {
        const r = await axios.post(
            "https://api.chatengine.io/users/",
            { username:username,secret:username,first_name:username },
            { headers: { "Private-Key":"5c9e8f36-6eb6-42bf-a859-28ec0654deb8" } }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(3001);