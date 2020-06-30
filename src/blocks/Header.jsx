import React from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/logo.png';
import Grid from "@material-ui/core/Grid";

const useStyle = makeStyles({
    root: {
        color: '#CCC',
        background: '#333',
        height: '56px',
    },
    menu: {
        marginLeft: '20px',
        cursor: 'pointer',
        '&:hover': {
            color: '#EEE'
        }
    },
    cart: {
        cursor: 'pointer',
        '&:hover': {
            color: '#EEE'
        },
    },
    icons: {
        position: 'relative',
        '&::after': {
            display: 'block',
            content: '"1"',
            position: 'absolute',
            background: '#18c0d9',
            top: 0,
            right: '45px',
            paddingTop: '2px',
            textAlign: 'center',
            width: '11px',
            height: '11px',
            borderRadius: '6px',
            color: '#FFF',
            fontSize: '7px'
        },
    }
});

function Header(props) {
    const styles = useStyle();

    return (
        <header className={styles.root}>
            <Container maxWidth={'lg'}>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid item>
                        <img src={logo} width='120px' alt='logo'/>
                    </Grid>
                    <Grid item className={styles.icons}>
                        <ShoppingCartIcon className={styles.cart}/>
                        <MenuIcon className={styles.menu}/>
                    </Grid>
                </Grid>
            </Container>
        </header>
    );
}

export default Header;