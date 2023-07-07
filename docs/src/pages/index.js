import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Visit our Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
        <div className={styles.topFeatures} >
            <div className="row">
                <div className={clsx('col col--4')}>
                    <div className="text--center padding-horiz--md">
                        <h3>Who was Feral CCF built for?</h3>
                        <p>For the past 23 years people have asked why I code in PHP. I'll admit, back in 2000 I really wanted to code in Java, so I did. I wrote a lot of Java, PERL, Javascript, Flex, whatever was 'hot' at the time. But, time after time I kept building projects in PHP. First PHP3, then PHP4, 5, 6 (just kidding), 7 and now PHP8.
                            Time after time at tech conference, online, some asshole manager I was criticised for using PHP. At this point in my career I'm done with the programming language religious wars.</p>
                    </div>
                    <div className="text--center">
                        <img src='https://www.php.net/images/logos/new-php-logo.svg' width={120} />
                    </div>
                </div>
                <div className={clsx('col col--4')}>
                    <div className="text--center padding-horiz--md">
                        <h3>What is a Code Composition Framework (CCF)?</h3>
                        <p>A CCF is a way to compose a process using reusable
                            code contained inside a node. Data is read and written to a context that is passed between nodes. Once
                            a node completes it code, it returns a result. The next nodes to be process is regulated by the result
                            from the current node.</p>
                    </div>
                </div>
                <div className={clsx('col col--4')}>
                    <div className="text--center padding-horiz--md">
                        <h3>Who should use Feral CCF?</h3>
                        <p>Feral CCF should be used by Symfony Developers who wish to use
                            reusable code in a structured, observable framework.</p>
                        <p>
                            So you don't think a Code Composition Framework system should be written in PHP?? Fine, Piss off and Go Away.
                        </p>
                        <p>
                            Feral is a Code Composition Framework written in PHP. This project is the free and open core which contains the basic tools for Feral.
                        </p>
                    </div>
                    <div className="text--center">
                        <img src='https://symfony.com/logos/symfony_black_03.svg' width={120} />
                    </div>
                </div>
            </div>
        </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
