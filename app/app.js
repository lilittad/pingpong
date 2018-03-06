let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('Hello Express');
});


app.listen(3000, () => {
    console.log('Express in running on port 3000');
});