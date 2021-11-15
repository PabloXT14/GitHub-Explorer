import { useState } from 'react';
import { InputUser } from './components/InputUser';
import { RepositorieList } from './components/RepositorieList';
import './styles/global.scss';

export function App() {
    //throw new Error('Ahhhhhhhhhhhhhhhhhhhhhhhhh');

    const [username, setUsername] = useState('');

    function changeUsername(newUser: string) {
        setUsername(newUser);
        //console.log(username);
    }


    return (
        <>
            <h1>Listagem de Repositórios</h1>

            <InputUser onChangeUsername={changeUsername} />
            <br />
            <RepositorieList username={username} />
        </>

    );
}