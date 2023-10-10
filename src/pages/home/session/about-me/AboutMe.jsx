import { useEffect, useRef, useState } from "react";
import { Fragment } from "react";
import './AboutMe.css'
import Modal from "../../../../components/modal/Modal"

const AboutMe = () => {
    const [resumeOpen, setResumeOpen] = useState(false);

    const modal = () => {
        setResumeOpen(true);
    }

    const contentRef = useRef(null);

    useEffect(() => {
        const contentElement = contentRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    contentElement.style.opacity = '1';
                }
            });
        });

        observer.observe(contentElement);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <Fragment>
            <div className="about-me-container" ref={contentRef}>
                <h1>About Me</h1>
                <p>I am a programmer who focuses on developing a website that can be used for commercial, business, personal and internal organizational purposes. I like building websites with a friendly user interface and user experience so I can handle both frontend and backend.</p>
                <button onClick={modal}>My Resume</button>
            </div>
            <Modal
                isOpen={resumeOpen}
                onClose={() => setResumeOpen(false)}
                image={"/CV.png"}
            />
        </Fragment>
    )
};

export default AboutMe;
