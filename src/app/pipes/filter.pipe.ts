import { IUser } from './../interfaces/user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(input: IUser[], filterIdType: string): IUser[] {
    // return input.filter(user => user.id % 2 !== 0);

    if (filterIdType === '') {
      return input;
    } else {
      return filterIdType === 'odd'
        ? input.filter(user => user.id % 2 !== 0)
        : input.filter(user => user.id % 2 === 0);
    }
  }

}
