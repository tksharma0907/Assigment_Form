import { Department } from "@components/Department";
import Welcome from "@components/Welcome";
import React from "react";
import Layout from "../src/components/Label";
import Email from "../src/components/Email";

const Home: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                minHeight: "100vh",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* <Layout> */}
            <Welcome />
            {/* <Department /> */}
            {/* <Email /> */}
            {/* </Layout> */}
        </div>
    );
};

export default Home;
