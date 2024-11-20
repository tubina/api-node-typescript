import express, {Request, Response, json} from 'express';
import createAppp from './app';

const port = process.env.PORT;

const createApp = createAppp();


createApp.listen(port, ()=>{
    console.log(`servidor ligado ${port} `)
})