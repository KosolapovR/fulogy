import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {showInfoBlockAC} from "../state/constructor/action";
import {connect} from "react-redux";

const useStyle = makeStyles({
    root: {
        height: '60px',
        background: '#18c0d9',
        color: '#fff',
        boxShadow: '0 0 5px rgba(0,0,0,0.5)'
    },
    i: {
        cursor: 'pointer',
        width: '56px',
        background: '#18a8c1',
        fontSize: '26px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoText: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

function Info({showInfoBLock}) {
    const styles = useStyle();
    return (
        <Grid container className={styles.root}>
            <Grid item className={styles.i} onClick={() => {showInfoBLock()}}>
                i
            </Grid>
            <Grid item className={styles.infoText}>
                Выберите цвет свечения
            </Grid>

        </Grid>
    );
}
const mapDispatchToProps = dispatch => ({
    showInfoBLock: () => {
        dispatch(showInfoBlockAC())
    }
});

export default connect(null, mapDispatchToProps)(Info);