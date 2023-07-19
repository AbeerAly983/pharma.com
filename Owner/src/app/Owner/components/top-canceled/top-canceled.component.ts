import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartsService } from 'src/app/services/Owner/charts.service';


@Component({
  selector: 'app-top-canceled',
  templateUrl: './top-canceled.component.html',
  styleUrls: ['./top-canceled.component.css']
})
export class TopCanceledComponent {
  chart!: Chart;
  constructor(private _ChartsService : ChartsService ) { }

  allOrders :any ;

  labelName :any[] =[] ;
  labelY:any[] =[] ;
  colorData :any[] =[] ;

  getTopCanceled (){
    this._ChartsService.getTopCanceled().subscribe({
      next:(res)=>{

        this.allOrders = res

        if(this.allOrders !=null){
          for(let i=0; i<this.allOrders.length ; i++){
            this.labelName.push(this.allOrders[i].name)
            this.labelY.push(this.allOrders[i].y)
            this.colorData.push(this.allOrders[i].color)

            this.renderCharts( this.labelName , this.labelY , this.colorData) ;
          }
        }
      },
      error :(err)=>{
        console.log(err);

      }
    })
  }

  ngOnInit(): void {
    this.getTopCanceled() ;
   }

  renderCharts(labelName :any , labelY :any , colorData :any ){
    this.chart = new Chart({
      chart: {
        type: 'bar',
        height: 225
      },
      title: {
        text: 'Top 3 Canceled Orders'
      },
      xAxis: {
        categories: [
          labelName[0],
          labelName[1],
          labelName[2],

        ]
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      series: [
       {
        type: 'bar',
        showInLegend: false,
        data: [
          {
            name: labelName[0] ,
            y: labelY[0],
            color: colorData[0],
          },
          {
            name: labelName[1],
            y: labelY[1],
            color:  colorData[1],
          },
          {
            name:  labelName[2],
            y: labelY[2],
            color:  colorData[2],
          },
        ]
       }
      ],
      credits: {
        enabled: false
      }
    })
  }
}
