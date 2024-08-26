//  import Header from "./components/Header";
// import Card from "./components/Card";
// import TodoContainer from "./components/TodoContainer";

// function App() {
//   return (
//     <div className="bg-black p-16">
//       <div className="bg-[#efefef] p-10 border rounded-md">
//         {/* Header */}
//         <Header />
//         {/* Card */}
//         <div className="flex justify-between gap-7 my-5 flex-wrap">
//           <Card bgcolor={"#8272da"} tittle={"23"} subtittle={"Chennai"} />
//           <Card bgcolor={"#fd8663"} tittle={"Auguest 15"} subtittle={"14:12:008"} />
//           <Card bgcolor={"#fca201"} tittle={"Built Using"} subtittle={"React"} />
//         </div>

//         {/* TodoContainer */}
//         <TodoContainer />

//       </div>

//     </div>
//   );
// }

// export default App

import { Route,BrowserRouter,Routes } from "react-router-dom"
import { useState } from "react"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Landing from "./pages/Landing"

function App() {
  const [users, setusers] = useState([
    {
      username: "vicky",
      password: "123"
    },
    {
      username: "abc",
      password: "123"
    }
  ])
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login users={users} setusers={setusers} />}></Route>
        <Route path="/Signup" element={<Signup users={users} setusers={setusers} />}></Route>
        <Route path="/Landing" element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  </div>)


}
export default App