import CardProduct from "../Elements/CardProduct"
import Overlay from "./Overlay"

export default function MenuProduct(props){
    const {products, selectProduct, showOverlay ,category, addCart} = props
    
    return(
        <section className=""id={category}>
            <section className=" px-5" >
                <h2 className="font-bold text-xl mb-5">{category}</h2>
                    <CardProduct products={products} showOverlay={showOverlay} category={category}/>
                <section className="overlay" id="overlay">
                    <Overlay selectProduct={selectProduct} addCart={addCart}/>
                </section>
            </section>
        </section>
    )
}