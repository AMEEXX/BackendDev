import express from 'express';
const app = express();
app.get('/', (req,res) => {
    res.send('server is serving at the port')

})
app.get('/api/jokes',(req, res) => {
    
        const jokes = [{
        id: 1,
        title: "Programmer Joke",
        content: "Why do programmer prefer dark mode ? Because light attracts bugs"
    },
    {
        id : 2,
        title: "Backend Joke",
        content : "I told my API a joke...but id didnt get the response it expected."
    },
    {
        id:3,
        title:"Frontend Joke",
        content:"Why did the frontend developer go broke? Becaue he used up all his cache"
    }]
    res.send(jokes);
})
const port = process.env.PORT || 3000;
app.listen(port,() => {console.log(`http://localhost:${port}`)});
