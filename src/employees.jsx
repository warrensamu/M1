let warren = 'Warren Samu'
let natasha = 'Natasha M'
let henry = 'Henry VIII'
let nathan = 'Nathan E'
let robin = 'Robin Banks'
let bob = 'Bob Johnson'
let sally = 'Sally Fields'
const element = (
    <ul style={{'color': 'purple', 'fontSize': '24px'}}>
        <li>{warren}</li>
        <li>{natasha}</li>
        <li>{henry}</li>
        <li>{nathan}</li>
        <li>{robin}</li>
        <li>{bob}</li>
        <li>{sally}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))