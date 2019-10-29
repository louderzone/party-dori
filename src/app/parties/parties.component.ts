import { Component, OnInit } from '@angular/core';
import { Party } from '../../models/party';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.sass']
})
export class PartiesComponent implements OnInit {

  party: Party = {
    id: 'Girls net party~~',
    host: 'Kano',
    message: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
