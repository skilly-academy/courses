import React from 'react';
import Layout from '@theme/Layout';
import TechList from '../components/TechList';

const techs = [
    { name: 'angular', displayName: 'Angular', items: 5, logo: 'img/logos/angular-original.svg', description: 'Aprende Angular, un framework popular para aplicaciones web.', category: 'programacion' },
    { name: 'c', displayName: 'C', items: 3, logo: 'img/logos/c-original.svg', description: 'Domina C, un lenguaje de programación de bajo nivel.', category: 'programacion' },
    { name: 'c-plus', displayName: 'C++', items: 3, logo: 'img/logos/cplusplus-original.svg', description: 'Conoce C++, una extensión poderosa de C.', category: 'programacion' },
    { name: 'c-sharp', displayName: 'C#', items: 3, logo: 'img/logos/csharp-original.svg', description: 'Aprende C#, un lenguaje de programación moderno para .NET.', category: 'programacion' },
    { name: 'css', displayName: 'CSS', items: 2, logo: 'img/logos/css3-original.svg', description: 'Conoce CSS, el lenguaje de estilos para la web.', category: 'programacion' },
    { name: 'dart', displayName: 'Dart', items: 2, logo: 'img/logos/dart-original.svg', description: 'Aprende Dart, un lenguaje de programación optimizado para aplicaciones web y móviles.', category: 'programacion' },
    { name: 'express', displayName: 'Express', items: 2, logo: 'img/logos/express-original.svg', description: 'Domina Express, un framework minimalista para Node.js.', category: 'programacion' },
    { name: 'flutter', displayName: 'Flutter', items: 2, logo: 'img/logos/flutter-original.svg', description: 'Conoce Flutter, un SDK para crear aplicaciones móviles nativas.', category: 'programacion' },
    { name: 'html', displayName: 'HTML', items: 3, logo: 'img/logos/html5-original.svg', description: 'Domina HTML, el lenguaje de marcado fundamental para la web.', category: 'programacion' },
    { name: 'java', displayName: 'Java', items: 4, logo: 'img/logos/java-original.svg', description: 'Conoce Java, uno de los lenguajes de programación más utilizados.', category: 'programacion' },
    { name: 'javascript', displayName: 'JavaScript', items: 3, logo: 'img/logos/javascript-original.svg', description: 'Domina JavaScript, el lenguaje esencial para la web.', category: 'programacion' },
    { name: 'json', displayName: 'JSON', items: 2, logo: 'img/logos/json-original.svg', description: 'Aprende JSON, el formato estándar para intercambio de datos.', category: 'programacion' },
    { name: 'markdown', displayName: 'Markdown', items: 2, logo: 'img/logos/markdown-original.svg', description: 'Domina Markdown, un lenguaje de marcado ligero para crear contenido.', category: 'programacion' },
    { name: 'nodejs', displayName: 'Node.js', items: 3, logo: 'img/logos/nodejs-original.svg', description: 'Conoce Node.js, un entorno de ejecución para JavaScript en el servidor.', category: 'programacion' },
    { name: 'php', displayName: 'PHP', items: 3, logo: 'img/logos/php-original.svg', description: 'Aprende PHP, un lenguaje de programación ampliamente utilizado para desarrollo web.', category: 'programacion' },
    { name: 'python', displayName: 'Python', items: 4, logo: 'img/logos/python-original.svg', description: 'Domina Python, un lenguaje de programación versátil y fácil de aprender.', category: 'programacion' },
    { name: 'react', displayName: 'React', items: 3, logo: 'img/logos/react-original.svg', description: 'Aprende React, una biblioteca para construir interfaces de usuario.', category: 'programacion' },
    { name: 'typescript', displayName: 'TypeScript', items: 2, logo: 'img/logos/typescript-original.svg', description: 'Conoce TypeScript, un superconjunto de JavaScript con tipado estático.', category: 'programacion' },
    { name: 'vue', displayName: 'Vue.js', items: 3, logo: 'img/logos/vuejs-original.svg', description: 'Aprende Vue.js, un framework progresivo para construir interfaces de usuario.', category: 'programacion' },
    { name: 'xml', displayName: 'XML', items: 2, logo: 'img/logos/xml-original.svg', description: 'Domina XML, un lenguaje de marcado para la transferencia de datos.', category: 'programacion' },
  ];

export default function ProgrammingPage() {
  return (
    <Layout
      title="Programación"
      description="Explora los siguientes temas en Programación">
      <TechList 
        title="Programación"
        description="Explora los siguientes temas en Programación:"
        techs={techs}
      />
    </Layout>
  );
}
