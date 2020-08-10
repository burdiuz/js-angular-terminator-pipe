import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'terminateIf',
})
export class TerminateIfPipe implements PipeTransform {
  transform(value: any, condition: boolean): any {
    if (condition || condition === undefined) {
      return '';
    }

    return value;
  }
}

@Pipe({
  name: 't1000',
})
export class t1000Pipe extends TerminateIfPipe {}

@Pipe({
  name: 'T1000',
})
export class T1000Pipe extends TerminateIfPipe {}
