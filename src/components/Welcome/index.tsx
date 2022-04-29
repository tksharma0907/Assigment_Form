import Btn from "@components/Button";
import Label from "@components/Label";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

const wel = {
    text: "Welcome!😊 What are you looking for?",
    button: [
        {
            label: "Lead generation bots",
        },
        {
            label: "Multi-step forms",
        },
        {
            label: "Integration",
        },
    ],
};

const Welcome: React.FC = () => {
    const router = useRouter();

    const { handleSubmit } = useForm({ mode: "onChange" });

    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <Label label={wel.text} />
            <div>
                {wel.button.map((btn) => {
                    return (
                        <Btn
                            label={btn.label}
                            onclick={() => router.push("/Dept")}
                        />
                    );
                })}
            </div>
        </form>
    );
};

export default Welcome;
