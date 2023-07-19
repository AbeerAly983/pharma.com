import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'doctorSpecializeSearch'
} )
export class DoctorSpecializeSearchPipe implements PipeTransform {

  transform( items: any[] = [], searchTerm: string ): any[] {
    return items.filter( ( item ) => item.specialize.toLowerCase().includes( searchTerm.toLowerCase() ) );
  }
}
