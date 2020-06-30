import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {hideInfoBlockAC} from "../state/constructor/action";

const useStyle = makeStyles({
    root: {
        minHeight: 'calc(100vh - 112px)',
    },
    container: {
        padding: '30px 45px',
    },
    link: {
        width: 'fit-content',
        cursor: 'pointer',
        fontWeight: 400,

        fontSize: 18,
        color: '#CCC',
        marginBottom: 20,

        '&:hover': {
            color: '#999'
        }
    },
    text: {
        fontFamily: 'Open Sans',
        fontWeight: 400
    }

});

function InfoBlock({hideInfoBLock}) {
    const styles = useStyle();

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.link} onClick={() => {hideInfoBLock()}}>
                    <i className="fas fa-chevron-left" style={{marginRight: 10}}></i>
                    Вернуться
                </div>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi
                    consequuntur est libero nisi quae, quia? Asperiores aspernatur aut debitis distinctio dolores eaque
                    eius
                    error esse est exercitationem fuga harum illum ipsa, laudantium maxime necessitatibus nemo neque,
                    nostrum numquam odio officiis placeat possimus quae quaerat quas, quasi quia repellendus similique
                    sunt
                    tempore ullam ut vero voluptates. Ad aliquid cum cumque dolorum earum hic inventore iure, nihil
                    numquam,
                    odio officia, placeat rem sed. Deserunt dolores eius et eveniet exercitationem ipsum labore
                    necessitatibus neque tenetur totam! Asperiores dolor nisi officiis quo ratione tempora voluptas!
                    </p>
                <p className={styles.text}>

                Amet
                    deleniti dolore dolorum libero porro, praesentium reiciendis saepe soluta. Ad amet, assumenda at
                    consequuntur corporis deserunt dolores ea eius eos, esse ex facilis harum ipsa ipsum maiores minima
                    nemo
                    neque nisi, nostrum nulla odit porro quia quo recusandae reiciendis tempore tenetur! Animi commodi
                    doloremque eum fugit harum impedit minima, molestias nesciunt odio quisquam repellendus,
                    reprehenderit
                    unde, voluptates! Ab alias aliquid amet aspernatur beatae consectetur consequuntur, dolorum ducimus
                    ipsam quisquam ratione, reiciendis rem saepe tempora vel! Aut, expedita fuga illo ipsa, ipsum iste,
                    magnam molestiae nihil quasi repudiandae sed unde vel vitae! Aliquam amet, at autem cumque deleniti
                    dolor ea maxime nulla odit pariatur quae tempora tempore velit!
                </p>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    hideInfoBLock: () => {
        dispatch(hideInfoBlockAC())
    }
});

export default connect(null, mapDispatchToProps)(InfoBlock);