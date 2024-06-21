import Heading from "../Shared/Heading"
import ProductCard from "./ProductCard"
import Img1 from "../../assets/product/p-1.jpg"
import Img2 from "../../assets/product/p-2.jpg"
import Img3 from "../../assets/product/p-3.jpg"
import Img4 from "../../assets/product/p-4.jpg"


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Zandalias Caseras",
        price: "120",
        aosDelay: "0"
    },
    {
        id: 2,
        img: Img2,
        title: "Gafas Seen Mujer",
        price: "420",
        aosDelay: "200"
    },
    {
        id: 3,
        img: Img3,
        title: "Nike Air Force One",
        price: "320",
        aosDelay: "400"
    },
    {
        id: 4,
        img: Img4,
        title: "Gorra Nike",
        price: "50",
        aosDelay: "600"
    },
]


const Products = () => {
  return (
    <div>
        <div className="container">
            <Heading title={"Nuestros Productos"}
            subtitle={"Explora Nuestros Productos"} />
            <ProductCard data={ProductsData} />
        </div>
    </div>
  )
}

export default Products