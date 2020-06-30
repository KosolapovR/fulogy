import React from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Tab from "../components/Tab";

const useStyle = makeStyles({
    root: {
        background: '#eeeeee',
        height: '55px',
        borderTop: '1px solid #BBB',
    },
    tab: {
        borderRight: '1px solid #BBB',
        width: 'calc(100%/8)',
        '&:first-child': {
            borderLeft: '1px solid #BBB',
        }
    }
});

function Footer(props) {
    const styles = useStyle();

    return (
        <footer className={styles.root}>
            <Container maxWidth={'xl'}>
                <Grid container justify='space-between'>
                    <Grid item className={styles.tab}>
                        <Tab title='Вариант кухни' status='completed'/>
                    </Grid>
                    <Grid item className={styles.tab}>
                        <Tab title='Размеры' status='completed'/>
                    </Grid>
                    <Grid item className={styles.tab}>
                        <Tab title='Сенсор' status='completed'/>
                    </Grid>
                    <Grid item className={styles.tab}>
                        <Tab title='Питающий кабель' status='completed'/>
                    </Grid>
                    <Grid item className={styles.tab}>
                        <Tab title='Блок питания' status='completed'/>
                    </Grid>
                    <Grid item className={styles.tab}>
                        <Tab title='Цвет свечения' status='current'/>
                    </Grid>
                    <Grid item className={styles.tab}>
                        <Tab title='Монтаж' status='unfinished'/>
                    </Grid>
                    <Grid item className={styles.tab}>
                        <Tab title='Корзина' status='unfinished'/>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}

export default Footer;