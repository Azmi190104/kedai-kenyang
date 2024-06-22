export default function CardProduct(props){
    const {products, showOverlay} = props;

    return(
        <ul className="flex gap-5 flex-wrap">
            {products.map((item) => (
            <a key={item.id} href="#overlay">
                <li  className="w-52 shadow-xl rounded-xl p-3 cursor-pointer" onClick={() => showOverlay(item.id)}>
                    <img src={item.img} alt="" className="w-[100%] h-28 rounded-xl" />
                    <h3 className="my-2">{item.name}</h3>
                    <h5>{(item.price).toLocaleString( 'id-ID', {
                        style: 'currency', 
                        currency: 'IDR'
                        })}</h5>
                        {item.status==='Tersedia'? <p className="text-slate-400">{item.status}</p> : <p className="text-red-400">{item.status}</p>}
                </li>
            </a>
            ))}
            </ul>
    )

}


// export default function CardProduct(props){
//     const {products, showOverlay} = props;

//     // Buat objek kategori yang berisi array kosong untuk setiap kategori
//     const categoryProducts = {
//         'Makanan': [],
//         'Minuman': [],
//         // Tambahkan kategori lainnya di sini
//     };

//     // Pisahkan produk berdasarkan kategori
//     products.forEach(product => {
//         categoryProducts[product.category].push(product);
//     });

//     // Buat komponen CardProduct untuk setiap kategori
//     const categoryComponents = Object.entries(categoryProducts).map(([category, products]) => (
//         <React.Fragment key={category}>
//             <h2>{category}</h2>
//             <ul className="w-4/5 flex gap-5 flex-wrap">
//                 {products.map((item) => (
//                     <li key={item.id} className="w-60 shadow-xl rounded-xl p-3 cursor-pointer" onClick={() => showOverlay(item.id)}>
//                         <img src={item.img} alt="" className="w-[100%] rounded-xl" />
//                         <h3 className="my-2">{item.name}</h3>
//                         <h5>{(item.price).toLocaleString( 'id-ID', {
//                             style: 'currency', 
//                             currency: 'IDR'
//                         })}</h5>
//                         <p className="text-slate-400">{item.status}</p>
//                     </li>
//                 ))}
//             </ul>
//         </React.Fragment>
//     ));

//     return (
//         <div>
//             {categoryComponents}
//         </div>
//     );
// }