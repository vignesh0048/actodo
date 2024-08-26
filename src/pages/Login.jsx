import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {
    const navigate=useNavigate()
    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()
    const [ruser,setruser]=useState(true)

   const users=props.users

    function Checkuser() 
    {
        var userfound=false
        users.forEach(function(item)
    {
        if(item.username===eusername &&item.password===epassword)
        {
            console.log("Login successful")
            userfound=true
            navigate("/landing",{state:{user:eusername}})
        }
        
    })
    if(userfound===false)
        {
            console.log("login failed")
            setruser(false)
        }
    }

    function handleUinput(evt) {
        setEusername(evt.target.value)
    }

    function handlePinput(evt) {
        setEpassword(evt.target.value)
    }
   

    return (
        <div className="bg-black p-10">
            <div className="bg-[#efefef] p-10 text-black">
                <h1 className="text-2xl font-medium">Hey Hai!!!!</h1>
                {ruser ? <p>I help you manage your activities after your login:) </p> : <p className="text-red-400">Please sign up Before you login !!! </p> }

                <div className="flex flex-col gap-2 my-2  ">

                    <input type="text" placeholder="User Name" className="w-52 border bg-transparent rounded-md border-black"
                        onChange={handleUinput}  />

                    <input type="text" placeholder="PassWord" className="w-52 border bg-transparent rounded-md border-black"
                        onChange={handlePinput}  />

                    <button onClick={Checkuser} className="bg-[#8272da] w-24 p-1 rounded-md">Login</button>

                    <p>You don't have an Account? <Link to={"/Signup"} className="underline">Signup</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Login
