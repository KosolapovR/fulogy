import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import './carousel.css';

const useStyle = makeStyles({
    root: {
        height: '100%',
    },
    item: {
    },
    '&:>div': {
        height: '100%',
    },
    img: {
        width: '100%',
        height: 'auto',
    }
});

function Slider({currentLight, lights}) {
    const styles = useStyle();

    let items;

    switch (currentLight) {
        case 'Теплый': {
            items = lights.warm.images;
            break;
        }
        case 'Холодный': {
            items = lights.cold.images;
            break;
        }
        case 'Дневной': {
            items = lights.daily.images;
            break;
        }
        default: {
            items = lights.daily.images;
            break;
        }
    }
    ;

    return (
        <Carousel
            className={styles.root}
            autoPlay={false}
        >
            {
                items.map((item, i) => <Item className={styles.item} key={i} path={item}/>)
            }
        </Carousel>
    )
}

function Item(props) {
    const styles = useStyle();

    return (
        <div className={styles.item}>
            <img className={styles.img} src={props.path} alt="image"/>
        </div>
    )
}

const mapStateToProps = state => ({
    currentLight: state.Constructor.currentLight,
    lights: state.Constructor.lights,
});

export default connect(mapStateToProps, {})(Slider);