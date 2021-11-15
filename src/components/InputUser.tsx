import { useState } from "react";
import '../styles/inputuser.scss';


interface InputUserProps {
    onChangeUsername: Function;
}

export function InputUser(props: InputUserProps) {

    const [text, setText] = useState('')

    function handleChangeText(event: any) {
        console.log(text);
        setText(event.target.value);
    }


    return (
        <>
            <div className="inputField">
                <input
                    type="text"
                    placeholder="Insert your github username"
                    value={text}
                    onChange={handleChangeText}
                />
                <button onClick={() => {
                    props.onChangeUsername(text)
                    setText('')
                }} >Buscar</button>
            </div>

        </>

    );
}