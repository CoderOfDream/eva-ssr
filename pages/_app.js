import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {ThemeProvider} from '@material-ui/core/styles';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import "../src/styles.sass"
import NProgress from 'next-nprogress-emotion';
import theme from '../src/theme';
import Header from "../components/header";

export const cache = createCache({key: 'css', prepend: true});

export default function MyApp(props) {
    const {Component, pageProps} = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);


    return (

        <CacheProvider value={cache}>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
            </Head>
            <ThemeProvider theme={theme}>
                <Header/>
                <NProgress
                    color="#CE2B2B"
                    options={{trickleSpeed: 50}}
                    showAfterMs={300}
                />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>

    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired
};
