import { useNavigate } from "react-router-dom";



const Navbar = () => {
    const navigate = useNavigate();
    const navigateToSignUp = () => {
        navigate('/signup');
    }
    return (
        <div className="nav-bar">
            <h1>Scholarship Finder</h1>
            <button onClick={navigateToSignUp}>Sign out</button>
        </div>
    );
}
export default Navbar;