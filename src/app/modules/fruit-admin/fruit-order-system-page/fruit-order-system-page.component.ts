import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ConfigService } from '../../../lib/service';


@Component({
  selector: 'app-fruit-order-system-page',
  templateUrl: './fruit-order-system-page.component.html',
  styleUrls: ['./fruit-order-system-page.component.css']
})
export class FruitOrderSystemPageComponent implements OnInit {
  admin: any = {};
  constructor(public config: ConfigService) { }
  async ngOnInit() {
    this.admin = this.config.admin.admin
  }

  logout() {
    localStorage.clear();
    this.config.router.navigateByUrl('/admin/signin');
  }
}
