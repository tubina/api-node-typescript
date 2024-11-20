import * as repository from '../repositories/clubs-repository';
import * as HttpResponse from './../utils/http-helper';

export const getClubService = async()=>{ 
    const data = await repository.findAllClubs(); 
    const response = HttpResponse.ok(data);
    return response;
}