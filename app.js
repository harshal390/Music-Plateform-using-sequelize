const express = require('express');
const app = express()
const port = 3000;
const userRoute = require('./routes/user.route')
const artistRoute = require('./routes/artist.route');

//body-parser alternative
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/user',userRoute);
app.use('/artist',artistRoute);


app.listen(port, () => {
    console.log(`Example app listening on port ${port} http://localhost:${port}`);
})