import { NgModule } from '@angular/core';

import { TerminatorPipe, t800Pipe, T800Pipe } from './terminator.pipe';
import { TerminateIfPipe, t1000Pipe, T1000Pipe } from './terminate-if.pipe';

@NgModule({
  declarations: [
    TerminatorPipe,
    t800Pipe,
    T800Pipe,
    TerminateIfPipe,
    t1000Pipe,
    T1000Pipe,
  ],
  exports: [
    TerminatorPipe,
    t800Pipe,
    T800Pipe,
    TerminateIfPipe,
    t1000Pipe,
    T1000Pipe,
  ],
})
export class TerminatorPipeModule {}

export {
  TerminatorPipe,
  t800Pipe,
  T800Pipe,
  TerminateIfPipe,
  t1000Pipe,
  T1000Pipe,
};
