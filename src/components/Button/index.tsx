import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { purple } from "@mui/material/colors";

type BtnProps = {
    label: string;
    onclick?: any;
};
const Btn = ({ label, onclick }: BtnProps) => {
    return (
        <>
            <Button
                style={{
                    borderRadius: "20px",
                    backgroundColor: purple[500],
                }}
                type="submit"
                onClick={onclick}
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
