import {run} from "@cycle/xstream-run";
import {makeDOMDriver} from "@cycle/dom";
import h from 'snabbdom/h';

function main(sources) {
    const input$ = sources.DOM.select('.field').events('input');

    const name$ = input$.map(ev => ev.target.value).startWith('');

    const vdom$ = name$.map(name =>
        h("p", "This is an app")
    );

    return { DOM: vdom$ }
}

run(main, { DOM: makeDOMDriver('#app') });