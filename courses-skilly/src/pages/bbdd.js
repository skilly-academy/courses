import React from 'react';
import Layout from '@theme/Layout'; // Importa el Layout de Docusaurus
import TechList from '../components/TechList';

const techs = [
  { name: 'mongodb', displayName: 'MongoDB', items: 1, logo: 'img/logos/mongodb-original.svg', description: 'Aprende sobre MongoDB, una base de datos NoSQL popular.', category: 'bbdd' },
  { name: 'mysql-mariadb', displayName: 'MySQL-MariaDB', items: 1, logo: 'img/logos/mariadb-original.svg', description: 'Conoce MySQL, una base de datos relacional muy utilizada.', category: 'bbdd' },
  { name: 'postgresql', displayName: 'PostgreSQL', items: 1, logo: 'img/logos/postgresql-original.svg', description: 'Descubre PostgreSQL, una base de datos avanzada de código abierto.', category: 'bbdd' },
  { name: 'redis', displayName: 'Redis', items: 1, logo: 'img/logos/redis-original.svg', description: 'Aprende sobre Redis, una base de datos en memoria que se utiliza como caché.', category: 'bbdd' },
];

export default function DatabasesPage() {
  return (
    <Layout
      title="Bases de datos"
      description="Explora los siguientes temas en Bases de Datos">
      <TechList 
        title="Bases de datos"
        description="Explora los siguientes temas en Bases de Datos:"
        techs={techs}
      />
    </Layout>
  );
}
