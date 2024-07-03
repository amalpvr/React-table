import { useEffect, useState } from "react";
import UserData from "./UserData";
import './App.css'
const API = "https://jsonplaceholder.typicode.com/posts"

const App = () =>{
  const [users, setUsers] = useState([]);
  const [search,setSearch]= useState(users);

const fetchData = async(url)=>{
  try{
    const reslt = await fetch (url);
    const data = await reslt.json()
    
    if(data.length>0){
      setUsers(data);
      setSearch(data);
    }
    console.error(data)

  }catch(e){
    console.error(e)
  }
}


  useEffect(()=>{
    fetchData(API);
  },[])

const Filter = (event) => {
  setSearch(users.filter(f=>f.title.toLowerCase().includes(event.target.value)))
}

return<>

<div className="container">
<h1>React Table</h1>
<input onChange={Filter} className="input-feild" type="text" />
<br />
<table>
  <thead>
    <tr>
      <th>Id</th>
      <th>UserId</th>
      <th>Title</th>
      <th>Body</th>
    </tr>
  </thead>
  <tbody>
    <UserData search = {search}/>
  </tbody>
</table>
</div>
</>
}

export default App;
