import React, { useState } from 'react';
import data from './data';

const Facilitatorlist = () => {
    const [people, setPeople] = useState(data)
    const [index, setIndex] = useState(0)

    const { bio } = people[index]
    return (
        <div className="container">
            <div className="facilitator-details">
                <div className="row">
                    <div className="col-lg-6 col-md-7">
                        {people.map((each) => {
                            const { name, description, image, id } = each
                            return (
                                <div key={id} onClick={() => setIndex(id - 1)} className={`individual ${index === id - 1 && 'active'}`}>
                                    <img src={image} alt={name} />
                                    <div className="person">
                                        <h1>{name}</h1>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-lg-6 col-md-5">
                        <div className="bio">
                            <p>{bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilitatorlist;
