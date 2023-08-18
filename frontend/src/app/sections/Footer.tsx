'use client'
import React from 'react';


export default function Footer() {
  const linkStyles = 'font-medium text-orange-600';
  const linkedInUrl = 'https://www.linkedin.com/in/leojunioyuri/';
  const sourceCodeUrl = 'https://github.com/LeoJunioYuri/pensao-mansao-azul';

  return (
    <footer className="center mt-5 flex justify-center space-x-4 bg-navyBlue dark:bg-darkNavyBlue text-white p-4 text-xs">
      <p>Desenvolvido por Leonardo Basso</p>
      <span>|</span>
      <a href={linkedInUrl} className={linkStyles} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <span>|</span>
      <a href={sourceCodeUrl} className={linkStyles} target="_blank" rel="noopener noreferrer">
        Código Fonte
      </a>
    </footer>
  );
}
