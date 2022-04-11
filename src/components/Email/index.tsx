import React from "react";
import Label from "../Label";
import Input from "../Input";
import Btn from "../Button";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Email = () => {
    const { control, handleSubmit } = useForm();
    return (
        <>
            <form
                onSubmit={handleSubmit((data) => console.log(data))}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                }}
            >
                <Label
                    label={
                        "What is the email and phone number that we can reach you the best"
                    }
                />
                <Input label={"Email"} id={"Email"} control={control} />
                <Input label={"Phone"} id={"Phone"} control={control} />
                <Link href={"/name"}>
                    <a style={{ textDecoration: "none" }}>
                        <Btn label={"Next"} />
                    </a>
                </Link>
            </form>
        </>
    );
};

export default Email;
