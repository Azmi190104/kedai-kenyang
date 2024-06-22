import Button from "../Elements/Button"
import Input from "../Elements/Input/Input"
import toast, {Toaster} from "react-hot-toast"

export default function Overlay(props){
    const {selectProduct, addCart} = props
    return(
        <>
        <a href="#" className="w-12 h-12 bg-neutral-50 block  text-center pt-3 rounded-full ">X</a>
            <section key={selectProduct.id} className="sub-content w-[50%] h-[50%] bg-neutral-50 rounded-3xl m-auto my-52 p-5">
                <h1>{selectProduct.name}</h1>
                <p>{selectProduct.price.toLocaleString( 'id-ID', { style: 'currency', currency: 'IDR' })}</p>
                <form action="" className="flex flex-col gap-3">
                    <p>Kuantitas</p>
                    <Input type="number" classname='quant bg-slate-200 w-20 border-2 border-black'/>
                    <button className="bg-[#53b1bc] text-white rounded-xl" onClick={selectProduct.status==='Tersedia'? ()=>addCart(selectProduct.id) : toast('Stok Habis')}>submit</button>
                    <Toaster />
                </form>
            </section>
        
        </>
    )
}