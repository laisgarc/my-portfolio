import React from 'react';
import { ReactComponent as Seta } from './seta.svg';

import Accordion  from 'react-bootstrap/Accordion';

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Menu extends React.Component {
    render() {
        return (
            <Accordion>
                <Accordion.Toggle id="botao" class="menu" variant="none" eventKey="0">
                  <Seta />
                </Accordion.Toggle>
                <Accordion.Collapse class="description" eventKey="0">
                    <div class="col d-block m-0 px-0">
                        <p class="ml-0 mr-0 px-0 mb-n4 d-flex row menu">Laís Garcia</p>
                        <p class="m-0 px-0 d-flex row menu">Information systems graduation student at USP - 19 years old - Self-taught Blender 3D artist</p>
                    </div>
                </Accordion.Collapse>
            </Accordion>
        )}
}

export default Menu;