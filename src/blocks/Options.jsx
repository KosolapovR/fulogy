import React from 'react';
import Descriptions from "../components/Descriptions";
import Info from "../components/Info";
import Gallery from "../components/Gallery";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";


const useStyle = makeStyles({
    root: {
        paddingLeft: '15px',
        height: '100%',
    },
    container: {
        height: '100%',
        borderLeft: '1px solid #BBB',
    }
});

function Options(props) {
    const styles = useStyle();

    return (
        <div className={styles.root}>
            <Box className={styles.container}>
                <Descriptions/>
                <Info/>
                <Gallery/>
            </Box>
        </div>
    );
}

export default Options;