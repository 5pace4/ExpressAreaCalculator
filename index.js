const app = require('./app');

PORT = 3003;

app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`);
});