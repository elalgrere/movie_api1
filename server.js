const express = require('express');
const app = express();


app.get ('./', (request,response) => {
    response.send('Helow World!')

})


app.listen(8080,() => console.log('listen on 8080'))



