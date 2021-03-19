import Container from "@material-ui/core/Container";
import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  mainTitle: {
    color: "#0C0C0C",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "28px",
    fontWeight: 800,
    margin: "50px 0",
    "@media (max-width: 900px)": {
      textAlign: "center"
    }
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  dropdownClass: {
    // width: "100% !important",
    height: "140px !important"
  },
  inputClass: {
    width: "100% !important",
    height: "56px !important"
  }
}));

export default function ContactUs() {
  const classes = useStyles();

  function handleOnChange(e) {
    console.log(e)
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" className={classes.mainTitle}>
            Оставить заявку
          </Typography>
          <Typography component="p" style={{textAlign: "center"}}>
            Оставить свои контктные данные в форме ниже
            и мы свяжемся с вами и подберем коврики под нужную модель
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Как к вам обращаться?"
            />
            <PhoneInput
              country={'ua'}
              onChange={handleOnChange}
              dropdownClass={classes.dropdownClass}
              inputClass={classes.inputClass}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Марка автомобиля"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{background: "#990000"}}
              className={classes.submit}>
              Заказать коврик EVA
            </Button>    
          </form>
        </div>
      </Container>
    </>
  )
}
