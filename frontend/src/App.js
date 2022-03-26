import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [msg, setMsg] = useState("")
  // useEffect(() => {
  //   axios.get('https://localhost:1337/api/').then(response=>{
  //     if (response.data.success){
  //       setMsg(response.data.msg)
  //       console.log(msg);
  //     }
  //     else{
  //       alert("Failed to get msg from Backend");
  //     }
  //   })
  // })
  
  return (
    <div>
      <h1>Hello World!</h1>
      {/* {msg} */}
      {/* Hello */}
    </div>
  );
}

export default App;
