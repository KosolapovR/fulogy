import React, {useState} from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../assets/logo.png';
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";

const useStyle = makeStyles({
    root: {
        color: '#CCC',
        background: '#333',
        height: '56px',
    },
    menuIcon: {
        marginLeft: '20px',
        cursor: 'pointer',
        position: 'relative',
        top: 8,
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

    },
    container: {
      position: 'relative',
    },
    menu: {
        width: 360,
        zIndex: 2000,
        background: '#393939',
        color: '#eee',
        minHeight: 'calc(100vh - 56px)',
        position: 'absolute',
        top: 56,
        right: 0,
    },
    menuItem: {
        borderTop: '1px solid #555555',
        height: 'calc((100vh - 56px)/8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            color: '#FFF',
            background: '#333'
        }
    }
});

function Header(props) {
    const styles = useStyle();

    const [showMenu, setShowMenu] = useState(false)


    return (
        <header className={styles.root}>
            <Container className={styles.container} maxWidth='xl'>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid item>
                        <img src={logo} width='120px' alt='logo'/>
                    </Grid>
                    <Grid item className={styles.icons}>
                        <Badge badgeContent={1}   color="primary">
                            <ShoppingCartIcon className={styles.cart}/>
                        </Badge>
                        {showMenu ?
                            <CloseIcon onClick={() => {setShowMenu(false)}} className={styles.menuIcon}/> :
                            <MenuIcon onClick={() => {setShowMenu(true)}} className={styles.menuIcon}/>
                        }
                    </Grid>
                </Grid>
                {showMenu && <Menu/>}
            </Container>
        </header>
    );
}

function Menu(props) {
    const styles = useStyle();
    return (
        <Grid
            container
            direction='column'
            justify='space-between'
            className={styles.menu}>
            <Grid item className={styles.menuItem}>Обучающее видео</Grid>
            <Grid item className={styles.menuItem}>Оформление заказа</Grid>
            <Grid item className={styles.menuItem}>Оплата</Grid>
            <Grid item className={styles.menuItem}>Доставка</Grid>
            <Grid item className={styles.menuItem}>Гарантия</Grid>
            <Grid item className={styles.menuItem}>Возврат</Grid>
            <Grid item className={styles.menuItem}>Контакты</Grid>
            <Grid item className={styles.menuItem}>Партнерам</Grid>
        </Grid>
    );
}

export default Header;