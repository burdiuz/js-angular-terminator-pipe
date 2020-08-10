# @actualwave/terminator-pipe

This is simply a pipe that does nothing and returns an empty string no matter what input it gets.
Check [sandbox with an example](https://codesandbox.io/s/angular-terminator-pipe-showcase-59qe8?file=/src/app/app.component.html) on how to use the pipe.

## Installation

```
npm install @actualwave/terminator-pipe
```

Can be imported with module

```javascript
import { TerminatorPipeModule } from '@actualwave/terminator-pipe';

@NgModule({
  imports: [
    TerminatorPipeModule,
    ...
```

# Use

End your interpolation expression with `terminator` pipe and it will display nothing.

```html
<span>{{ date$ | async | date | terminator }}</span>
```
This example is pointless, because whatever values date$ observable returns, in the end it will render nothing.
`terminator` pipe has aliases `t800` and `T800` for your convenience.
```html
<span>{{ judgmentDay | date | T800 }}</span>
```

Additionally, this package provides conditional terminator `terminateIf`(aliases `t1000` and `T1000`) which also
acceps boolean parameter to determine if value should be passed or violently terminated.
```html
<span>{{ connor.John | terminateIf : approvedForTermination }}</span>
```
