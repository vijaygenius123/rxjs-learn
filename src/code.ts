import {from} from 'rxjs'
import {map} from "rxjs/operators";

const observable = from([1, 2, 3, 4, 5])

const newObservable = observable.pipe(map(val => val * 2))

observable.subscribe(val => addItem(val))
newObservable.subscribe(val => addItem(val))

function addItem(val: any) {
    const node = document.createElement('li')
    const textNode = document.createTextNode(val);
    node.appendChild(textNode)
    document.getElementById('output').appendChild(node)
}
