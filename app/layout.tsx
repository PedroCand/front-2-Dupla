import "./globals.css";
import Navbar from "./Navbar";

export const metadata = {
  title: "Clínica Vida Saudável",
  description: "Sistema médico em Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
