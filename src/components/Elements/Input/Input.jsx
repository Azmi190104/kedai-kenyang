export default function Input(props){
    const {placeholder,value, type, classname = 'bg-transparent p-2'} = props

    return(
        <>
            <label htmlFor=""></label>
            <input type={type}  
            placeholder={placeholder}
            className={classname}
            value={value}/>
        </>
    )
}