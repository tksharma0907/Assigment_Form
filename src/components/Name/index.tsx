import React from "react";
import Label from "../Label";
import Input from "../Input";
import Btn from "../Button";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Name = () => {
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
                    label={"Could you tell us a bit more about your self?"}
                />
                <Input label={"First name"} id={"Email"} control={control} />
                <Input label={"Last name"} id={"Phone"} control={control} />
                <Link href={"/company"}>
                    <a style={{ textDecoration: "none" }}>
                        <Btn label={"Next"} />
                    </a>
                </Link>
            </form>
        </>
    );
};

export default Name;
