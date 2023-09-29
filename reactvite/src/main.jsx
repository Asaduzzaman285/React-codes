import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/*function MyApp () {
  return(
    <div>
      <h1>yes!!</h1>
    </div>
  )
}
const ReactElement = {
  type:"a",
  props:{
      href:"https://google.com",
      target:"_blank"
  },
  children:"Click me"
}
const anotherElement =(
  <a href='https://google.com'target='_blank'>visit google </a>
)
const reactElement=React.createElement(
  "a",
  {href:"https://google.com",target:"_blank"},
  "click me more"

)*/

ReactDOM.createRoot(document.getElementById('root')).render(

   <App/>
  
)
