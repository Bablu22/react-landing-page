import React from 'react';
import "./SinglePerson.css"
import Image1 from '../images/image1.svg'
import Image2 from '../images/image2.svg'
import Image3 from '../images/image3.svg'
import Image4 from '../images/image4.svg'
import Image5 from '../images/image5.svg'



const SinglePerson = () => {
    return (
        <div className="container">
            <SinglePersonDataOne
                name="Your channel program on steroids"
                title="Tired of finding MSPs that can help you boost your channel sales?  You’re in luck, because they’re all here."
                img={Image1}
            >

            </SinglePersonDataOne>

            <SinglePersonDataTwo
                name="Become the vendor everyone wants to buy from"
                title="Gain brand authority and visibility with the help of the largest IT service ecosystem. Find customers who are looking for your solution right now!"
                img={Image2}
            >

            </SinglePersonDataTwo>

            <SinglePersonDataOne
                name="It’s like having Your best Salesman on autopilot"
                title="Share collaterals and documents that are automatically branded. Leverage a rich partner network that sells your solution exactly the way your best salesman would."
                img={Image3}
            >

            </SinglePersonDataOne>

            <SinglePersonDataTwo
                name="Get The best version of Your sales playbook"
                title="Gather insights about top channel sellers and find out what pitch and collaterals ensure maximum profitability. Win happy customers with an optimized sales playbook."
                img={Image4}
            >

            </SinglePersonDataTwo>

            <SinglePersonDataOne
                name="Get The best version of Your sales playbook"
                title="Gather insights about top channel sellers and find out what pitch and collaterals ensure maximum profitability. Win happy customers with an optimized sales playbook."
                img={Image5}
            >

            </SinglePersonDataOne>
        </div >
    );
};

export default SinglePerson;




const SinglePersonDataOne = (props) => {
    return (
        <div className="single-person">
            <div className="desc">
                <h3>{props.name}</h3>
                <p>{props.title}</p>
            </div>
            <div>
                <img src={props.img} alt="" />
            </div>
        </div>
    );
};


const SinglePersonDataTwo = (props) => {
    return (
        <div className="single-person">
            <div>
                <img src={props.img} alt="" />
            </div>
            <div className="desc">
                <h3>{props.name}</h3>
                <p>{props.title}</p>
            </div>

        </div>
    );
};




