const app = require('./index');
const port = process.env.PORT || 5000

app.listen(port, (req, res) => {
    if (process.env.NODE_ENV == 'development') {
        console.log(`http://localhost:${port}`);
    } else {
        console.log(`${process.env.NODE_ENV}`);
    }
})