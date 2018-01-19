import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers:[ApiService]
})
export class EntryListComponent implements OnInit {

  constructor(private theApi: ApiService) { }

  entries;
  oneEntry;

  ngOnInit() {
  }

  getData(){
      this.theApi.getEntries()
        .then(r=>{
          this.entries = r;
        });
  }

  getSingle(id){
    this.theApi.getSingle(id)
      .then(r=>{
        this.oneEntry = r;
      })
  }

}
