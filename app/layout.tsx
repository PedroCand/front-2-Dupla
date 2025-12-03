import "./globals.css";
import Navbar from "./Navbar";

export const metadata = {
  title: "Clínica Vida Saudável",
  description: "Sistema de clínica médica",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
