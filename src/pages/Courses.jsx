import { Link } from "react-router-dom";

export default function Courses() {
  const courses = [
    { id: 1, title: "React & Firebase Development" },
    { id: 2, title: "Data Structures & Algorithms in C++" },
    { id: 3, title: "Full-Stack Web Development Bootcamp" }
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Available Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id} style={{ marginBottom: "1rem" }}>
            <strong>{course.title}</strong> — <Link to="/dashboard">Enroll / View Lessons</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}