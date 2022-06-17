import "./styles.css";
import Images from "./Images/Washington.png";
function Header() {
  return (
    <header id="header">
      <nav>
        <span className="nav-brand">
          <span>Tarefas </span>& Consultas
        </span>

        <div className="profile">
          <img src={Images}  alt="Washington - Imagem de Perfil" />
        <div>
            <p className="name">Washington Gomes</p>
            <p className="welcome-message">Bem-vindo(a) a este site</p>
          </div>
        </div>
      </nav>
  
    </header>
  
  );

}

export default Header;
