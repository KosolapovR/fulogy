import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import img1 from '../assets/cold.jpg';
import img2 from '../assets/daily.jpg';
import img3 from '../assets/warm.jpg';
import ImgCard from "./ImgCard";
import {connect} from "react-redux";

const useStyle = makeStyles({
    root: {
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'center'
    }
});


function Gallery({currentLight}) {
    const styles = useStyle();

    const cards = [
        {title: 'Теплый', path: img3},
        {title: 'Дневной', path: img2},
        {title: 'Холодный', path: img1},
    ];

    return (
        <div className={styles.root}>
            {cards.map((c, i) => {
                if (c.title === currentLight){
                    return <ImgCard key={i} active path={c.path} title={c.title}/>
                }else{
                    return <ImgCard key={i} path={c.path} title={c.title}/>
                }
            })}
        </div>
    );
}

const mapStateToProps = state => ({
    currentLight: state.Constructor.currentLight,
});

export default connect(mapStateToProps, {})(Gallery);