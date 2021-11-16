import { FaHeart, FaRegHeart } from 'react-icons/fa';


interface RepositorieItemProps {
    repository: {
        name: string;
        id: number;
        description: string;
        html_url: string;
        favorite?: boolean;
    }

    onHandleFavorite: Function;
}

export function RepositorieItem(props: RepositorieItemProps) {



    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p className="description">{props.repository?.description ?? 'Without description'}</p>
            <div className="bottomCard">
                <a href={props.repository.html_url} target="_blank">
                    Acessar repositório
                </a>

                <button
                    className={props.repository.favorite ? "favorited" : ""}
                    onClick={() => { props.onHandleFavorite(props.repository.id) }}>
                    {props.repository.favorite
                        ? <span><FaHeart size={17} /></span>
                        : <span><FaRegHeart size={17} /></span>
                    }
                </button>
            </div>

        </li>
    );
}