import React, { useEffect, useState } from 'react';
import Offering from '../Offering/Offering';

const MainOfferings = () => {
    const [offerings, setOfferings] = useState([]);
    useEffect(() => {
        fetch('https://quiet-cove-10103.herokuapp.com/offerings')
            .then(res => res.json())
            .then(data => setOfferings(data))
    }, [])
    return (
        <div className="offerings-container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    offerings.map(offering => <Offering
                        key={offering._id}
                        offering={offering}
                    ></Offering>)
                }
            </div>
        </div>
    );
};

export default MainOfferings;