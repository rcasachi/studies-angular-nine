import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'corePipe'
})
export class CorePipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
