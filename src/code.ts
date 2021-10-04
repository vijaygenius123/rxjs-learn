import {Observable} from 'rxjs'

const observable = Observable.create((observer: any) => {
    observer.next('Hey')
    observer.next('How Are You?')
    setInterval(() => {
        observer.next('I Am Good')
    }, 2000)
    // observer.complete()
    // observer.next('???')
})


const observer = observable.subscribe(
    (x: any) => addItem(x),
    (error: any) => addItem(error),
    () => addItem('Complete')
)

setTimeout(() => {
    observer.unsubscribe()
}, 6000)


function addItem(val: any) {
    const node = document.createElement('li')
    const textNode = document.createTextNode(val);
    node.appendChild(textNode)
    document.getElementById('output').appendChild(node)
}
