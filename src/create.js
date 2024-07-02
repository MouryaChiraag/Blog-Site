// component to create a new blog

import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();    
        const blog = { title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method : 'POST',
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify(blog)
        }).then(() => {
                console.log("blog added");
                setIsPending(false);
                // history.go(-1);
                history.push('/');
        })

    }

    return ( 
        <div className="create max-w-[600px]  m-[40px] mx-auto p-[20px]">

            <h2>Add a New Blog</h2>

            <form onSubmit = {handleSubmit}>

                <label>Blog Title</label>

                <input type = "text" required value = {title} onChange = {(e) => setTitle(e.target.value)}/>

                <label>Blog Body</label>

                <textarea required value = {body} onChange = {(e) => setBody(e.target.value)}></textarea>

                <label>Blog Author</label>

                <select
                    value = {author} 
                    onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value = "space"></option>
                    <option value = "MCB">MCB</option>
                    <option value = "mario">Mario</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}

            </form>
        </div>
     );
}
 
export default Create;