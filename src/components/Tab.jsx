import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyle = makeStyles({
    active: {
        background: '#47bfbb',
        height: '56px',
        padding: '0 30px',
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 600,
    },
    red: {
        borderBottom: '5px solid #bf5c5b',
        height: '56px',
        padding: '0 30px',
        textAlign: 'center',
        fontWeight: 600,
        cursor: 'pointer',
        '&:hover': {
            background: '#CCC'
        }
    },
    blue: {
        borderBottom: '5px solid #47bfbb',
        height: '56px',
        padding: '0 30px',
        textAlign: 'center',
        fontWeight: 600,
        cursor: 'pointer',
        '&:hover': {
            background: '#CCC'
        }
    }

});

function Tab({title, status = 'completed'}) {
    let styles = useStyle();

    if (status === 'completed') {
        return <Grid
            container
            className={styles.blue}
            justify='center'
            alignItems='center'
        >
            <Grid item>
                {title}
            </Grid>
        </Grid>
    } else if (status === 'current') {
        return <Grid
            container
            className={styles.active}
            justify='center'
            alignItems='center'
        >
            <Grid item>
                {title}
            </Grid>
        </Grid>
    } else {
        return <Grid
            container
            className={styles.red}
            justify='center'
            alignItems='center'
        >
            <Grid item>
                {title}
            </Grid>
        </Grid>
    }
}

export default Tab;