import React from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slider from "./Slider";
import Options from "./Options";

const useStyle = makeStyles({
    root: {
        background: '#fafafa',
    },
    part: {
        flexBasis: '50%',
    },
    fullHeight: {
    }
});

function Main(props) {
    const styles = useStyle();

    return (
        <main className={styles.root}>
            <Container maxWidth={'xl'} className={styles.fullHeight}>
                <Grid className={styles.fullHeight} container justify='space-between'>
                    <Grid item className={styles.part}>
                        <Slider/>
                    </Grid>
                    <Grid item className={styles.part}>
                        <Options/>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
}

export default Main;