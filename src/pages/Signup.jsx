import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Signup(props) {
    const navigate=useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()

    function Adduser() {
        setusers([...users, { username: eusername, password: epassword }])
        navigate("/")
    }

    function handleUinput(evt) {
        setEusername(evt.target.value)
    }

    function handlePinput(evt) {
        setEpassword(evt.target.value)
    }
    return (
        <div className="bg-black p-10">
            <div className="bg-[#efefef] p-10 text-black rounded-md">

                <h1 className="text-2xl font-medium">Hey Hai!!!!</h1>
                <p>You can Sign up here;)</p>

                <div className="flex flex-col gap-2 my-2  ">

                    <input type="text" placeholder="User Name"
                        className="w-52 border bg-transparent rounded-md border-black"
                        onChange={handleUinput} />

                    <input type="text" placeholder="PassWord"
                        className="w-52 border bg-transparent rounded-md border-black"
                        onChange={handlePinput} />

                    <input type="text" placeholder="Conform Password"
                        className="w-52 border bg-transparent rounded-md border-black" />

                    <button onClick={Adduser} className="bg-[#facf43ef] w-24 p-1 rounded-md">Sign up</button>
                    
                    <p>Don't have an account <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Signup