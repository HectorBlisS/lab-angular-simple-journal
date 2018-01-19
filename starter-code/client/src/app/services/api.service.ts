import {Injectable} from '@angular/core';

@Injectable()
export class ApiService {
    constructor(){}
    getEntries(){
        return fetch('http://localhost:3000/api/journal-entries/')
        .then(r=>r.json())
        .then(data=>data);
    }
    getSingle(id){
        return fetch('http://localhost:3000/api/journal-entries/'+id+'/')
        .then(r=>r.json())
        .then(data=>data);
    }
}