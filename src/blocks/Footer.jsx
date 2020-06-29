import React from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
    root: {
        background: '#eeeeee',
        height: '56px',
    }
});

function Footer(props) {
    const styles = useStyle();

    return (
        <Container className={styles.root} maxWidth={'lg'}>
            <div>Footer</div>
        </Container>
    );
}

export default Footer;