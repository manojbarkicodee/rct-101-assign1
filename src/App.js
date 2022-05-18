import './App.css';
import Card from './components/card';
import Maincard from './components/maincard';
let heading1="Mobile Operating System"
let heading2="Mobile Manufacturers"
let type2="disc"
let subdata=[
  {data:"Android"},
  {data:"Blackberry"},
  {data:"iPhone"},
  {data:"Windows Phone"},
]
let subdata1=[
  {data:"Samsung",type1:"square"},
  {data:"HTC",type1:"square"},
  {data:"Micromax",type1:"disc"},
  {data:"Apple",type1:"circle"},
]

function App() {
  return (
    <div className='App'>
      <div >
      <Card heading={heading1}/>
      {subdata.map((user)=>(
        <Maincard key={user.data} type1={type2} {...user}/>
      ))}
      </div>
      <div>
      <Card heading={heading2}/>
      {subdata1.map((user)=>(
        <Maincard key={user.data}  {...user}/>
      ))}
      </div>
    </div>
  );
}

export default App;
