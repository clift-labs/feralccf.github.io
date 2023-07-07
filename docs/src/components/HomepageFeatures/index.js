import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Feral Core',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                The core to the framework is plain ole PHP code that only uses common functions in the language. The
                Feral Core can be used with any PHP framework like Symfony or Laravel.
            </>
        ),
        linkLabel: 'GitHub',
        link: 'https://github.com/cybermantix/feral-core'
    },
    {
        title: 'Feral Inline',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                The Feral inline bundle will allow symfony projects to simply call Feral processes to be executed
                anywhere in your Symfony application. This can be done in commands, controllers, or any code that is
                executed in a symfony project.
            </>
        ),
        linkLabel: 'GitHub',
        link: 'https://github.com/cybermantix/feral-inline'
    },
    {
        title: 'Feral Director',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                The Feral director is a stand alone service that can trigger processes via webhooks, a queue consumer,
                or CLI commands.
            </>
        ),
        linkLabel: 'GitHub',
        link: 'https://github.com/cybermantix/feral-core'
    }
];

function Feature({Svg, title, description, linkLabel, link}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <a class='center' href='{link}'>{linkLabel}</a>
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
