import { HttpResponse } from "../models/http-response-model"

export const ok = (data:any): HttpResponse =>{
    return {
        statusCode: 200,
        body: data
    }
}

export const created = async (): Promise<HttpResponse> =>{
    return {
        statusCode:201,
        body:{
            message: "successful"
        }
    }
}

export const noContent = async(): Promise<HttpResponse> =>{
    return {
        statusCode: 204,
        body: null
    }
}

export const badRequest = async(): Promise<HttpResponse> => {
    return {
        statusCode: 400,
        body: null,
    }
}