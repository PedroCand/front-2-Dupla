import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "next/image"; // ou "import Image from 'react-image';" se não usar Next

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-logo">
          <Link to="/">
            <Image src="/clinica.webp" alt="Logo" width={40} height={40} />
          </Link>
        </li>

        <div className="menu-desktop">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li className="dropdown">
            <button className="dropdown-btn" onClick={() => toggleMenu("consultas")}>
              Consultas
            </button>
            <div className={`dropdown-menu ${openMenu === "consultas" ? "show" : ""}`}>
              <Link to="/consultas">Listar</Link>
            </div>
          </li>
        </div>

        <li className="menu-icon" onClick={() => setOpenDrawer(true)}>
          <Image src="/menu-icon.webp" alt="Menu" width={32} height={32} />
        </li>
      </ul>

      <div className={`drawer ${openDrawer ? "drawer-open" : ""}`}>
        <div className="drawer-header">
          <span className="drawer-close" onClick={() => setOpenDrawer(false)}>×</span>
        </div>

        <ul className="drawer-list">
          <li><Link to="/">Home</Link></li>
          <li><strong>Consultas</strong></li>
          <li><Link to="/consultas">Listar</Link></li>
        </ul>
      </div>
    </nav>
  );
}
