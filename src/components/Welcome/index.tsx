import Btn from "@components/Button";
import Label from "@components/Label";
import Link from "next/link";
import React from "react";

const wel = {
    text: "Welcome!😊 What are you looking for?",
    button: [
        {
            label: "Lead generation bots",
            link: "/search",
        },
        {
            label: "Multi-step forms",
            link: "/search",
        },
        {
            label: "Integration",
            link: "/search",
        },
    ],
};

const Welcome: React.FC = () => {
    return (
        <form
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <Label label={wel.text} />
            <div>
                {wel.button.map((btn) => {
                    return (
                        <Link href="/Dept">
                            <a style={{ textDecoration: "none" }}>
                                <Btn label={btn.label} />
                            </a>
                        </Link>
                    );
                })}
            </div>
        </form>
    );
};

export default Welcome;
