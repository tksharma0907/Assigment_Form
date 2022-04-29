import React from "react";

type LabelProps = {
    label: string;
};
const Label = ({ label }: LabelProps) => {
    return (
        <>
            <h3
                style={{
                    marginLeft: "15px",
                    width: "320px",
                }}
            >
                {label}
            </h3>
        </>
    );
};

export default Label;
