import {ReplaySubject} from 'rxjs'

const subject = new ReplaySubject(2)

subject.subscribe(
    data => addItem('Observer 1 ' + data),
    error => addItem(error),
    () => addItem('Completed')
)

subject.next("Task 1")
subject.next("Task 1.1")
subject.next("Task 1.2")
const observer2 = subject.subscribe(
    data => addItem('Observer 2 ' + data),
)

subject.next("Task 2")
subject.next("Task 3")

observer2.unsubscribe()

subject.next("Task 4")

function addItem(val: any) {
    const node = document.createElement('li')
    const textNode = document.createTextNode(val);
    node.appendChild(textNode)
    document.getElementById('output').appendChild(node)
}
