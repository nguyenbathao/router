import { Outlet } from "react-router-dom";

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact</h2>
            <Outlet/>
        </div>
    );
};

export default Contact;