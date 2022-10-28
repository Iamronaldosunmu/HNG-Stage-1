import express from "express";

const app = express();
const port = process.env.PORT || 4000;

// Start listening for requests on the server
app.listen(port, () => console.log(`The server is now running on port ${port}...`))

// API GET endpoint to return the json response
app.get("/", (req, res) => {
    const response = {
        "slackUsername": "Iamronny", 
        "backend": true, 
        age: 17, 
        "bio": "I am a Fullstack Software Engineer that loves building beautiful products and user experiences that solve problems being faced by people all over the world!"
    }
    return res.json(response);
})