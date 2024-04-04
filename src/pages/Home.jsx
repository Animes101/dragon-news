

import BrakingNews from "../components/BrakingNews"
import CenterSection from "../components/CenterSection"
import Header from "../components/Header"
import LeftSection from "../components/LeftSection"
import Navbar from "../components/Navbar"
import RightSection from "../components/RightSection"



const Home = () => {
  return (
    <div className="font-popines font-bold text-4xl">
    <Header />
    <BrakingNews />
    <Navbar />
    <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
      <div><LeftSection /></div>
      <div className="col-span-2"><CenterSection /></div>
      <div><RightSection /></div>
    </div>
    
    </div>
  )
}

export default Home