import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
    return (
        <>
            <Layout pageTitle="Home Page">
                <p>I'm making this by following the Gatsby Tutorial.</p>
                <StaticImage
                    alt="Clifford"
                    src="../images/wallpapersden.com_hatsune-miku-half-mask_2389x1571.jpg"
                />
            </Layout>
        </>
    );
};

export default IndexPage;
