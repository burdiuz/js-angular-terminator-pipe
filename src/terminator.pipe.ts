import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'terminator',
})
export class TerminatorPipe implements PipeTransform {
  transform() {
    return '';
  }
}

@Pipe({
  name: 't800',
})
export class t800Pipe extends TerminatorPipe {}

@Pipe({
  name: 'T800',
})
export class T800Pipe extends TerminatorPipe {}
