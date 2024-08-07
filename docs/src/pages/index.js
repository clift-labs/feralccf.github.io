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
      title={`Making Software Feral Since 2022`}
      description="The Code Composition Framework for the misfits, the dropouts, the freaks">
      <HomepageHeader />
        <div className={styles.topFeatures} >
            <div className="row">
                <div className={clsx('col col--4')}>
                    <div className="text--center padding-horiz--md">
                        <h3>ChatGPT or GenAI?</h3>
                        <p>Tune the GenAI solutions doing prompt engineering. Feral CCF is the perfect solution to build a workflow that modifies a prompt by including text in a prompt, modifying a prompt for better results, or including documents with the prompt.</p>
                    </div>
                </div>
                <div className={clsx('col col--4')}>
                    <div className="text--center padding-horiz--md">
                        <h3>Webhooks?</h3>
                        <p>For webhooks, which are essentially HTTP callbacks triggered by specific events, the Feral CCF shines with Symfony's built-in routing mechanism provided by the HTTP bundle. A Feral CCF process can be triggered in a controller and action for a route. Pass any parameters or body information into the context then let the nodes do their thing.</p>
                    </div>
                </div>
                <div className={clsx('col col--4')}>
                    <div className="text--center padding-horiz--md">
                        <h3>APIs?</h3>
                        <p>
                           You can include Feral CCF processes to manage your API functionality. Feral CCF comes with a powerful process modification methood that allows for processes to be tweaked depending on certain criteria. You can have a customized process per customer, vendor, or any other criteria where processes need to be tweaked.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.topFeatures} >
            <div className="row">
                <div className={clsx('col col--4')}>
                    <div className="text--center padding-horiz--md">
                        <h3>Who was Feral built for?</h3>
                        <p>For the past 23 years, people have often questioned my choice of coding in PHP. I must
                            confess that back in 2000, I had a strong desire to code in other languages, so I pursued it and
                            worked extensively with Java, PERL, Javascript, Flex, and other trendy languages at the
                            time. However, despite solving problems various programming options, I consistently found myself
                            building projects using PHP. I started with PHP3, moved through PHP4, 5, 6 (just kidding),
                            and now I'm on PHP8. Throughout my journey, whether at tech conferences, online platforms,
                            or encountering critical managers, I have faced unwarranted criticism for my use of PHP.
                            At this stage of my career, I have grown tired of engaging in programming language debates
                            and just want to offer solutions using a friendly tool.</p>
                    </div>
                    <div className="text--center">
                        <img src='https://www.php.net/images/logos/new-php-logo.svg' width={120} />
                    </div>
                </div>
                <div className={clsx('col col--4')}>
                    <div className="text--center padding-horiz--md">
                        <h3>What is a Code Composition Framework (CCF)?</h3>
                        <p>A code composition framework is a powerful tool that enables developers to efficiently and
                            effectively create and organize code components within a software project. It provides a
                            structured approach to composing complex systems by offering a set of predefined patterns,
                            guidelines, and libraries that promote modularization, reusability, and maintainability.
                            With a code composition framework, developers can focus on assembling individual building
                            blocks, such as functions, classes, or modules, and seamlessly integrate them into a
                            cohesive and scalable application. By facilitating code organization and encouraging best
                            practices, a code composition framework enhances developer productivity, fosters
                            collaboration, and ultimately leads to the development of robust and flexible software
                            solutions.</p>
                    </div>
                </div>
                <div className={clsx('col col--4')}>
                    <div className="text--center padding-horiz--md">
                        <h3>Who should use Feral?</h3>
                        <p>
                            A code composition framework tailored for Symfony is ideally suited for developers who
                            are building web applications or complex software systems using the PHP programming
                            language. Symfony, being a widely adopted PHP framework, provides a solid foundation for
                            developing robust, scalable, and maintainable applications. Therefore, developers who aim
                            to leverage the benefits of Symfony's rich ecosystem and conventions should consider using
                            a code composition framework built specifically for Symfony. This framework empowers
                            Symfony developers by offering pre-defined architectural patterns, libraries, and best
                            practices that facilitate code organization, modularity, and reusability. By utilizing
                            this code composition framework, developers can streamline their development process,
                            enhance code quality, and deliver high-performance Symfony applications.
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
