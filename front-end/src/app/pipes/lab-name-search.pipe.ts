import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'labNameSearch'
} )
export class LabNameSearchPipe implements PipeTransform {

  transform( items: any[] = [], searchTerm: string ): any[] {
    return items.filter( ( item ) => item.name.toLowerCase().includes( searchTerm.toLowerCase() ) );
  }

}
