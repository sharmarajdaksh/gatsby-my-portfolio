import React, { useRef } from "react"

import Head from "../shared/Head"
import homeStyles from "./Home.module.scss"
import developerOnDeskSVG from "../assets/svg/coder_on_desk.svg"
import frontendSVG from "../assets/svg/frontend_development.svg"
import backendSVG from "../assets/svg/backend_development.svg"
import devopsSVG from "../assets/svg/devops_server.svg"
import reactSVG from "../assets/svg/react.svg"
import angularSVG from "../assets/svg/angular.svg"
import vueSVG from "../assets/svg/vue.svg"
import djangoSVG from "../assets/svg/django.svg"
import goSVG from "../assets/svg/go.svg"
import nodeSVG from "../assets/svg/nodejs.svg"
import mongoSVG from "../assets/svg/mongodb.svg"
import mysqlSVG from "../assets/svg/mysql.svg"
import apacheSVG from "../assets/svg/apache.svg"
import nginxSVG from "../assets/svg/nginx.svg"
import awsSVG from "../assets/svg/aws.svg"
import terraformSVG from "../assets/svg/terraform.svg"
import travisSVG from "../assets/svg/travis.svg"
import jenkinsSVG from "../assets/svg/jenkins.svg"
import gitSVG from "../assets/svg/git.svg"
import resumePDF from "../assets/pdf/webdev-resume.pdf"
import Layout from "./layout/Layout"

export default () => {
    const secRef = useRef(null)
    const contactRef = useRef(null)

    const scrollDown = (e, ref) => {
        e.preventDefault()
        ref.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }

    return (
        <Layout>
            <Head title="Home" />
            <section className={homeStyles.landing}>
                <div className={homeStyles.landing__content}>
                    <h2>
                        Hi there! I'm <br />
                        <span>Dakshraj Sharma </span> <br />I do fullstack web
                        development
                    </h2>
                </div>
                <div>
                    <img
                        src={developerOnDeskSVG}
                        className={homeStyles.landing__svg}
                        alt="A developer on a desk"
                    />
                </div>
                <div className={homeStyles.landing__content}>
                    <p>
                        From the frontend to the backend to the cloud — I can do
                        it all. Take a look around to learn what I've been up
                        to, read my blog, or{" "}
                        <strong>
                            <a
                                href={contactRef}
                                onClick={e => scrollDown(e, contactRef)}
                            >
                                get in touch
                            </a>
                        </strong>
                        . <br />
                    </p>
                    <br />
                    <div>
                        <a
                            href={secRef}
                            onClick={e => scrollDown(e, secRef)}
                            className={homeStyles.button}
                        >
                            Learn More
                        </a>
                        <a
                            href={resumePDF}
                            className={[
                                homeStyles.landing__content__resumebutton,
                                homeStyles.button,
                            ].join(" ")}
                            download="Dakshraj Sharma"
                        >
                            My Resume
                        </a>
                    </div>
                </div>
            </section>
            <FrontendSection secref={secRef} />
            <BackendSection />
            <DevOpsSection />
            <OtherThingsSection />
            <AboutMeSection contactRef={contactRef} />
        </Layout>
    )
}

const FrontendSection = ({ secref }) => {
    return (
        <section ref={secref} className={homeStyles.frontend}>
            <h3>Frontend Development</h3>
            <div className={homeStyles.hr}></div>

            <p>
                Skilled in HTML/CSS/JS, the basic building blocks of the
                internet's pretty frontend, I use my skills to provider
                interactive, user-friendly interfaces.
            </p>
            <div>
                <img
                    src={frontendSVG}
                    className={homeStyles.landing__svg}
                    alt="Frontend Development"
                />
            </div>
            <p>
                Javascript is the godfather of the web, and I love Javascript.
                Over the last years I have taught myself{" "}
                <strong>
                    <a
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React
                    </a>
                </strong>
                ,{" "}
                <strong>
                    <a
                        href="https://angular.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Angular
                    </a>
                </strong>
                , and{" "}
                <strong>
                    <a
                        href="https://vuejs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vue
                    </a>
                </strong>
                , the big boys in the frontend development scene.
            </p>
            <div className={homeStyles.skillSVGs}>
                <div className={homeStyles.row}>
                    <img
                        src={reactSVG}
                        className={homeStyles.tech__svg}
                        alt="React"
                    />
                    <img
                        src={angularSVG}
                        className={homeStyles.tech__svg}
                        alt="Angular"
                    />
                    <img
                        src={vueSVG}
                        className={homeStyles.tech__svg}
                        alt="Vue"
                    />
                </div>
            </div>
            <p>
                These days, I've been dabbling with{" "}
                <strong>
                    {" "}
                    <a
                        href="https://www.gatsbyjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Gatsby
                    </a>
                </strong>{" "}
                (This site is, in fact, build with Gatsby!). I wish also to soon
                work with
                <strong>
                    {" "}
                    <a
                        href="https://gridsome.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Gridsome
                    </a>
                </strong>
                . Another thing I've been wanting to try out are SSR frameworks
                like{" "}
                <strong>
                    <a
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Next.JS
                    </a>
                </strong>{" "}
                with React and{" "}
                <strong>
                    <a
                        href="https://nuxtjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        NuxtJS
                    </a>
                </strong>{" "}
                with Vue.
            </p>
        </section>
    )
}

