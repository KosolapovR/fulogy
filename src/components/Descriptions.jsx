import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyle = makeStyles({
    root: {
        padding: '20px 30px',
        paddingBottom: 0,
    },
    row: {
        marginBottom: '15px',
    },
    col: {
        paddingRight: '45px'
    },
    paper: {
        width: 'fit-content',
        padding: '4px 8px',
        background: '#eeeeee'
    }
});

function Descriptions(props) {
    const styles = useStyle();

    return (
        <div className={styles.root}>
            <Grid container className={styles.row}>
                <Grid item xs={5} className={styles.col}>Класс:</Grid>
                <Grid item xs={7} className={styles.col}>
                    <Paper className={styles.paper}>Standart</Paper>
                </Grid>
            </Grid>
            <Grid container className={styles.row}>
                <Grid item xs={5} className={styles.col}>Потребляемая мощность:</Grid>
                <Grid item xs={7} className={styles.col}>59 Вт.</Grid>
            </Grid>
            <Grid container className={styles.row}>
                <Grid item xs={5} className={styles.col}>Сила света:</Grid>
                <Grid item xs={7} className={styles.col}>3459 Люмен = 7,5 ламп накаливания по 50 Вт.</Grid>
            </Grid>
            <Grid container className={styles.row}>
                <Grid item xs={5} className={styles.col}>Гарантия</Grid>
                <Grid item xs={7} className={styles.col}>3 года</Grid>
            </Grid>
            <Grid container className={styles.row}>
                <Grid item xs={5} className={styles.col}>Монтаж</Grid>
                <Grid item xs={7} className={styles.col}>Да</Grid>
            </Grid>
            <Grid container className={styles.row}>
                <Grid item xs={5} className={styles.col}>Итого сумма:</Grid>
                <Grid item xs={7} className={styles.col}>2954 рублей</Grid>
            </Grid>
        </div>
    );
}

export default Descriptions;