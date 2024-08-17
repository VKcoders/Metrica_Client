import "../Styles/NotFound.css";
import Icon from "../Assets/NotFound.png";

function NotFound () {
    return (
        <div className="not-found-container">
            <img id="not-found-icon" src={Icon} alt="Icon Not Found" />
            <h1 id="not-found-text">Página Não Encontrada [Error 404]</h1>
        </div>
    )
}

export default NotFound;