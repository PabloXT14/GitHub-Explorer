import { useEffect, useState } from "react";
import { RepositorieItem } from "./RepositorieItem";
import '../styles/repositories.scss';


interface Repository {
    name: string;
    id: number;
    description: string;
    html_url: string;
    owner: {
        login: string;
        avatar_url: string;
    }
    favorite?: boolean;
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


    // Funcao favoritar repositorio
    function handleFavorite(id: number) {
        const newRepositories = repositories.map(repo => {
            return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
        })

        setRepositories(newRepositories);
    }


    return (
        <>
            {repositories.length == 0 && <p className="notice"> Please insert a valided github acount! </p>}

            <ul>

                {repositories.map(repository => {
                    return <RepositorieItem
                        key={repository.name}
                        repository={repository}
                        onHandleFavorite={handleFavorite}
                    />
                })
                }
            </ul>
        </>
    );
}