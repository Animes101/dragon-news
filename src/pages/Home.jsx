

import BrakingNews from "../components/BrakingNews"
import Header from "../components/Header"
import Navbar from "../components/Navbar"


const Home = () => {
  return (
    <div className="font-popines font-bold text-4xl">
    <Header />
    <BrakingNews />
    <Navbar />
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div>1</div>
      <div className="col-span-2">2</div>
      <div>2</div>
    </div>
    
    </div>
  )
}

export default Home