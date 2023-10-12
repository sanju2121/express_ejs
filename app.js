import express  from 'express';
const app = express();
const port = process.env.PORT || '4000';
import admin  from './routes/admin.js';

app.use('/assets' , express.static('assets'));

app.set('view engine' , 'ejs')
app.use('/' , admin)

// start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));