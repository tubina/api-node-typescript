import { updatePlayerService } from './../services/players-services';

import { PlayerModel } from "../models/player-models";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
    {
        id: 1, 
        name: 'messi', 
        statistics: { 
            Overall: 1, 
            Pace: 10  
        }
    },
    {
        id: 2, 
        name: 'Cr7',
        statistics: { 
            Overall: 1, 
            Pace: 10  
        }
    }
];

export const findAllPlayers = async(): Promise<PlayerModel[]> =>{
    return database;
}

export const findPlayerById = async (id:number): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id)    
}

export const insertPlayer = async(player: PlayerModel)=>{
    database.push(player);
}

export const deleteOnePlayer = async(id: number) =>{
    const index = database.findIndex((p) => p.id === id); 
    if(index != -1){
        database.splice(index, 1);
        return true;
    }
    return false;
}

export const findModifyPlayer = async(id: number, statistics: StatisticsModel): Promise<PlayerModel>=>{
    const playerIndex = database.findIndex(player => player.id === id);
    if(playerIndex != -1){
        database[playerIndex].statistics = statistics;
    }

    return database[playerIndex];
}