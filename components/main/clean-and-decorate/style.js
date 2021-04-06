import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    mainTitle: {
        color: "#262626",
        fontFamily: "Montserrat, Sans-serif",
        fontSize: "24px",
        fontWeight: 800,
        lineHeight: "25px",
        marginTop: "40px",
        paddingLeft: "15px"
    },
    description: {
        color: "rgba(2, 1, 1, 0.86)",
        fontFamily: "Montserrat, Sans-serif",
        fontSize: "14px",
        fontWeight: 400,
        margin: "73px 0 93px 0",
        lineHeight: "1.8",
        "@media (max-width: 900px)": {
            width: "100%"
        },
    },
    main: {
        backgroundImage: `url(./main/background.png)`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        marginTop: "121px",
        backgroundAttachment: "fixed",
    },
    leftBlock: {
        padding: "15px",
        minWidth: "624px"
    },
    rightBlock: {},
    wrapper: {
        display: "flex",
    },
    button: {
        marginLeft: "12px",
        marginTop: "56px"
    }
}))