import './button.css'


const Button=(props)=>{
    return(
        <>
          <button className="btn" onClick={props.onSetSquare}>{props.value}</button>
        </>
    )
}


export default Button