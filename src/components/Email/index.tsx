import { setContactEmail, setContactPhoneNo } from "@redux/actions";
import { useAppSelector } from "@redux/store";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Btn from "../Button";
import Input from "../Input";
import Label from "../Label";

const Email = () => {
    const dispatch = useDispatch();
    const persistData = useAppSelector((state) => state.email);
    const { control, handleSubmit, setValue, watch } = useForm({
        mode: "onChange",
    });

    const fillData = () => {
        setValue("textValue_Email", persistData?.textValue_Email);
        setValue("textValue_Phone", persistData?.textValue_Phone);
    };
    const router = useRouter();
    useEffect(() => {
        fillData();
    }, []);

    const watchItem = watch();
    useEffect(() => {
        if (Object.keys(watchItem).length > 0) {
            dispatch(setContactEmail(watchItem?.textValue_Email));
            dispatch(setContactPhoneNo(watchItem?.textValue_Phone));
        }
    }, [watchItem]);

    return (
        <>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <Label
                    label={
                        "What is the email and phone number that we can reach you the best"
                    }
                />
                <Input
                    label={"Email"}
                    id={"Email"}
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: "Field is required",
                        },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Invalid email address",
                        },
                    }}
                />
                <Input
                    label={"Phone"}
                    id={"Phone"}
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: "Field is required",
                        },
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Invalid phone number",
                        },
                    }}
                />
                <Btn label={"Next"} onclick={() => router.push("/name")} />
            </form>
        </>
    );
};

export default Email;
