import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
    selector: 'app-single-entry',
    template:`
    <h1>{{entry.title}} - {{entry.date}}</h1>
    <button (click)="getSingle('5a6132e9e6518c15b3020688')">get Single Entry</button>
    `,
    providers:[ApiService]
})
export class SingleEntryComponent implements OnInit{
    constructor(private theApi: ApiService){}

    ngOnInit() {
    }

    entry = {};

    getSingle(id){
        this.theApi.getSingle(id)
            .then(r=>{
                this.entry = r;
            })
    }

}