import React from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slider from "./Slider";
import Options from "./Options";

const useStyle = makeStyles({
    root: {
        background: '#fafafa',
        minHeight: 'calc(100vh - 112px)',
    },
    part: {
        flexBasis: '50%',
        padding: '8px',
    }

});

function Main(props) {
    const styles = useStyle();

    return (
        <Container className={styles.root} maxWidth={'lg'}>
            <Grid container justify='space-between'>
                <Grid item className={styles.part}>
                    <Slider />
                </Grid>
                <Grid item  className={styles.part}>
                    <Options/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Main;