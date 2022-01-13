import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Solidaire',
    Svg: require('../../static/img/undraw_together.svg').default,
    description: (
      <>
        Solidarité ! Une valeur qui sonne juste et qui résonne très fortement aux oreilles
        et au cœur des femmes et des hommes de l'équipe "2022, Enfin Ensemble !".
      </>
    ),
  },
  {
    title: 'Ensemble',
    Svg: require('../../static/img/undraw_team.svg').default,
    description: (
      <>
        En 2022 plus que jamais, c'est ensemble, les uns avec les autres que nous pourrons
        porter la voie de tous les salariés d'Alpes Isère Habitat.
        En 2022, soyons enfin ensemble !
      </>
    ),
  },
  {
    title: 'Collaboratif',
    Svg: require('../../static/img/undraw_collaboration.svg').default,
    description: (
      <>
        Pour notre projet soit le votre, il est à construire ensemble de manière collaborative,
        démocratique et ou chacun pourra être un artisant de la vie de l'équipe.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
