import { useEffect, useState } from "react";
import { RepositorieItem } from "./RepositorieItem";
import '../styles/repositories.scss';


interface Repository {
    name: string;
    description: string;
    html_url: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}


export function RepositorieList() {
    //State do repository
    const [repositories, setRepositories] = useState<Repository[]>([])
    //State username
    const [username, setUsername] = useState('')



    //Buscando repositorios na API do Github
    useEffect(() => {
        fetch(`https://api.github.com/users/pabloxt14/repos`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setRepositories(data)
            })
    }, []);


    return (
        <ul>
            {repositories.map(repository => {
                return <RepositorieItem key={repository.name} repository={repository} />
            })}
        </ul>
    );
}