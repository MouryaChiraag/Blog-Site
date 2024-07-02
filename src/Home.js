//default code

// const Home = () => {



//     return (
//         <div className="home max-w-[600px]  m-[40px] mx-auto p-[20px]">
//             <h2>Homepage</h2>
            
//             </div>
//     );
// }
     
// export default Home;



// Click Events

// const Home = () => {

// const handleClick = (e) => {
//     console.log("Hello Mourya", e);
// }

// const handleClickAgain = (name, e) => {
//     console.log("Hello" + name, e);
// }

//     return (
//         <div className="home max-w-[600px]  m-[40px] mx-auto p-[20px]">
//             <h2>Homepage</h2>
//             <button onClick = {handleClick} > Click ME! </button>
//             <button onClick = {(e) => {
//                 handleClickAgain(" Mario", e);
//             }} > Click Me Again </button>
//         </div>
//     );
// }
 
// export default Home;


// useState() function
//[] - array destructuring

// import { useState } from "react";

// const Home = () => {
//     // let name = 'Mcb';
//     const [name, setName] = useState('mcb');
//     const [age, setAge] = useState(25);

//     const handleClick = () => {
//     setName('cHIRAAG');
//     setAge(30);
//     }

//     return (
//         <div className="home max-w-[600px]  m-[40px] mx-auto p-[20px]">
//             <h2>Homepage</h2>
//             <p>{name} is {age} years old</p>
//             <button onClick = {handleClick} > Click ME! </button>
//             </div>
//     );
// }
     
// export default Home;


//map method

// import { useState } from "react";

// const Home = () => {
//     const [blogs, setBlogs] = useState([
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//     ]);

//     return (
//         <div className="home max-w-[600px]  m-[40px] mx-auto p-[20px]">
//             {blogs.map((blog) => (
//                 <div className="blog-preview" key = {blog.id}>
//                     <h2>{ blog.title }</h2>
//                     <p>Written By { blog.author }</p>
//                 </div>
//             ))}
//         </div>
//     );
// }
     
// export default Home;


//  Reusable Component and adding it into required sections - We can do this in the form of Props

// import { useState } from "react";
// import BlogList from "./bloglist";

// const Home = () => {
//     const [blogs, setBlogs] = useState([
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//     ]);

//     return (
//         <div className="home max-w-[600px]  m-[40px] mx-auto p-[20px]">
//             <BlogList blogs = {blogs} title = "All Blogs!" /> 
//         </div>
//     );  
// }
     
// export default Home;
// blogs is a prop here. we can take any name instead of blogs and then pass ={blogs}. Blogs inside fllower brackets indicates blogs listed above.

// Reusing Components

// import { useState } from "react";
// import BlogList from "./bloglist";

// const Home = () => {
//     const [blogs, setBlogs] = useState([
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//     ]);

//     return (
//         <div className="home max-w-[600px]  m-[40px] mx-auto p-[20px]">
//             <BlogList blogs = {blogs} title = "All Blogs!" /> 

//             <BlogList blogs = {blogs.filter( (blog) => blog.author === 'mario')} title = "Mario's Blogs!" /> 
//         </div>
//     );  
// }
     
// export default Home;


// Functions as Props [ Delete an Item]

// import { useState } from "react";
// import BlogList from "./bloglist";

// const Home = () => {
//     const [blogs, setBlogs] = useState([
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//     ]);

//     const handleDelete = (id) => {
//         const newBlogs = blogs.filter(blog => blog.id !== id);
//         setBlogs(newBlogs);
//     }

//     return (
//         <div className="home max-w-[600px]  m-[40px] mx-auto p-[20px]">
//             <BlogList blogs = {blogs} title = "All Blogs!" handleDelete={handleDelete} /> 
//         </div>
//     );  
// }
     
// export default Home;


// useEffect Hook

// import { useState, useEffect } from "react";
// import BlogList from "./bloglist";

// const Home = () => {
//     const [blogs, setBlogs] = useState([
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//     ]);

