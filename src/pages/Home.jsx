import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to EduPortal</h1>
      <p>Master Data Science, Web Development, and Computer Science skills with expert-led courses.</p>
      <Link to="/courses"><button>Explore Courses</button></Link>
    </div>
  );
}