const BackendSection = () => {
    return (
        <section
            className={[homeStyles.frontend, homeStyles.backend].join(" ")}
        >
            <h3>Backend Development</h3>
            <div className={homeStyles.hr}></div>

            <p>
                Limiting myself to the frontend could not ever have been enough
                for me and no I had to venture into the darker end of the web,
                the <strong>back end</strong>. I am well familiar with
                traditional HTML-serving web server development, REST API
                development, and architecture patterns like MVC.
            </p>
            <div>
                <img
                    src={backendSVG}
                    className={homeStyles.landing__svg}
                    alt="Backend Development"
                />
            </div>
            <p>
                I have worked with API and server side development with{" "}
                <strong>
                    <a
                        href="https://nodejs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        NodeJS
                    </a>{" "}
                </strong>
                as well as{" "}
                <strong>
                    <a
                        href="https://www.djangoproject.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Django
                    </a>
                </strong>
                . Some time back, I learnt about modern, large-scale
                architectures and how microservice architectures are changing
                the game in modern web development, and of course that led me to
                dirty my hands with{" "}
                <strong>
                    <a
                        href="https://golang.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Go
                    </a>
                </strong>
                . Of course working with databases is essential in backend
                development. I have a decent hold on the concepts of SQL and
                NoSQL databases, having worked with{" "}
                <strong>
                    {" "}
                    <a
                        href="https://dev.mysql.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MySQL
                    </a>
                </strong>{" "}
                and{" "}
                <strong>
                    {" "}
                    <a
                        href="https://www.mongodb.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MongoDB
                    </a>
                </strong>{" "}
                in several small projects and apps.{" "}
            </p>
            <div className={homeStyles.skillSVGs}>
                <div className={homeStyles.row}>
                    <img
                        src={nodeSVG}
                        className={homeStyles.tech__svg}
                        alt="NodeJS"
                    />
                    <img
                        src={goSVG}
                        className={homeStyles.tech__svg}
                        alt="Go"
                    />
                    <img
                        src={djangoSVG}
                        className={homeStyles.tech__svg}
                        alt="Django"
                    />
                </div>
                <div className={homeStyles.row}>
                    <img
                        src={mongoSVG}
                        className={homeStyles.tech__svg}
                        alt="MongoDB"
                    />
                    <img
                        src={mysqlSVG}
                        className={homeStyles.tech__svg}
                        alt="MySQL"
                    />
                </div>
            </div>
            <p>
                These days I have been hooked on the microservices and how large
                companies like Netflix and Spotify are changing the way backends
                are creaated with extreme scalability and availability. Learning
                of about these also led me to learn about new technologies like{" "}
                <strong>
                    {" "}
                    <a
                        href="https://cassandra.apache.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Apache Cassandra
                    </a>
                </strong>{" "}
                and new concepts such as the usage of messaging queues like{" "}
                <strong>
                    {" "}
                    <a
                        href="https://kafka.apache.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Apache Kafka
                    </a>
                </strong>
                . I haven't work with these, but I plan to try using them soon.
            </p>
        </section>
    )
}

