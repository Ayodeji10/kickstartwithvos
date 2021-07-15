import React from 'react';

const Button = () => {
    const closeInformation = () => {
        document.querySelector('#full-info').style.display = 'none';
    }

    return (
        <div className="enroll">
            <div className="container">
                <div className="row">
                    <a href="#pay">
                        <button id="enroll-now">
                            <h1>N200,000</h1>
                            <h2>Enroll Now</h2>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Button;
