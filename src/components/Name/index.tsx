import { setNameFirst, setNameLast } from "@redux/actions";
import { useAppSelector } from "@redux/store";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Btn from "../Button";
import Input from "../Input";
import Label from "../Label";

const Name = () => {
    const dispatch = useDispatch();
    const persistData = useAppSelector((state) => state.email);

    const { control, handleSubmit, setValue, watch } = useForm({
        mode: "onChange",
    });
    const router = useRouter();

    const fillData = () => {
        setValue("textValue_F_Name", persistData?.textValue_F_Name);
        setValue("textValue_L_Name", persistData?.textValue_L_Name);
    };
    useEffect(() => {
        fillData();
    }, []);

    const watchItem = watch();
    useEffect(() => {
        if (Object.keys(watchItem).length > 0) {
            dispatch(setNameFirst(watchItem?.textValue_F_Name));
            dispatch(setNameLast(watchItem?.textValue_L_Name));
        }
    }, [watchItem]);

    return (
        <>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <Label
                    label={"Could you tell us a bit more about your self?"}
                />
                <Input
                    label={"First name"}
                    id={"F_Name"}
                    control={control}
                    rules={{
                        required: { value: true, message: "Field is required" },
                    }}
                />
                <Input
                    label={"Last name"}
                    id={"L_Name"}
                    control={control}
                    rules={{
                        required: { value: true, message: "Field is required" },
                    }}
                />
                <Btn label={"Next"} onclick={() => router.push("/company")} />
            </form>
        </>
    );
};

export default Name;
