import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Les bases, simplement',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Des explications courtes et visuelles pour (re)poser les fondations
        en maths, de la 6e à la Terminale.
      </>
    ),
  },
  {
    title: 'Un site pensé pour apprendre',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Parcours par niveau, fiches mémo et exercices auto-corrigés.
        Avance à ton rythme, sans te perdre.
      </>
    ),
  },
  {
    title: 'Étudie où tu veux',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Sur téléphone ou ordinateur, pour réviser, préparer un contrôle
        ou projeter en classe. Efficace et sobre.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
