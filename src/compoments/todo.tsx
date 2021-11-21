import React, {useRef} from "react";

interface TodoProps {
    onAdd(title: string): void
}

export const Todo: React.FC<TodoProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null)
    // const [title, setTitle]=useState('')
    // const changeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
    //     setTitle(event.target.value)
    // }
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
            // console.log(title)
            // setTitle('')
        }
    }
    return (
        <div className="input-field mt2">
            <input
                // onChange={changeHandler}
                // value={title}
                ref={ref}
                type="text"
                id="title"
                placeholder="Todo List"
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">
                Todo list
            </label>
        </div>
    )
}

