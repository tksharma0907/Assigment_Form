import { setCompanyJob, setCompanyName } from "@redux/actions";
import { useAppSelector } from "@redux/store";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Btn from "../Button";
import Input from "../Input";
import Label from "../Label";

const Company = () => {
    const { control, handleSubmit, setValue, watch } = useForm({
        mode: "onChange",
    });
    const dispatch = useDispatch();
    const persistData = useAppSelector((state) => state.email);
    const fillData = () => {
        setValue("textValue_Company", persistData?.textValue_Company);
        setValue("textValue_Job", persistData?.textValue_Job);
    };

    useEffect(() => {
        fillData();
    }, []);
    const watchItem = watch();

    useEffect(() => {
        if (Object.keys(watchItem).length > 0) {
            dispatch(setCompanyName(watchItem?.textValue_Company));
            dispatch(setCompanyJob(watchItem?.textValue_Job));
        }
    }, [watchItem]);

    return (
        <>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <Label
                    label={"Thanks! 😊Just a few more details and we are done!"}
                />
                <Input
                    label={"Company name"}
                    id={"Company"}
                    control={control}
                    rules={{
                        required: { value: true, message: "Field is required" },
                    }}
                />
                <Input
                    label={"Job title"}
                    id={"Job"}
                    control={control}
                    rules={{
                        required: { value: true, message: "Field is required" },
                    }}
                />
                <Btn label={"Request demo"} />
            </form>
        </>
    );
};

export default Company;
