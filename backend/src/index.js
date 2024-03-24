import 'dotenv/config';
import { app } from './app.js';
import { dbConnection } from './db/dbConnection.js';
dbConnection().then(() => {
    app.listen(process.env.PORT,()=>{console.log(`Server is running at ${process.env.PORT}`);})
}).catch((err) => {
    console.log(err);
});;