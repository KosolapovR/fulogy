import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyle = makeStyles({
    active: {
        background: '#18c0d9',
        height: '56px',
        padding: '0 30px',
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 400,
    },
    red: {
        borderBottom: '5px solid #e66968',
        height: '56px',
        padding: '0 30px',
        textAlign: 'center',
        fontWeight: 400,
        cursor: 'pointer',
        '&:hover': {
            background: '#CCC'
        }
    },
    blue: {
        borderBottom: '5px solid #18c0d9',
        height: '56px',
        padding: '0 30px',
        textAlign: 'center',
        fontWeight: 400,
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