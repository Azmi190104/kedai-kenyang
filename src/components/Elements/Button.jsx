export default function Button(props){
    const {type, classname = 'p-2 bg-[#53b1bc] text-white rounded-xl'} = props
    return(
        <button
        className={classname}
        >{type}</button>
    )
}