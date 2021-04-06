import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    main: {
        background: "rgba(239,233,213,0.37)",
        marginTop: "24px",
    },
    mainTitle: {
        color: "#262626",
        fontFamily: "Montserrat, Sans-serif",
        fontSize: "34px",
        fontWeight: 800,
        marginTop: "26px",
        padding: "71px 30px 60px 30px",
        lineHeight: "1.3"
    },
    description: {
        padding: "22px",
        color: "rgba(2, 1, 1, 0.86)",
        fontFamily: "Montserrat, Sans-serif",
        fontSize: "14px",
        fontWeight: 400,
        margin: "0",
        lineHeight: "1.8",
        "@media (max-width: 900px)": {
            width: "100%"
        },
    },
    subTitle: {
        fontSize: "24px",
        padding: "8px 0 0 22px",
        fontFamily: "Montserrat, Sans-serif",
        fontWeight: 700,
        color: "#0c0c0c"
    },
    leftSide: {
        width: "57%",
    },
    rightSide: {
        width: "43%"
    }
}))