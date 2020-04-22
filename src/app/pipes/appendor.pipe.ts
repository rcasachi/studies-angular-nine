import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendor'
})
export class AppendorPipe implements PipeTransform {

  transform(input: string, position: string, textToAppend: string): string {
    // const output =  ('mailto://' + input).toLowerCase();

    const output =
      position === 'pre'
        ? textToAppend + input
        : input + textToAppend;

    return output.toLowerCase();
  }

}
