import React, {
    useState,
    useEffect,
    Component,
    componentDidMount,
} from 'react';
import axios from 'axios';

import Bubbles from './Bubbles';
import ColorList from './ColorList';
import { authWithAxios } from '../utils/authWithAxios';

function BubblePage() {
    const [colorList, setColorList] = useState([]);
    console.log(colorList);
    // fetch your colors data from the server when the component mounts
    // set that data to the colorList state property
    // componentDidMount = () => {
    //     this.getData();
    // };

    const getData = () => {
        authWithAxios()
            .get('/api/colors')
            .then((res) => {
                console.log(res.data);
                setColorList(res.data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            {getData()}
            <ColorList colors={colorList} updateColors={setColorList} />
            <Bubbles colors={colorList} />
        </>
    );
}

export default BubblePage;
