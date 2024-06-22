import { useState, useEffect } from "react";
import Category from "../Category";
import Header from "../components/Fragments/Header";
import MenuProduct from "../components/Fragments/MenuProduct";
import Aside from "../components/Fragments/Aside";


const products = [
    // makanan
    {
        id: 1,
        category : 'Makanan',
        name: 'Mie Goreng',
        status: 'Habis',
        quant: 1,
        price: 15000,
        img: 'https://grosirmesin.com/wp-content/uploads/2020/08/mie-goreng-saus-tiram.jpg'
    },
    {
        id: 2,
        category : 'Makanan',
        name: 'Nasi Goreng',
        status: 'Tersedia',
        quant: 1,
        price: 15000,
        img: 'https://img.freepik.com/free-photo/sausage-fried-rice-with-tomatoes-carrots-shiitake-mushrooms-plate_1150-27183.jpg?t=st=1717271390~exp=1717274990~hmac=3068af43f96d9b6847c621a58e9dbdc2531b223c19e98e9e334ef4c40ad67cad&w=826'
    },
    {
        id: 3,
        category : 'Makanan',
        name: 'Kwetiau Goreng',
        status: 'Tersedia',
        quant: 1,
        price: 15000,
        img: 'https://img.freepik.com/free-photo/high-angle-traditional-asian-meal-with-chopsticks_23-2148694371.jpg?t=st=1717271559~exp=1717275159~hmac=eb2f80679e49760d88ed6da18bc35d8b360b351ef5eafffdb7f9beb113815d83&w=900'
    },
    {
        id: 3,
        category : 'Makanan',
        name: 'Katsu Chicken',
        status: 'Tersedia',
        quant: 1,
        price: 15000,
        img: 'https://cdn.tasteatlas.com/images/dishes/af313cdc41d644d99d570fe60e218b0f.jpg'
    },
    {
        id: 3,
        category : 'Makanan',
        name: 'Roti Bakar',
        status: 'Tersedia',
        quant: 1,
        price: 12000,
        img: 'https://i.pinimg.com/564x/f5/53/ad/f553ad39705c523987c79085074b6043.jpg'
    },


    // Minuman
    {
        id: 4,
        category : 'Minuman',
        name: 'Machiato',
        status: 'Tersedia',
        quant: 1,
        price: 22000,
        img: 'https://img.freepik.com/free-photo/perfect-iced-latte_53876-31301.jpg?t=st=1717271755~exp=1717275355~hmac=a58015071ebdc2132358b86352402405f9633a7ceca15497c7125f9c44f968b3&w=900'
    },
    {
        id: 5,
        category : 'Minuman',
        name: 'Cappucino',
        status: 'Tersedia',
        quant: 1,
        price: 21000,
        img: 'https://as2.ftcdn.net/v2/jpg/01/94/82/87/1000_F_194828703_vuNjz8Otb66VfI4rQyg9tBUPuGAugsUR.jpg'
    },
    {
        id: 6,
        category : 'Minuman',
        name: 'Americcano Coffee',
        status: 'Tersedia',
        quant: 1,
        price: 24000,
        img: 'https://img.freepik.com/free-photo/coffee-preparation-concept-still-life_23-2150354591.jpg?t=st=1717272282~exp=1717275882~hmac=bb1ac814a52703110ecbd7986ba1d56c52ac73ee78d287d89f450c9bf629d8f6&w=900'
    },


    // Desert
    {
        id: 7,
        category : 'Desert',
        name: 'Fudgy Brownies',
        status: 'Tersedia',
        quant: 1,
        price: 11000,
        img: 'https://akcdn.detik.net.id/community/media/visual/2021/11/22/fudgy-brownies-menjadi-dessert-yang-digemari-banyak-masyarakatfoto-freepikcomsutteerug.jpeg?w=620&q=90'
    },
    {
        id: 8,
        category : 'Desert',
        name: 'Croffle',
        status: 'Tersedia',
        quant: 1,
        price: 10000,
        img: 'https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2022/05/28/cover-artikel-mei-23jpg-20220528092110.jpg'
    },
    {
        id: 9,
        category : 'Desert',
        name: 'Tart',
        status: 'Tersedia',
        quant: 1,
        price: 14000,
        img: 'https://nibble-images.b-cdn.net/nibble/original_images/jenis-jenis-dessert-06.jpg'
    },
]


export default function HomeMenu(){
    const [item, setItem] = useState(products)
    const [selectProduct, setSelectProduct] = useState(item[0])
    const [cart, setCart]= useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [food, setFood] = useState(products.filter(i => i.category === 'Makanan'))
    const [drink, setDrink] = useState(products.filter(i => i.category === 'Minuman'))
    const [desert, setDesert] = useState(products.filter(i => i.category === 'Desert'))

    useEffect(()=>{
        const sum = cart.reduce((acc, item) => {
            const product = products.find(i => i.id === item.id)
            return acc + (product.price * item.quant)
        },0)
        setTotalPrice(sum)
    },[cart])

    const showOverlay = (id)=> {
        const newItem = item.find((i) => i.id === id)
        setSelectProduct(newItem)
    }

    const addCart = (id) => {
        if(cart.find(i => i.id === id)){
            const quantity = parseInt(document.querySelector('.quant').value)
            setCart(cart.map(i => i.id === id  ? {...i, quant : i.quant + quantity} : i))
            // {selectProduct.status === 'Tersedia' ? setCart(cart.map(i => i.id === id ? {...i, quant : i.quant + quantity} : i)) : null}
        }else{
            const quantity = parseInt(document.querySelector('.quant').value)
            const newItem = products.find(i => i.id === id)
            setCart([...cart, {id, price: newItem.price * quantity, quant: quantity , name: newItem.name}]) 
        }
        const overlay =document.querySelector('.overlay a')
        overlay.click()
       
    }

    return(
       <>
        <header className="h-28 flex justify-between bg-neutral-50 pt-7 pb-5 px-10 fixed top-0 left-0 right-0 border-2">
            <h1 className="text-3xl font-bold">KEDAI <b className="text-[#53b1bc] font-bold">KENYANG</b></h1>
            <Header/>
        </header>
        <main className="z-[-1] w-[80%] h-[100%] p-2 fixed pt-64">
            <section className="contentMain w-[99%] h-[50%] overflow-y-scroll overflow-x-hidden">
                <Category catagory={item.category} />
                <section className="contentProduct flex flex-col gap-10">
                    <MenuProduct products={food} selectProduct={selectProduct} showOverlay={showOverlay} addCart={addCart} category='Makanan'  />
                    <MenuProduct products={drink} selectProduct={selectProduct} showOverlay={showOverlay} addCart={addCart} category='Minuman' />
                    <MenuProduct products={desert} selectProduct={selectProduct} showOverlay={showOverlay} addCart={addCart} category='Desert' />
                    <Aside totalPrice={totalPrice} setTotalPrice={setTotalPrice} cart={cart}/>
                </section>
            </section>
        </main>

       </>
    )
}