import { useState } from "react";

interface InputUserProps {
    username: string;
}

export function InputUser(props: InputUserProps) {

    function SignInUser() {
        console.log("Change user loged")
    }

    return (
        <>
            <input
                type="text"
                placeholder="Insert your github username"
            />
            <button onClick={SignInUser}>Buscar repositorios</button>
        </>

    );
}