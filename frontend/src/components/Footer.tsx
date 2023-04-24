export default function Footer() {
    return (
      <footer className="center mt-5 flex justify-center space-x-4 dark:bg-slate-900 dark:text-white p-4 text-xs">
        <p>Desenvolvido por Leonardo Basso </p>
        <span>|</span>
        <a
          href="https://www.linkedin.com/in/leojunioyuri/"
          className="font-medium text-orange-600"
        >
          LinkedIn
        </a>
        <span>|</span>
        <a
          href="https://github.com/LeoJunioYuri/pensao-mansao-azul"
          className="font-medium text-orange-600"
        >
          Código Fonte
        </a>
      </footer>
    )
  }