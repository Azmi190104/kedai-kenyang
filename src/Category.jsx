import CategoryCard from "./components/Elements/Category/CategoryCard";

export default function Category(props){
    const {category} = props
    return(
        
        <section className="category w-[80%] h-36 fixed top-28 right-0 left-0 bg-neutral-50">
                <h2 className="text-slate-400 text-xl my-2 ml-10"><b className="text-black">Menu</b> Category</h2>
                <CategoryCard category = {category}/>
        </section>
    )
}