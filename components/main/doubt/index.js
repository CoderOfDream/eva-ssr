import Typography from "@material-ui/core/Typography";
import React from "react";
import {useStyles} from "./style";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Image from "next/image";
import DetailsButton from "../../details-button";
import {Animated} from "react-animated-css";

export default function Doubt() {
    const classes = useStyles();
    const {leftSide, rightSide} = useStyles();

    return (
        <>
            <section className={classes.main}>
                <Container maxWidth="md">
                    <Typography component="h3" className={classes.mainTitle}>
                        Nadal wahasz się,
                        <br/>
                        czy EVA Dywaniki są warte swojej ceny ?
                    </Typography>
                    <Grid container spacing={3}>
                        <Box className={leftSide}>
                            <Box display="flex" alignItems="between" justify="space-around" flexDirection="column">
                                <Typography component="h3" className={classes.subTitle}>
                                    Mogę kupić tańszą alternatywę.
                                </Typography>
                                <Typography component="p" className={classes.description}>
                                    Oczywiście że możesz, ale wierzymy, że przyjemność z jakości premium trwa dłużej niż
                                    zachwyt z niskiej ceny. Dobre samochody zasługują na produkty o najwyższej jakości i
                                    funkcjonalności. EVA zapewnia oba zarówno bez wyrzeczeń w stylu, jak i wyglądzie.
                                    Jeśli szukasz dywaników, które przewyższają gumę i welur we wszystkich powyższych
                                    aspektach – EVA Dywaniki to Twój wybór.
                                </Typography>
                            </Box>
                            <Box display="flex" alignItems="between" justify="space-around" flexDirection="column">
                                <Typography component="h3" className={classes.subTitle}>
                                    Co sprawia, że moje dywaniki są gorsze niż te wykonane z EVA ?
                                </Typography>
                                <Typography component="p" className={classes.description}>
                                    Konwencjonalne dywaniki są ciężkie, nie są odporne na zmiany temperatury i w
                                    większości przypadków zachowują się jak wanny przesuwając wodę z boku na bok podczas
                                    ruchu pojazdu. Woda, brud i kurz gromadzą się, wsiąkają w spodnie, brudzą buty.
                                    Gumowe dywaniki twardnieją w niskich temperaturach zimą, a latem śmierdzą. Dywaniki
                                    welurowe, z drugiej strony, są dobre w absorpcji wody i brudu, co zwykle prowadzi do
                                    zapachu wilgoci wewnątrz samochodu. Mycie ich rozwiązuje problem, jednak po 5
                                    czyszczeniach dywanik traci swój oryginalny stylowy wygląd. Natomiast EVA Dywaniki
                                    wykonane z wysokiej jakości materiału Sevilen są lekkie, odporne na wahania
                                    temperatury od -50 °C do +50 °C i nie mają zapachu. Dzięki strukturze plastra miodu
                                    lub rombu o wysokości 8 mm, woda, brud i kurz są trwale przechowywane wewnątrz
                                    komórek, co eliminuje wszelki kontakt z butami. Wreszcie, efekt napięcia
                                    powierzchniowego spowodowany kształtami komórek gwarantuje, że substancje płynne
                                    pozostaną na miejscu niezależnie od wstrząsów, skoków i ciasnych zakrętów, których
                                    może doświadczać Twój samochód.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className={rightSide}>
                            <Box display="flex" alignItems="between" justify="space-around" flexDirection="column">
                                <Typography component="h3" className={classes.subTitle}>
                                    Podaj mi kilka praktycznych faktów dotyczących EVA Dywaników.
                                </Typography>
                                <Typography component="p" className={classes.description}>
                                    Cóż, na przykład, jeden dywanik może pomieścić do 2 litrów wody, bez wlewania jej do
                                    kabiny Twojego samochodu. To samo dotyczy topniejącego śniegu i lodu. Dywaniki
                                    wykonane z materiału EVA są łatwe do czyszczenia. Sprawdź nasze filmy na Instagram
                                    lub Youtube: wyciągnij dywanik z samochodu, wytrząśnij brud (delikatnie uderz go od
                                    tyłu 3-5 razy), a następnie umieść czysty dywanik z powrotem. Ponadto, materiał jest
                                    w stanie wytrzymać temperaturę od -50 do +50 stopni. Wiemy, że klimat w Polskich
                                    regionach może być czasem trudny, ale nasze dywaniki, które urodziły się w samym
                                    sercu Warszawy, są w pełni gotowe, by to wytrzymać.
                                </Typography>
                            </Box>
                            <Box display="flex" alignItems="between" justify="space-around" flexDirection="column">
                                <Typography component="h3" className={classes.subTitle}>
                                    Co się stanie, jeśli otrzymam wadliwy zestaw ?
                                </Typography>
                                <Typography component="p" className={classes.description}>
                                    Wszyscy jesteśmy ludźmi i czasami popełniamy błędy, chociaż staramy się ograniczyć
                                    ich liczbę do minimum. Jeśli jednak otrzymałeś wadliwy zestaw lub zestaw, który źle
                                    mieści się wymiarowo w Twoim samochodzie – po prostu skontaktuj się z nami. Po
                                    sprawdzeniu i potwierdzeniu wady, chętnie wyprodukujemy dla Ciebie nowy zestaw.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </section>
        </>
    )
}
