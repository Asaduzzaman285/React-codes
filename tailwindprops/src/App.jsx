import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'

function App() {
   let obj={
     name:"asad",
     age:26,
   };
   let obj2={
    name:"shrabon",
    age:"24"
   }
 

  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col"> {/* Added flex-col to make elements stack vertically */}
        <h1 className="text-4xl font-bold rounded-xl bg-green-400 text-black p-4 mb-8">Tailwind && test</h1>
        <Card channel="codes"obj={obj} btnText="click me "/>
        <Card channel="force" obj={obj2} btnText="visit me"/>
       
      </div>
      
    </>
  )
}

export default App