//     const handleDelete = (id) => {
//         const newBlogs = blogs.filter(blog => blog.id !== id);
//         setBlogs(newBlogs);
//     }

//     //we dont store useEffect in a something/constant beacause it doesnt pass us anything. we just need to pass it as an argument. 
//     //this is a function when there is a re-render.
//     // Basically, this function runs for "EVERY RENDER".
//     useEffect(() => {
//         console.log("useEffect run");
//         console.log(blogs);
//     });

//     return (
//         <div className="home max-w-[600px]  m-[40px] mx-auto p-[20px]">
//             <BlogList blogs = {blogs} title = "All Blogs!" handleDelete={handleDelete} /> 
//         </div>
//     );  
// }
     
// export default Home;


// useEffect Hook Dependancies

// import { useState, useEffect } from "react";
// import BlogList from "./bloglist";

// const Home = () => {
//     const [blogs, setBlogs] = useState([
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//     ]);

//     const [name, setName] = useState('mario');

//     const handleDelete = (id) => {
//         const newBlogs = blogs.filter(blog => blog.id !== id);
//         setBlogs(newBlogs);
//     }

//     useEffect(() => {
//         console.log("useEffect ran");
//         console.log(name);
//     }, [name]);

//     return (
//         <div className="home max-w-[600px]  m-[40px] mx-auto p-[20px]">
//             <BlogList blogs = {blogs} title = "All Blogs!" handleDelete={handleDelete} /> 
//             <button onClick={() => setName('Balaji')}>Change Name Button</button>
//             <p> {name} </p>
//         </div>
//     );  
// }
     
// export default Home;

//[] - This is an 'EMPTY DEPENDENCY ARRAY'. This only render once after you reload the page.
// useEffect(() => {
//     console.log("useEffect run");
//     console.log(blogs);
// }, []);



// Using JSON Server, Fetching Data from JSON Server, Conditional Loading Messages

// import { useEffect, useState } from "react";
// import BlogList from "./bloglist";

// const Home = () => {
//   const [blogs, setBlogs] = useState(null);
//   const [isPending, setIsPending] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//         fetch('http://localhost:8000/blogs')
//         .then(res => {
//           return res.json();
//         })
//         .then(data => {
//           setBlogs(data);
//           setIsPending(false);
//         }) 
//     }, 1000);
//   }, [])

//   return (
//     <div className=" home max-w-[600px]  m-[40px] mx-auto p-[20px]">
//         {isPending && <div>LOADING.....</div>}
//       {blogs && <BlogList blogs={blogs} />}
//     </div>
//   );
// }
 
// export default Home;


// Handling Fetch Errors

// import { useEffect, useState } from "react";
// import BlogList from "./bloglist";

// const Home = () => {
//   const [blogs, setBlogs] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setTimeout(() => {
//         fetch('http://localhost:8000/blogs')
//           .then(res => {
//             if (!res.ok) {
//                throw Error("Could Not Fetch Data for that Resource");
//             }
//             return res.json();
//           })
//           .then(data => {
//             setBlogs(data);
//             setIsPending(false);
//             setError(null);
//           }) 
//           .catch(err => {
//             setIsPending(false);
//             setError(err.message);
//           })
//     }, 1000);
//   }, [])

//   return (
//     <div className=" home max-w-[600px]  m-[40px] mx-auto p-[20px]">
//       { error && <div>{ error }</div>}
//       {isPending && <div>LOADING.....</div>}
//       {blogs && <BlogList blogs={blogs} />}
//     </div>
//   );
// }
 
// export default Home;


// Creating Custom useEffect Hook


import BlogList from "./bloglist";
import useFetch from "./usefetch";

const Home = () => {
  const { data : blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  

  return (
    <div className=" home max-w-[600px]  m-[40px] mx-auto p-[20px]">
      { error && <div>{ error }</div>}
      {isPending && <div>LOADING.....</div>}
      {blogs && <BlogList blogs= { blogs } />}
    </div>
  );
}
 
export default Home;