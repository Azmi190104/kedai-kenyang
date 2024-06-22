import Button from "../Elements/Button";

export default function Aside(props){
    const {totalPrice, setTotalPrice, cart} = props

    return(
        <aside className="cart w-[20%] h-[80%] border-2 fixed right-0 top-24 bg-neutral-50 flex flex-col justify-between">
            <section>
            <h2 className="font-bold text-xl my-5 mx-10">Cart</h2>
                <ul>
                        {cart.map((item) => (
                            <li key={item.id} className="flex flex-col gap-2 border-[1px] py-2 pl-2">
                                <section className="flex gap-4 w-full">
                                    <p className="font-bold">{item.quant}x</p>
                                    <p className="font-bold">{item.name}</p>
                                </section>
                                <p className="ml-32">{item.price.toLocaleString( 'id-ID', { style: 'currency', currency: 'IDR' })}</p>
                            </li>
                        ))}
                </ul>
            </section>
            <section className="cekOut w-full">
                <h4 className="my-5 mx-2">Total : <b className="text-[#53b1bc]">{totalPrice.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</b></h4>
                <Button type="cek out" classname="w-full p-2 bg-[#53b1bc] text-white rounded-xl" />
            </section>
        </aside>
    )
}