import { PokeType } from "@/models/poke.interface";
import axios, { AxiosResponse } from "axios";

const apiPoke = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    headers: {
        'Content-Type': 'application/json'
    }
})

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => apiPoke.get(url).then(responseBody),
    post: (url: string, body: {}) => apiPoke.post(url, body).then(responseBody),
    put: (url: string, body: {}) => apiPoke.put(url, body).then(responseBody),
    delete: (url: string) => apiPoke.delete(url).then(responseBody),
};

export const Post = {
    getPokes: (): Promise<{}> => requests.get(`pokemon`),
    getAPoke: (id: number): Promise<PokeType> => requests.get(`pokemon/${id}`),
    createPoke: (post: PokeType): Promise<PokeType> => requests.post(`pokemon`, post),
    deletePoke: (id: number): Promise<void> => requests.delete(`pokemon/${id}`)
};