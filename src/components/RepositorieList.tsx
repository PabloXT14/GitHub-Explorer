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

interface RepositorieListProps {
    username: string;
}


export function RepositorieList(props: RepositorieListProps) {
    //State do repository
    const [repositories, setRepositories] = useState<Repository[]>([])


    //Buscando repositorios na API do Github
    useEffect(() => {
        if (props.username.trim() === '') return (setRepositories([]));

        fetch(`https://api.github.com/users/${props.username}/repos`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setRepositories(data)
            })
            .catch((err) => { console.log(err) });
    }, [props.username]);


    return (
        <ul>
            {
                (repositories === [])
                    ? <p>Please insert a valided github acount!</p>
                    : repositories.map(repository => {
                        return <RepositorieItem key={repository.name} repository={repository} />
                    })
            }
        </ul>
    );
}