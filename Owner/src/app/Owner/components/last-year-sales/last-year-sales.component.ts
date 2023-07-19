import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartsService } from 'src/app/services/Owner/charts.service';

@Component({
  selector: 'app-last-year-sales',
  templateUrl: './last-year-sales.component.html',
  styleUrls: ['./last-year-sales.component.css']
})
export class LastYearSalesComponent implements OnInit {

  chart!: Chart;
  date :any []=[]
  numbers :any []=[]

  constructor(private _ChartsService : ChartsService){}
  ngOnInit(): void {
    this.getLastYearSales() ;
  }

  getLastYearSales(){
    this._ChartsService.getYearSales().subscribe({
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
        text: 'Month wise Sales'
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
          name: "Sales",
          type: "line",
          color: '#044342',
          data: numbers
        },

      ],

      credits: {
        enabled: false
      }
    })
  }

}
