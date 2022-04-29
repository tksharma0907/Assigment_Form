import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";

type TextProps = FieldValues & TextFieldProps;

const Input = ({ label, id, rules, control }: TextProps) => {
    return (
        <Controller
            name={`textValue_${id}`}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    onChange={onChange}
                    value={value}
                    label={label}
                    required
                    sx={{
                        minWidth: 300,
                        m: 2,
                    }}
                    error={!!error}
                    helperText={error ? error.message : null}
                />
            )}
            rules={rules}
        />
    );
};

export default Input;
