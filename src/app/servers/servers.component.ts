import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //select by Element. Select by attr -> ['app-servers']
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
