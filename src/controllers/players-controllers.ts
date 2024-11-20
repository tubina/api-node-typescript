
import { HttpResponse } from './../models/http-response-model';
import express, { Request, Response} from 'express';
import * as service from '../services/players-services';
import { noContent, ok } from '../utils/http-helper';
import { StatisticsModel } from '../models/statistics-model';


export const getPlayer =  async (req: Request, res: Response)=>{

    const httpResponse = await service.getPlayerService();  
    res.status(httpResponse.statusCode).json(httpResponse.body)
}
/***************************************/
export const getPlayerById = async(req: Request, res: Response) =>{
    const id = parseInt(req.params.id);
    const httpResponse = await service.getPlayeByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}
/***************************************/
export const postPlayer = async(req: Request, res: Response) =>{
    const bodyValue = req.body;
    const httpResponse = await service.createPlayerService(bodyValue);
    if(httpResponse){
        console.log('aqui');
        res.status(httpResponse.statusCode).json(httpResponse.body); 
    }
    // else {
    //      const response = await noContent();
    //      res.status(response.statusCode).json(response.body);
    //     //res.status(200).json({"id":3, "name":"joao"});
    // }
}
/***************************************/
export const deletePlayer = async(req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await service.deletePlayerService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body); 
}
/***************************************/ 
export const updatePlayer = async(req: Request, res: Response) =>{
    const id = parseInt(req.params.id);
    const bodyValue: StatisticsModel = req.body;
    const httpResponse = await service.updatePlayerService(id, bodyValue)
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

/***************************************/
export const getClub = (req: Request, res: Response) => {
    res.status(200).json({player: 'Clube One'});
}