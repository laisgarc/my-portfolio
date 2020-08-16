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
                    <div>
                        <div class="col d-block m-0 px-0">
                            <p class="ml-0 mr-0 px-0 mb-n4 d-flex row menu">Laís Garcia</p>
                            <p class="m-0 px-3 pt-1 d-flex row menu text-center">Information systems graduation student at USP - 19 years old - Self-taught Blender 3D artist</p>
                        </div>
                        <div class="col d-block m-0 px-0 mb-2 mt-n2">
                            <div class="ml-0 mr-0 px-0 mb-n1 d-flex menu"><a href="https://instagram.com/laisgarc" target="_blank" class="pr-1">Instagram </a> - <a href="https://www.linkedin.com/in/la%C3%ADs-g-679a92136/" target="_blank" class="pl-1"> LinkedIn</a></div>
                        </div>
                    </div>
                </Accordion.Collapse>
            </Accordion>
        )}
}

export default Menu;