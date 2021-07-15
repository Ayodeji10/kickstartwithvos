import React from 'react';

const Facilitators = (props) => {
    const toggleRead = () => {
        var group = document.querySelector('.group');
        if (group.classList.contains('group-extended')) {
            group.classList.remove('group-extended');
            document.querySelector('#group-toggle-button').innerHTML = `<i class="fas fa-chevron-down"></i>SEE MORE`

        } else {
            group.classList.add('group-extended')
            document.querySelector('#group-toggle-button').innerHTML = `<i class="fas fa-chevron-up"></i>SEE LESS`
        }
    }

    return (
        <div className="facilitators">
            <div className="container">
                <div className="section-header">
                    <h1>Meet our Facilitators</h1>
                </div>
                <div className="group">
                    <div className="row">
                        {props.people.map((each) => {
                            const { id, name, description, bio, image } = each
                            return (
                                <div className="col-xl-6 col-lg-6 col-md-12 col-12 facilitator" id={id}>
                                    <div className="card mb-3" style={{ maxWidth: '540px' }} onClick={() => props.handleFacilitators(true)}>
                                        <div className="row g-0">
                                            <div className="col-md-4 col-sm-4">
                                                <img src={image} alt="" className="img-fluid rounded-start mx-auto d-block" />
                                            </div>
                                            <div className="col-md-8 col-sm-8">
                                                <div className="card-body">
                                                    <h1>{name}</h1>
                                                    <h3>{description}</h3>
                                                    <p>{bio.substring(0, 360)}...</p>
                                                    <a href="">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <span onClick={toggleRead} id='group-toggle-button'><i class="fas fa-chevron-down"></i>SEE MORE</span>
            </div>
        </div>
    );
};

export default Facilitators;
