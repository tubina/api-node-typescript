import { StatisticsModel } from './statistics-model';
export interface PlayerModel {
    id: number;
    name: string;
    statistics: {
        Overall: number,
        Pace: number 
    }
    
}

