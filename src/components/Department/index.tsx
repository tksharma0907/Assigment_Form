import Link from "next/link";
import Btn from "../Button";
import Label from "../Label";

const data = {
    text: "Great! What department do you work in?",
    button: [
        {
            label: "Marketing",
        },
        {
            label: "Sales",
        },
        {
            label: "Customer service",
        },
    ],
};

const Department: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <Label label={data.text} />
            <div>
                {data.button.map((btn: { label: string }) => {
                    return (
                        <Link href={"/email"}>
                            <a style={{ textDecoration: "none" }}>
                                <Btn label={btn.label} />
                            </a>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export { Department };
