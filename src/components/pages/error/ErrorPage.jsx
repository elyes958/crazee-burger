//  l'on en a plus besoin en dehors de l'élément racine dans les versions récentes de React.donc plus besoin d'importe react comme sur la ligne en dessous
import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div>
        <h1>ErrorPage</h1>
        <Link to={"/login"}>
            <button>Retourner à la page d'accueil</button>
        </Link>
    </div>
  )
}
