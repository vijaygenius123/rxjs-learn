import {Observable} from 'rxjs'

var observable = Observable.create((observer: any) => {
    observer.next('Hey')
})


observable.subscribe((x: any) =>addItem(x))


function addItem(val: any) {
    const node = document.createElement('li')
    const textNode = document.createTextNode(val);
    node.appendChild(textNode)
    document.getElementById('output').appendChild(node)

}
