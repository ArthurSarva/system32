import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "System32 | Agendamento Médico",
  description: "Sistema web para gerenciamento de consultas médicas",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="cabecalho">
          <Link href="/" className="marca">System32</Link>
          <nav>
            <Link href="/">Início</Link>
            <Link href="/agendamentos">Agendamentos</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>System32 — Sistema de Agendamento Médico</footer>
      </body>
    </html>
  );
}
