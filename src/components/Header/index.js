/* eslint-disable jsx-a11y/anchor-is-valid */
import logo_blog from "../../svg/logo_blog.svg";

const Header = () => {
  const descLogo = "Essa é a logo do Blog";

  return (
    <>
      <header className="flex-space-between">
        <div className="logo">
          <img src={logo_blog} alt={descLogo}></img>
        </div>

        <div className="search">
          <input type="text" name="search" className="input-search" placeholder="Buscar artigos, podcasts, destaques..."></input>
        </div>

        <ul className="menu">
          <li>
            <a href="#" className="nav-link">
              Categories
            </a>
          </li>

          <li>
            <a href="#" className="nav-link">
              About
            </a>
          </li>

          <li>
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
