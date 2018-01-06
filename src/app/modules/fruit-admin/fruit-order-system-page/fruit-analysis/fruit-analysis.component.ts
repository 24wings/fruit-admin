import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap';
// import { FruitClientService, } from '../../../../modules/fruit-client/fruit-client.service';
import { FruitOrderState, ConfigService } from '../../../../lib';
enum Views {
  List
}
@Component({
  selector: 'app-fruit-analysis',
  templateUrl: './fruit-analysis.component.html',
  styleUrls: ['./fruit-analysis.component.css']
})
export class FruitAnalysisComponent implements OnInit {
  currentPage: number = 1;
  FruitOrderState = FruitOrderState;

  Views = Views;
  state: Views = Views.List;
  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];
  orders: any[] = [];
  users: any[] = [];
  selectedUser;

  constructor(public localService: BsLocaleService,
    //  public fruitClient: FruitClientService,
    public config: ConfigService) { }


  async ngOnInit() {
    this.localService.use('zh-cn');
    await this.listUsers();
  }

  async  queryByDate() {
    this.orders = await this.config.fruit.getRecordByTimeseg(this.bsRangeValue[0].getTime(), this.bsRangeValue[1].getTime(), this.selectedUser ? this.selectedUser._id : '')
  }
  async listUsers() {
    this.users = await this.config.fruit.listFruitUsers();
  }

  pageChanged(pageNum) {
    this.currentPage = pageNum.page;
    console.log(pageNum);
  }
  async exportExcel() {
    let data = await this.config.fruit.exportToExcel(['订单时间', '订单发起人', '订单货品', '订单数量', '订单状态'], [['11', '21', '31', '41', '51']]);
    this.downloadFile(data)
  }
  downloadFile(filename) {
    window.open(filename)
  }
}
