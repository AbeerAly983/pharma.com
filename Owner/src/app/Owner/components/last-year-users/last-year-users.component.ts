import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartsService } from 'src/app/services/Owner/charts.service';

@Component({
  selector: 'app-last-year-users',
  templateUrl: './last-year-users.component.html',
  styleUrls: ['./last-year-users.component.css']
})
export class LastYearUsersComponent {


  chart!: Chart;
  date :any []=[]
  numbers :any []=[]

  constructor(private _ChartsService : ChartsService){}
  ngOnInit(): void {
    this.getLastYearUsers() ;
  }

  getLastYearUsers(){
    this._ChartsService.getYearUsers().subscribe({
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
        text: 'Month wise Users'
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
          name: "Users",
          type: "line",
          color: '#ed9e20',
          data: numbers
        },

      ],

      credits: {
        enabled: false
      }
    })
  }


}
