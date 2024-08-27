import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fundamentos',
    Svg: require('@site/static/img/brain.svg').default,
    description: (
      <>
        Serie de cursos enfocados en la importancia de los fundamentos de la
        programación, sistemas, redes, bases de datos, etc.
      </>
    ),
    enlace: '/docs/category/fundamentos',
  },
  {
    title: 'Herramientas',
    Svg: require('@site/static/img/tool_m.svg').default,
    description: (
      <>
        Configura tu editor de código y sé más productivo con nuestra serie de cursos.
      </>
    ),
    enlace: '/docs/category/herramientas',
  },
  {
    title: 'Programación',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
        Desarrolla tu skill de programación con nuestra serie de cursos en diferentes lenguajes.
      </>
    ),
    enlace: '/docs/category/programacion', // Añade un enlace aquí también si lo necesitas
  },
  {
    title: 'Administración de sistemas',
    Svg: require('@site/static/img/server.svg').default,
    description: (
      <>
        Se un/a increible devops o sysadmin con nuestra serie de cursos enfocados en administración de sistemas y cloud.
      </>
    ),
    enlace: '/docs/category/sistemas', // Añade un enlace aquí también si lo necesitas
  },
  {
    title: 'Bases de datos',
    Svg: require('@site/static/img/data-base.svg').default,
    description: (
      <>
        Amplia tu skill de bases de datos con nuestra serie de cursos.
      </>
    ),
    enlace: '/docs/category/bases-de-datos', // Añade un enlace aquí también si lo necesitas
  },
  {
    title: 'Proyectos | Modo Historia\u00AE',
    Svg: require('@site/static/img/projects.svg').default,
    description: (
      <>
        Practica tus skills a través de nuestra simulación de proyectos y entornos reales
      </>
    ),
    enlace: '/docs/category/sistemas', // Añade un enlace aquí también si lo necesitas
  }
];

function Feature({Svg, title, description, enlace}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <a href={enlace} className="button button--primary">Let's go!</a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