const DevOpsSection = () => {
    return (
        <section className={homeStyles.frontend}>
            <h3>DevOps</h3>
            <div className={homeStyles.hr}></div>

            <p>
                By complete chance, I landed in a <strong>DevOps</strong>{" "}
                internship which introduced my to things I had never been aware
                of. As a result, I can now claim complete comfort working in the
                command line with{" "}
                <strong>
                    {" "}
                    <a
                        href="https://www.linux.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Linux
                    </a>
                </strong>
                ,{" "}
                <strong>
                    {" "}
                    <a
                        href="https://git-scm.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Git
                    </a>
                </strong>
                intermediate system and database administration, as well as
                setting up complete working servers on{" "}
                <strong>
                    {" "}
                    <a
                        href="https://aws.amazon.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        AWS
                    </a>
                </strong>{" "}
                using{" "}
                <strong>
                    {" "}
                    <a
                        href="https://httpd.apache.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Apache
                    </a>
                </strong>
                ,{" "}
                <strong>
                    {" "}
                    <a
                        href="https://www.nginx.com/welcome-to-nginx/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Nginx
                    </a>
                </strong>
                , and{" "}
                <strong>
                    {" "}
                    <a
                        href="https://www.haproxy.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        HAProxy
                    </a>
                </strong>
                .
            </p>
            <div>
                <img
                    src={devopsSVG}
                    className={homeStyles.landing__svg}
                    alt="DevOps"
                />
            </div>
            <p>
                I also got to learn about CI/CD methodologies and working with
                tools like{" "}
                <strong>
                    <a
                        href="https://www.jenkins.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Jenkins
                    </a>
                </strong>
                {", "}
                <strong>
                    <a
                        href="https://nodejs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Terraform
                    </a>
                </strong>
                {", "}and monitoring tools like{" "}
                <strong>
                    <a
                        href="https://www.nagios.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Nagios
                    </a>
                </strong>
                . I also have worked with{" "}
                <strong>
                    <a
                        href="https://travis-ci.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Travis CI
                    </a>
                </strong>
                . In fact, this pages uses Travis CI for automated deployments
                on code push to its remote repository on Github.
            </p>
            <div className={homeStyles.skillSVGs}>
                <div className={homeStyles.row}>
                    <img
                        src={awsSVG}
                        className={homeStyles.tech__svg}
                        alt="AWS"
                    />
                    <img
                        src={gitSVG}
                        className={homeStyles.tech__svg}
                        alt="Git"
                    />
                    <img
                        src={terraformSVG}
                        className={homeStyles.tech__svg}
                        alt="Terraform"
                    />
                </div>
                <div className={homeStyles.row}>
                    <img
                        src={apacheSVG}
                        className={homeStyles.tech__svg}
                        alt="Apache HTTP Server"
                    />
                    <img
                        src={nginxSVG}
                        className={homeStyles.tech__svg}
                        alt="Nginx"
                    />
                </div>
                <div className={homeStyles.row}>
                    <img
                        src={travisSVG}
                        className={homeStyles.tech__svg}
                        alt="Travis CI"
                    />

                    <img
                        src={jenkinsSVG}
                        className={homeStyles.tech__svg}
                        alt="Jenkins"
                    />
                </div>
            </div>
            <p>
                You won't be lying to say that I have barely scraped the surface
                as far as DevOps goes, and I can't say you're wrong. But I
                believe I have gained a firm grasp over concepts which
                developers tend to often be completely unaware of and have now a
                firm foundation in the field to build upon. At least, I know
                enough to be able to launch a fullstack application completely
                by myself. Among other things I want to try out{" "}
                <strong>
                    {" "}
                    <a
                        href="https://circleci.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CircleCI
                    </a>
                </strong>
                {", "}
                which I haven't been able to try out yet. Also I want to achieve
                basic working knowledge of the{" "}
                <strong>
                    {" "}
                    <a
                        href="https://cloud.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Google Cloud Platform
                    </a>
                </strong>
                , it being the most popular alternative to AWS.
            </p>
        </section>
    )
}

const OtherThingsSection = () => {
    return (
        <section
            className={[homeStyles.frontend, homeStyles.backend].join(" ")}
        >
            <h3>Other Things</h3>
            <div className={homeStyles.hr}></div>

            <p>
                I understand that web development isn't everything there is in
                Software Development today, and so I've also tried to learn new
                things on the side. I never got the hand of native Android
                Development but{" "}
                <strong>
                    {" "}
                    <a
                        href="https://flutter.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Flutter
                    </a>
                </strong>{" "}
                definitely attracted me, and I can call myself a beginner with
                it. Given by appreciation for React,{" "}
                <strong>
                    {" "}
                    <a
                        href="https://reactnative.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React Native
                    </a>
                </strong>{" "}
                also does appear promising.
            </p>
            <p>
                I also like to do some competitive programming with{" "}
                <strong>C++</strong>, although I'm not too good. But I practice,
                so I'll get better, no worries.
            </p>
            <p>
                Then there are also Machine Learning and Deep Learning changing
                the world today. I've actually worked a bit with{" "}
                <strong>
                    {" "}
                    <a
                        href="https://www.tensorflow.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Tensorflow
                    </a>
                </strong>{" "}
                and{" "}
                <strong>
                    {" "}
                    <a
                        href="https://www.fast.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        fast.ai
                    </a>
                </strong>{" "}
                using Python, including a project for controlling video playback in a browser using web (Yup, it was pretty cool). The possibilities with ML and DL are endless, and
                I want to soon try out integrating them into webapps.
            </p>
        </section>
    )
}

