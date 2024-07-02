// A component is just a function that returns a jsx template and that function is exported at the bottom of the file.


import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar flex p-[20px] items-center max-w-[600px] mx-auto border-b border-b-[#f2f2f2] border-solid">
            <h1 className = "text-[#f1356d]">Dojo Blog</h1>
            <div className="links ml-auto">
                <Link className = "ml-[16px] decoration-none p-[6px] hover:text-[#f1356d]" to = "/">Home</Link>
                <Link className = "ml-[16px] decoration-none p-[6px] hover:text-[#f1356d]"  to = "/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;