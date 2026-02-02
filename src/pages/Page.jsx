import { useSelector } from "react-redux"
import Home from "./Home"
import MyCart from "./MyCart"
const Page = () => {
    const page = useSelector(state => state.pages)//ไปดูใน pages ว่ามีค่า state คืออะไร
    return <div>{page.home ?<Home/>:<MyCart />}</div>
}

export default Page