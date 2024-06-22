import Food from "../../../../public/img/food.png";
import Drink from "../../../../public/img/drink.png";
import Desert from "../../../../public/img/desert.png";



export default function CategoryCard(props){
    const {category} = props;

    const dataCate=[
        {
            id: 1,
            img: Food,
            name: "Makanan"
        },
        {
            id: 2,
            img: Drink,
            name: "Minuman"
        },
        {
            id: 3,
            img: Desert,
            name: "Desert"}
    ]


    const card = document.querySelectorAll('.categoryCard');
    card.forEach(item => {
        item.addEventListener('click', () => {
            card.forEach(item => {
                item.classList.remove('active');
            })
            item.classList.add('active');
        })
    })

    return(
        <ul className="w-1/2 flex gap-10 mx-auto text-center text-sm">
            {dataCate.map((item) => (
            <a key={item.id} href={`#${item.name}`}>
                <li  className="categoryCard w-20 shadow-2xl rounded-[30%] flex flex-col text-center px-5 py-2 mb-5 cursor-pointer">
                    <img className="w-auto mx-auto shadow-xl rounded-[30%]" src={item.img} alt="" />
                    <h3 className="my-3 text-xs mx-[-10px]">{item.name}</h3>
                </li>
            </a>

            ))}
        </ul>
    )
}