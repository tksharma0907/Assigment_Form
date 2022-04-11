import React from "react";
import { Button } from "@mui/material";

type BtnProps = {
    label: string;
};
const Btn = ({ label }: BtnProps) => {
    return (
        <>
            <Button
                type="submit"
                variant="contained"
                sx={{
                    minWidth: 300,
                    display: "flex",
                    m: 2,
                }}
            >
                {label}
            </Button>
        </>
    );
};

export default Btn;
