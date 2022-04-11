import React from "react";
import Label from "../Label";
import Input from "../Input";
import Btn from "../Button";
import { useForm } from "react-hook-form";

const Company = () => {
    const { control, handleSubmit } = useForm();

    return (
        <>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                }}
                onSubmit={handleSubmit((data) => console.log(data))}
            >
                <Label
                    label={"Thanks! 😊Just a few more details and we are done!"}
                />
                <Input
                    label={"Company name"}
                    id={"Company"}
                    control={control}
                    // rules={{ required: true }}
                />
                <Input label={"Job title"} id={"Job"} control={control} />
                <Btn label={"Request demo"} />
            </form>
        </>
    );
};

export default Company;
