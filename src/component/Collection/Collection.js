import React, {Component} from 'react';
import './Collection.scss';
import Carrot from './Carrot/Carrot';
import '../../animation/hover.scss';


class Collection extends Component{
    render(){
        return(
            <div className="collection">
                <a href="#" class="hvr-float">Float</a>
                <div className="title">Collect you Carrot!</div>
                <div className="carrot-wrap">
                    <Carrot/><Carrot/><Carrot/><Carrot/>
                    <Carrot/><Carrot/><Carrot/><Carrot/>
                    <Carrot/><Carrot/><Carrot/><Carrot/>
                </div>
            </div>
        );
    };
}

export default Collection;