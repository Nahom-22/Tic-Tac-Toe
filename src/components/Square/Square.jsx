import Button from "../UI/Button/Button"

const Square =(props)=>{
    return(
        <div className="square">
            <Button value={props.value} onSetSquare={props.onSetSquare} />
        </div>
    )
}

export default Square