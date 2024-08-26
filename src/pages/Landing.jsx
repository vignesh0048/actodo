import Header from "../components/Header"
import Card from "../components/Card"
import TodoContainer from "../components/TodoContainer"
import { useLocation } from "react-router-dom"

function Landing()
 {
  const data=useLocation()

  return (
    <div className="bg-black p-16">
      <div className="bg-[#efefef] p-10 border rounded-md">
        {/* Header */}
        <Header name={data.state.user}/>
        {/* Card */}
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272da"} tittle={"23"} subtittle={"Chennai"} />
          <Card bgcolor={"#fd8663"} tittle={"Auguest 15"} subtittle={"14:12:008"} />
          <Card bgcolor={"#fca201"} tittle={"Built Using"} subtittle={"React"} />

        </div>


        {/* TodoContainer */}
        <TodoContainer />

      </div>

    </div>
  )
}
export default Landing