import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RedditsService{
    
    private baseUrl: String;

    constructor(private _http:Http){
        this.baseUrl = "https://www.reddit.com/r/";
        
    }

    getPosts(category,offset){
        return this._http.get(this.baseUrl+category+"/top.json?limit="+offset)
            .map(res => res.json());
    }
}