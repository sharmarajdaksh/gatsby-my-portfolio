import React from "react"

import Head from "../shared/Head"
import homeStyles from "./Home.module.scss"
import developerOnDeskSVG from "../assets/svg/coder_on_desk.svg"
import Layout from "./layout/Layout"


export default () => {
    return (
        <Layout>
            <Head title="Home" />
            <section className={homeStyles.landing}>
                <div className={homeStyles.landing__content}>
                    <h2>
                        Hiya there! I'm <br />
                        <span>Dakshraj Sharma </span>
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
                        Simple is beautiful. 
                    </p>
                </div>
            </section>
            {/* <section className="skills">
                    <h2>
                        What do I do?
                    </h2>
                    <section>
                        <h3>Frontend Development</h3>
                    </section>
                    <section>
                        <h3>Backend Development</h3>
                    </section>
                    <section>
                        <h3>Devops Essentials</h3>
                    </section>
                </section> */}
        </Layout>
    )
}
