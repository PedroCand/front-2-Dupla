import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "Clínica Vida Saudável",
  description: "Sistema médico com Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <nav className="navbar">
          <ul className="navbar-list">

            <li className="navbar-logo">
              <Image
                src="/logo (1).webp"
                alt="Logo"
                width={40}
                height={40}
              />
            </li>

            <li>Home</li>
            <li>Especialidades</li>
            <li>Médicos</li>
            <li>Pacientes</li>
            <li>Consultas</li>
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}
