import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Offering from '../Offering/Offering';
import './MainOfferings.css';

const MainOfferings = () => {
    const [offerings, setOfferings] = useState([]);
    useEffect(() => {
        fetch('https://quiet-cove-10103.herokuapp.com/offerings')
            .then(res => res.json())
            .then(data => setOfferings(data))
    }, [])
    if (offerings.length !== 0) {
        return (
            <div id="main-offerings-section" className="main-offerings-container">
                {
                    offerings.map(offering => <Offering
                        key={offering.id}
                        offering={offering}
                    ></Offering>)
                }
            </div>
        );
    }
    else {
        return (
            <div>
                <Spinner style={{ marginTop: "100px", width: "100px", height: "100px" }} animation="grow" />
            </div>
        )
    }
};

export default MainOfferings;