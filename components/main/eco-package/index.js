// import Typography from "@material-ui/core/Typography";
// import React from "react";
// import { useStyles } from "./style";
// import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import Image from "next/image";
// import { Animated } from "react-animated-css";
//
// export default function EcoPackage() {
//   const classes = useStyles();
//
//   return (
//     <>
//       <Container maxWidth="md">
//         <Grid container spacing={3}>
//           <Grid container item xs={12} sm={6} justify="center">
//             <Box style={{ margin: "15px 0 0 0" }}>
//               <Image
//                 src="/main/EVAISECO.png"
//                 width={239}
//                 height={343}
//                 alt="eco package"
//               />
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Box display="flex" alignItems="between" justify="space-around" flexDirection="column" height="100%">
//               <Animated animationIn="fadeInRight" duration={1300} isVisible={true}>
//                 <Typography component="h1" className={classes.mainTitle}>
//                   Używamy tylko Ekologicznego Opakowania
//                 </Typography>
//               </Animated>
//               <Typography component="p" className={classes.description}>
//                 Firma EVA Dywaniki chce zmniejszyć wpływ swoich opakowań na środowisko i pomóc klientom w dokonywaniu
//                 bardziej zrównoważonych wyborów. Opakowanie, które używamy do pakowania każdego zamówienia, a także
//                 większość materiałów eksploatacyjnych wykorzystywanych podczas procesu produkcyjnego są recyklingowane
//                 lub ekologiczne. Odzwierciedla to nasze wartości i wizję dotyczącą przyszłości, ponieważ dążenie do
//                 bycia przyjaznymi środowisku jest najmniejsze co możemy zrobić dla naszej Planety.
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   )
// }
import Typography from "@material-ui/core/Typography";
import React from "react";
import {useStyles} from "./style";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Image from "next/image";
import DetailsButton from "../../details-button";
import {Animated} from "react-animated-css";

export default function QualityOfMaterials() {
    const classes = useStyles();

    return (
        <>
            <section style={{margin: "100px 0 60px 0"}} className={classes.main}>
                <Container maxWidth="md" style={{marginTop: "128px"}}>
                    <Grid container spacing={3}>
                        <Grid container item xs={12} sm={5} display="flex" justify="center">
                            <Box style={{marginLeft: "43px"}}>
                                <Image
                                    src="/main/EVAISECO.png"
                                    width={239}
                                    height={343}
                                    alt="eco package"
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Box display="flex" alignItems="between" justify="space-around" flexDirection="column"
                                 height="100%">
                                <Typography component="h1" className={classes.mainTitle}>
                                    Używamy tylko Ekologicznego Opakowania
                                </Typography>
                                <Typography component="p" className={classes.description}>
                                    Firma EVA Dywaniki chce zmniejszyć wpływ swoich opakowań na środowisko i pomóc
                                    klientom w dokonywaniu
                                    bardziej zrównoważonych wyborów. Opakowanie, które używamy do pakowania każdego
                                    zamówienia, a także
                                    większość materiałów eksploatacyjnych wykorzystywanych podczas procesu produkcyjnego
                                    są recyklingowane
                                    lub ekologiczne. Odzwierciedla to nasze wartości i wizję dotyczącą przyszłości,
                                    ponieważ dążenie do
                                    bycia przyjaznymi środowisku jest najmniejsze co możemy zrobić dla naszej Planety.
                                </Typography>
                                <Animated animationIn="fadeInUp" duration={1300} isVisible={true}>
                                </Animated>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            {/*<Container maxWidth="md">*/}
            {/*    <Grid container spacing={0}>*/}
            {/*        <div container item xs={12} sm={5} justify="center" style={{padding: "0"}}>*/}
            {/*            <Box style={{marginRight: "32px"}}>*/}
            {/*                <Image src="/main/car-mats.jpg" width={383} height={383} alt="Quality of Materials"*/}
            {/*                       style={{margin: "0 auto"}}/>*/}
            {/*            </Box>*/}
            {/*        </div>*/}
            {/*        <Grid container item xs={12} sm={7}>*/}
            {/*            <Box display="flex" alignItems="between" justify="space-around" flexDirection="column"*/}
            {/*                 height="100%">*/}
            {/*                <Typography component="h1" className={classes.mainTitle} style={{marginTop: "0"}}>*/}
            {/*                    Idealnie dopasowane dywaniki*/}
            {/*                </Typography>*/}
            {/*                <Typography component="p" className={classes.description} style={{marginTop: "53px"}}>*/}
            {/*                    Wszystkie szablony podłóg samochodowych zbieramy sami, aby zapewnić jak najlepsze*/}
            {/*                    dopasowanie naszych*/}
            {/*                    dywaników. Odpowiednio dobrane dywaniki wykonane z najwyższej jakości materiału nie*/}
            {/*                    tylko dobrze*/}
            {/*                    wyglądają, ale w pełni wykorzystują swoje właściwości użytkowe, co gwarantuje pełną*/}
            {/*                    ochronę podłogi*/}
            {/*                    przed wodą, brudem i kurzem.*/}
            {/*                </Typography>*/}
            {/*            </Box>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*</Container>*/}
            <style jsx global>{`
    .qualityImage {
      padding: 3px 25px 59px 0px !important
    }
  `}</style>
        </>
    )
}
