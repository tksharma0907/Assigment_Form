import React from "react";

type LabelProps = {
    label: string;
};
const Label = ({ label }: LabelProps) => {
    return (
        <>
            <h3>{label}</h3>
        </>
    );
};

export default Label;
