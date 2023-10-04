import React from 'react'
import "./App.css"
let greeting = " ";
let sty ={ };


const App = () => {

  const currDate= new Date(2023,10,4,15)
  const currentDate =currDate.getHours();

if(currentDate >= 1 && currentDate <= 12){
  greeting = "Good Morning"
sty.color= "green"
}else if(currentDate > 12 && currentDate < 19){
  greeting = "Good Evening"
sty.color ="orange"

}else{
  greeting = "Good Night"
  sty.color ="pink"
}

  return (

    <>
    <div className='di'>
    <h1>Hello Sir, <span style={sty}>{greeting}</span></h1>
    </div>
    </>
    )
}
export default App;
