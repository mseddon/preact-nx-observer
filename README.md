# preact-nx-observer
> Simple `preact-mobx` interface for `nx-js/observer-util`.

## About
[mobx](https://github.com/mobxjs/mobx) is a great little reactive state library, but sometimes you just want to shave off a few more kb from your bundle.

Fortunately [ns-js/observer-util](https://github.com/nx-js/observer-util) is a tiny (~3k gzipped) library supporting the core of `mobx`.

This library provides a *very* tiny decorator syntax for `nx-js/observer-util`. By decorating a
Preact `Component` class as `@observer`, the component will automagically re-render whenever a dependent observable value changes.

## Usage
```javascript
import { h, Component, render } from "preact";
import { observable } from "@nx-js/observer-util";
import { observer } from "preact-nx-observer";

let thing = observable({ foo: "This is foo's data"});

@observer
class Foo extends Component {
    render() {
        return <h1>{thing.foo}</h1>
    }
}

render(<Foo/>, document.querySelector("#content"));

setInterval(() => thing.foo += "!", 1000)
```

And thats it!

## License

MIT