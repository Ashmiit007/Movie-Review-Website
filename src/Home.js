import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('https://tubular-granita-a79820.netlify.app/blog')

  return (
    
    <div className="home">
      <h2>What we have to offer:</h2>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;