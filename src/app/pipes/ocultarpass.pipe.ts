import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarpass'
})
export class OcultarpassPipe implements PipeTransform {

  transform(value: string , activado: boolean ): string {

    if ( activado ) {
        
      return "*".repeat(value.length);
      
    }else{
      return value
    }
    
  }

}
