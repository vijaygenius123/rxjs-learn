import {ajax} from "rxjs/ajax";
import {filter, flatMap, from, pluck} from "rxjs";

const peopleUrl = 'https://randomuser.me/api?results=50'

const peopleRes = ajax.getJSON(peopleUrl).pipe(
    pluck('results'),
    flatMap((val:any) => from(val)),
)


const people = peopleRes.pipe(
    filter((val: any) => val.gender === 'male'),
    pluck('name', 'first'),
)

people.subscribe(val => addItem(val))


function addItem(val: any) {
    const node = document.createElement('li')
    const textNode = document.createTextNode(val);
    node.appendChild(textNode)
    document.getElementById('output').appendChild(node)
}
