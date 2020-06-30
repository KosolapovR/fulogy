import React from 'react';
import {configureStore} from "./state/store";
import Container from "@material-ui/core/Container";
import Header from "./blocks/Header";
import Main from "./blocks/Main";
import Footer from "./blocks/Footer";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import InfoBlock from "./blocks/InfoBlock";

const useStyle = makeStyles({
    root: {
        minWidth: '768px',
        height: '100vh',
    }
});

function App({showInfoBlock}) {
    const styles = useStyle();

    return (
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
    );
}

const MapDispatchToProps = state => ({
    showInfoBlock: state.Constructor.showInfoBlock
});

export default connect(MapDispatchToProps, {})(App);
