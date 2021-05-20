const ToDoList = (props) =>{
    
    return(
        <div>
            <i className="far fa-times-circle" onClick = {props.onSelect}></i>
            <li>{props.text}</li>
        </div>
        
    )
}

export default ToDoList