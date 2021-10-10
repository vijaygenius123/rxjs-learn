import {of} from 'rxjs'
import {filter, reduce } from "rxjs/operators";

const observable = of(1, 2, 3, 4, 5)

const filterObservable = observable.pipe(filter(val => val % 2 == 0))
const reduceObservable = observable.pipe(reduce((acc, val) => acc + val))


observable.subscribe(val => addItem(val))
reduceObservable.subscribe(val => addItem(val))
filterObservable.subscribe(val => addItem(val))


function addItem(val: any) {
    const node = document.createElement('li')
    const textNode = document.createTextNode(val);
    node.appendChild(textNode)
    document.getElementById('output').appendChild(node)
}
