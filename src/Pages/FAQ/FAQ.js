import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

const FAQ = () => {
    return (
        <div>
            <h2>FAQ</h2>
            <div className="Container my-5">
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Who should take an Online Course?</Accordion.Header>
                        <Accordion.Body>
                            Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. With online courses, you can
                            Advance your skill-set or begin a career change.
                            Take the next step in your formal education.
                            Ease the transition before entering a full-time academic program.
                            Enjoy learning a new topic.
                            Whatever the reason, our online courses are a flexible way of learning about the art world without  disrupting your daily life.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>  I am a high school student, can I join?</Accordion.Header>
                        <Accordion.Body>
                            Courses are open to all students 18 years or older. If you are under 18 years old, please contact us (online@sothebysinstitute.com) to discuss further.


                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Can I take more than one course at a time?</Accordion.Header>
                        <Accordion.Body>
                            If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>My payment did not go through. What do I do?</Accordion.Header>
                        <Accordion.Body>

                            e apologize for this inconvenience. We encourage you to reach out to your financial institution as further permissions may be needed to complete the payment. You are also welcome to write to online@sothebysinstitute.com for further guidance. Please wait a full 24 hours before trying again. A strong Internet connection and up-to-date browser are strongly recommended.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </div>
    );
};

export default FAQ;