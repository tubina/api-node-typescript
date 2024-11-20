
import { Response } from 'express';
import { updatePlayer } from './../controllers/players-controllers';
import { noContent } from './../utils/http-helper';
import { PlayerModel } from "../models/player-models";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpReponse from "../utils/http-helper";
import { StatisticsModel } from '../models/statistics-model';


export const getPlayerService = async ()=>{ 
    const data = await PlayerRepository.findAllPlayers();
    let response = null;
21
    if(data){
        response = await HttpReponse.ok(data);
    }else {
        response = await HttpReponse.noContent();
    } 
    return response;
}
 
export const getPlayeByIdService = async(id:number)=>{
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;

    if(data){
        response = await HttpReponse.ok(data);
    }else {
        response = await HttpReponse.noContent();
    }
    return response;
}

export const createPlayerService = async (player: PlayerModel)=> {
    let response = null;

    //veficica se esta vazio
    if(Object.keys(player).length != 0){
        await PlayerRepository.insertPlayer(player);
        response = HttpReponse.created();
        console.log(player);
    }
    else {
        response = HttpReponse.badRequest();
    }
    return response;
}

export const deletePlayerService = async(id: number) =>{
    let response = null;
    const isDeleted = await PlayerRepository.deleteOnePlayer(id); 
    if(isDeleted){
        return HttpReponse.ok({message: "deleted"});
    }
    return HttpReponse.badRequest();
}

export const updatePlayerService = async(id: number, statistics: StatisticsModel) =>{
   
    let response = null;
    let error = null;
    let sai = Object.keys(statistics);
    
    for(var saida of sai){
        if(saida !== 'Overall'){
            if(saida !== 'Pace'){
                error = 'erro';
                response = await HttpReponse.badRequest();
            }
        }
    }  
    
    if(!error){
        const data = await PlayerRepository.findModifyPlayer(id, statistics);
        if(Object.keys(data).length === 0){
            response = await HttpReponse.badRequest();
        }else {
            response = await HttpReponse.ok(data); 
        }    
    } else{
       return HttpReponse.badRequest();
    }
    return response;

    
}
 

