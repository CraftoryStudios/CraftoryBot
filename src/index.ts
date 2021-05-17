import { Bot } from './client/Client';
import express from 'express';

const app = express();
const bot = new Bot().start(process.env.token);

//Required to stay awake
app.get('/ping', (req, res) => {
	return res.send('Hello');
});
