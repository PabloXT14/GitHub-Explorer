import { useState } from 'react';
import { InputUser } from './components/InputUser';
import { RepositorieList } from './components/RepositorieList';
import './styles/global.scss';

export function App() {
    //throw new Error('Ahhhhhhhhhhhhhhhhhhhhhhhhh');
    const [user, setUser] = useState('');


    return (
        <>
            <h1>Listagem de Repositórios</h1>

            <InputUser username="pabloxt14" />
            <RepositorieList />
        </>

    );
}