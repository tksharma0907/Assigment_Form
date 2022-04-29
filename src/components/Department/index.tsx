import Link from "next/link";
import Btn from "../Button";
import Label from "../Label";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

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
    const router = useRouter();
    const { control, handleSubmit } = useForm({ mode: "onChange" });

    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <Label label={data.text} />
            <div>
                {data.button.map((btn: { label: string }) => {
                    return (
                        <Btn
                            label={btn.label}
                            onclick={() => router.push("/email")}
                        />
                    );
                })}
            </div>
        </form>
    );
};

export { Department };
