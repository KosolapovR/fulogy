import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {setActiveAC} from "../state/constructor/action";

const useStyle = makeStyles({
    root: {
        margin: '10px',
        width: '20%',
        height: 'auto',
        position: 'relative',
        transition: 'all .2s ease',
        cursor: 'pointer',
        '&:hover': {
            transition: 'all .2s ease',
            transform: 'scale(1.05)',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)'
        }

    },
    active: {
        margin: '10px',
        width: '20%',
        height: 'auto',
        position: 'relative',
        transform: 'scale(1.05)',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)'
    },
    img: {
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        borderRadius: '3px',
    },
    title: {
        lineHeight: '24px',
        position: 'absolute',
        width: '100%',
        height: '26px',
        color: '#fff',
        bottom: 0,
        textAlign: 'center',
        background: 'rgba(1, 1, 1, .4)',
        fontSize: '0.9em'
    },
    select: {
        position: 'absolute',
        top: '7px',
        right: '7px',
        background: '#18c0d9',
        borderRadius: '3px',
        color: '#FFF',
        fontSize: 10,
        padding: '3px',
    }
});

function ImgCard({path, title = 'title', active = false, setActive}) {
    const styles = useStyle();

    if (active) {
        return (
            <div className={styles.active}>
                <img className={styles.img} src={path} alt='img'/>
                <div className={styles.title}>{title}</div>
                <div className={styles.select}>
                    <i className="fas fa-check"></i>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.root} onClick={() => setActive(title)}>
            <img className={styles.img} src={path} alt='img'/>
            <div className={styles.title}>{title}</div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setActive: (title) => {
        dispatch(setActiveAC(title))
    }
});

export default connect(null, mapDispatchToProps)(ImgCard);