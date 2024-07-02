import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
       <div className="not-found max-w-[600px]  m-[40px] mx-auto p-[20px]">
        <h2>.....SORRY.....</h2>
        <p>That page cannot be Found</p>
        <Link to = "/"><u>Back To HomePage..</u></Link>
       </div> 
     );
}
 
export default NotFound;