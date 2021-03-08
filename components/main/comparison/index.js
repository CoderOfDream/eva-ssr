import ReactCompareImage from 'react-compare-image';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";

export default function Comparison() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container className={classes.containerGrid}>
        <Grid item sm={4}>
          <ReactCompareImage leftImage="/main/compare/1.jpg" rightImage="/main/compare/2.jpg"/>;
        </Grid>
        <Grid item sm={4} className={classes.mainContainer}>
          <Typography className={classes.mainTitle} component="h2">
            Porównaj swój dywanik samochodowy z dywanikiem EVA
          </Typography>
          <p>Move the slider</p>
        </Grid>
        <Grid item sm={4}><ReactCompareImage leftImage="/main/compare/3.jpg" rightImage="/main/compare/4.jpg"/>;
        </Grid>
      </Grid>
    </Container>
  )
}