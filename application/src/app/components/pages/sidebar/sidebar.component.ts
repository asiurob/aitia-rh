import { Component, OnInit } from '@angular/core';
import { PermissionsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public permissions: any;
  constructor(
    public _permissions: PermissionsService
  ) { }

  ngOnInit() {
    this._permissions.allPermissions()
    .subscribe( (res: any) => {
      this.permissions = res.data.permissions;
      console.log( this.permissions );
    });
  }

}