const AboutMeSection = ({ contactRef }) => {
    return (
        <section ref={contactRef} className={homeStyles.frontend}>
            <h3>About Me</h3>
            <div className={homeStyles.hr}></div>

            <p>
                By complete chance, I landed in a <strong>DevOps</strong>{" "}
                internship which introduced my to things I had never been aware
                of. As a result, I can now claim complete comfort working in the
                command line with{" "}
                <strong>
                    {" "}
                    <a
                        href="https://www.linux.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Linux
                    </a>
                </strong>
                ,{" "}
                <strong>
                    {" "}
                    <a
                        href="https://git-scm.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Git
                    </a>
                </strong>
                intermediate system and database administration, as well as
                setting up complete working servers on{" "}
                <strong>
                    {" "}
                    <a
                        href="https://aws.amazon.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        AWS
                    </a>
                </strong>{" "}
                using{" "}
                <strong>
                    {" "}
                    <a
                        href="https://httpd.apache.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Apache
                    </a>
                </strong>
                ,{" "}
                <strong>
                    {" "}
                    <a
                        href="https://www.nginx.com/welcome-to-nginx/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Nginx
                    </a>
                </strong>
                , and{" "}
                <strong>
                    {" "}
                    <a
                        href="https://www.haproxy.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        HAProxy
                    </a>
                </strong>
                .
            </p>
            <div>
                <img
                    src={devopsSVG}
                    className={homeStyles.landing__svg}
                    alt="DevOps"
                />
            </div>
            <p>
                I also got to learn about CI/CD methodologies and working with
                tools like{" "}
                <strong>
                    <a
                        href="https://www.jenkins.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Jenkins
                    </a>
                </strong>
                {", "}
                <strong>
                    <a
                        href="https://nodejs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Terraform
                    </a>
                </strong>
                {", "}and monitoring tools like{" "}
                <strong>
                    <a
                        href="https://www.nagios.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Nagios
                    </a>
                </strong>
                . I also have worked with{" "}
                <strong>
                    <a
                        href="https://travis-ci.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Travis CI
                    </a>
                </strong>
                . In fact, this pages uses Travis CI for automated deployments
                on code push to its remote repository on Github.
            </p>
            <div className={homeStyles.skillSVGs}>
                <div className={homeStyles.row}>
                    <img
                        src={awsSVG}
                        className={homeStyles.tech__svg}
                        alt="AWS"
                    />
                    <img
                        src={gitSVG}
                        className={homeStyles.tech__svg}
                        alt="Git"
                    />
                    <img
                        src={terraformSVG}
                        className={homeStyles.tech__svg}
                        alt="Terraform"
                    />
                </div>
                <div className={homeStyles.row}>
                    <img
                        src={apacheSVG}
                        className={homeStyles.tech__svg}
                        alt="Apache HTTP Server"
                    />
                    <img
                        src={nginxSVG}
                        className={homeStyles.tech__svg}
                        alt="Nginx"
                    />
                </div>
                <div className={homeStyles.row}>
                    <img
                        src={travisSVG}
                        className={homeStyles.tech__svg}
                        alt="Travis CI"
                    />

                    <img
                        src={jenkinsSVG}
                        className={homeStyles.tech__svg}
                        alt="Jenkins"
                    />
                </div>
            </div>
            <p>
                You won't be lying to say that I have barely scraped the surface
                as far as DevOps goes, and I can't say you're wrong. But I
                believe I have gained a firm grasp over concepts which
                developers tend to often be completely unaware of and have now a
                firm foundation in the field to build upon. At least, I know
                enough to be able to launch a fullstack application completely
                by myself. Among other things I want to try out{" "}
                <strong>
                    {" "}
                    <a
                        href="https://circleci.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CircleCI
                    </a>
                </strong>
                {", "}
                which I haven't been able to try out yet. Also I want to achieve
                basic working knowledge of the{" "}
                <strong>
                    {" "}
                    <a
                        href="https://cloud.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Google Cloud Platform
                    </a>
                </strong>
                , it being the most popular alternative to AWS.
            </p>
        </section>
    )
}
