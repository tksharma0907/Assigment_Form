import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";

type CardProp = {
    children: any;
};

const Card = ({ children }: CardProp) => {
    const router = useRouter();

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                }}
            >
                <div
                    style={{
                        width: "325px",
                        padding: "20px",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                        boxShadow:
                            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            width: "325px",
                            justifyContent: "space-between",
                        }}
                    >
                        <IconButton
                            aria-label="delete"
                            onClick={() => router.back()}
                        >
                            <ArrowBackIosIcon />
                        </IconButton>

                        <IconButton
                            aria-label="delete"
                            onClick={() => alert("cross Clicked")}
                        >
                            <ClearIcon />
                        </IconButton>
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Card;
