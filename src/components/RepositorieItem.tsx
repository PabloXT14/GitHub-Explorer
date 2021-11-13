
interface RepositorieItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositorieItem(props: RepositorieItemProps) {
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p className="description">{props.repository?.description ?? 'Without description'}</p>
            <a href={props.repository.html_url} target="_blank">
                Acessar repositório
            </a>
        </li>
    );
}