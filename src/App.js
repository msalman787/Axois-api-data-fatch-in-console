import axios from 'axios'
import {useEffect,useState} from 'react'

function App(){

  let [data ,setdata] = useState([])
  let [name,setname] = useState("asad")
  
  console.log("satate")

 
  useEffect(()=>{
    console.log("run agin ")
  })  
   //rUN ON EVERY sTATE  uPDATE


 
  // axios.delete("https://jsonplaceholder.typicode.com/todos",{
  //   id: 1
  // })
  // axios.post("https://jsonplaceholder.typicode.com/todos/101",{
  //   name: "shhshshsh"
  // })
  useEffect(()=>{
   axios.get("https://jsonplaceholder.typicode.com/comments")
  .then((snap)=>{
    console.log(snap)
   var getdata =[]
    snap.data.forEach(element => {
      console.log(element. email)  
      var obj = {
        userId: element.id, 
        id: element.        id,
         email: element.email
      }   
      getdata.push(obj) 
    });
    console.log(getdata)
    
  
  })
  },[])   //component did Mount 
  
  useEffect(()=>{
    console.log("data update")
  },[name])   

  return(
    
    <div>
      
      <h1>Hello</h1>
      {name}
      <button onClick={()=>setdata(++data)}>Change value</button>
{data}
      <button onClick={()=>setname("omer")}>Change value 2</button>

    </div>
  )
}

export default App;