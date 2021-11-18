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
    const [totalFavorites, setTotalFavorites] = useState(0);

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


    // Checando numero de repositorios favoritados
    useEffect(() => {

        const filtered = repositories.filter(repo => repo.favorite);
        setTotalFavorites(filtered.length);

    }, [repositories])


    return (
        <>
            {/* Aviso para inserir conta github valida */}
            {repositories.length == 0 && <p className="notice"> Please insert a valided github acount! </p>}

            {/* Contador de repositorios favoritados */}
            {repositories.length !== 0 && <div className="reposFavorite"><span>{totalFavorites}</span> favorite(s)</div>}

            {/* Lista de repositorios da conta inserida */}
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