// console.log("EXECUTED");

// import moment from 'moment';

// const currentTime = moment().format("YYYY MM DD");
// console.log(currentTime);

// const person: string = "Martin";
// const count: number = 100;

// Architectural pattern: MVC, Dependency Injection, MVP
// MVC = MODEL VIEW CONTROLLER

// Design pattern: Middleware, Decator

// import moment from "moment"; // const moment require("moment");

import dotenv from "dotenv";
dotenv.config();

// console.log("PORT:", process.env.PORT);

// console.log("MONGO_URL", process.env.MONGO_URL);

import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL as string, {})
.then(data => {
    console.log("MongoDB connection secceed");
    const PORT = process.env.PORT ?? 3003;
})
.catch(err => console.log("ERROR on connection MongoDD", err));