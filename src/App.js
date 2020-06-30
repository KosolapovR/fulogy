import React from 'react';
import Header from "./blocks/Header";
import Main from "./blocks/Main";
import Footer from "./blocks/Footer";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import InfoBlock from "./blocks/InfoBlock";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";

const useStyle = makeStyles({
    root: {
        minWidth: '991px',
        height: '100vh',
    }
});

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#18c0d9',
            contrastText: '#FFF'
        },
    },
});

function App({showInfoBlock}) {
    const styles = useStyle();

    return (
        <ThemeProvider theme={theme}>
            <Grid container className={styles.root} direction={'column'} justify='space-between'>
                <Grid item>
                    <Header/>
                </Grid>
                <Grid item>
                    {showInfoBlock ? <InfoBlock/> : <Main/>}
                </Grid>
                <Grid item>
                    <Footer/>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

const MapDispatchToProps = state => ({
    showInfoBlock: state.Constructor.showInfoBlock
});

export default connect(MapDispatchToProps, {})(App);
