const ToDoList = (props) =>{
    
    return(
        <div className="item">
            <i className="far fa-times-circle" onClick = {()=>{
                props.onSelect(props.id)
            }}></i>
            <li>{props.text}</li>
        </div>
        
    )
}

export default ToDoList