import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: 'root'
})

export class NewsService {
    private apiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=0dfd43cd502742cc92236288a10aa0b1";

    getData(date: string) {
        return axios.get(`${this.apiUrl}`)
            .then(response => response.data)
            .catch(error => {
                console.error('Error:', error);
                throw error;
            });
    }
}