import express from 'express';
import { homeController } from './controllers/home.controller';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {
  createEvent,
  fetchEvent,
  deleteEvent,
  updateEvent,
} from './controllers/event.controller';
import { validateEventData } from './controllers/middleware/event.validator';
dotenv.config();

// Event
const db = mongoose.createConnection(process.env.DEV_DB);
db.on('connected', () => {
  console.log('connection to db sucessful');
});

db.on('error', (err) => {
  console.log('connction failed', err.message);
});

const server = express();
//Add code to make our server be able to read json form and url encoded form
server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);

const port = 4001;

server.get('/', homeController);
server.post('/event', validateEventData, createEvent);

server.listen(port, () => {
  console.log('server started and running on port ' + port);
});
