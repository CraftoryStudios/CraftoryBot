import { Bot } from './client/Client';
import express from 'express';

const app = express();
const bot = new Bot().start(process.env.token);

//Required to stay awake
app.get('/ping',(req,res) => {
    return res.send('Hello');
    });
  
const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});