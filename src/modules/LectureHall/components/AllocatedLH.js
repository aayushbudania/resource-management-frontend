import Lecturehall from "./Lecturehall";
import { Link } from "react-router-dom";

export default function AllocatedLH() {
  return (
    <div>
      <h1>Lecture Halls Allocated to you:-</h1>
      <Lecturehall text='LT1' />
      <Lecturehall text='LT5' />
      <Lecturehall text='LT7' />
      <Link className="text-blue-500 mt-4" to="/lecturehall">
        Back
      </Link>
    </div>
  );
}
