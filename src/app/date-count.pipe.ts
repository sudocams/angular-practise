import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //gets the current date
    let todayWithNotime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDiference = Math.abs(value-todayWithNotime) //returns vaue in milliseconds
    const secondsInDay = 86400; //60sec * 60 minutes in one hour *24hours a day
    var dataDifferenceSeconds = dateDiference * 0.001;
    var dateCounter = dataDifferenceSeconds/secondsInDay;
    
    if (dateCounter >=1 && value > todayWithNotime){
      return dateCounter;
    }else{
      return 0;
    }
        
  }

}
