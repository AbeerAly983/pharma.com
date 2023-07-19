import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartsService } from 'src/app/services/Owner/charts.service';


@Component({
  selector: 'app-last-year-orders',
  templateUrl: './last-year-orders.component.html',
  styleUrls: ['./last-year-orders.component.css']
})
export class LastYearOrdersComponent {

  chart!: Chart;
  date :any []=[]
  numbers :any []=[]

  constructor(private _ChartsService : ChartsService){}
  ngOnInit(): void {
    this.getLastYearOrders() ;
  }

  getLastYearOrders(){
    this._ChartsService.getYearOrders().subscribe({
      next:(res)=>{
        this.date = res[0]
        this.numbers = res[1]

        this.renderCharts(this.date ,this.numbers)
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  renderCharts(date :any , numbers :any){
    this.chart = new Chart({
      chart: {
        type: 'line',
        height: 325
      },
      title: {
        text: 'Month wise Orders'
      },
      xAxis: {
        categories: date
      },
      yAxis: {
        title: {
          text: 'Revenue in EGP'
        }
      },

      series: [
        {
          name: "Orders",
          type: "line",
          color: '#7e0505',
          data: numbers
        },

      ],

      credits: {
        enabled: false
      }

    })
  }

}
