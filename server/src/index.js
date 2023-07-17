const port       = 8000;
const express    = require('express');
const app        = express();
const cors       = require('cors');
const userRoutes = require('./routes/users.routes')

//middleware 

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use('/api/users' , userRoutes );


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});


