import React from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
    root: {
        color: '#AAAAAA',
        background: '#333333',
        height: '56px',
    }
});

function Header(props) {
    const styles = useStyle();

    return (
        <Container className={styles.root} maxWidth={'lg'}>
            <div>Header</div>
        </Container>
    );
}

export default Header;