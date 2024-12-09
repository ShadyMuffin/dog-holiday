import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <div className="p-20">
        <div className="m-8 text-center">
          <h1 className="text-3xl font-mono font-bold text-slate-700 m-20 ">
            Our services
          </h1>
        </div>
        <div>
          <ul className="grid text-center">
            <li className="p-6 font-sans text-xl">
              <strong>
                <Link to="/dogDayCare">Daycare</Link>
              </strong>
              <p>
                {" "}
                A fun, safe environment where dogs can play and socialize under
                expert supervision.
              </p>
            </li>
            <li className="p-6 font-sans text-xl">
              <strong>
                <Link to="/dogBoardingHotel">Boarding</Link>
              </strong>
              <p>
                {" "}
                Overnight stays with cozy beds, regular playtime, and lots of
                love.
              </p>
            </li>
            <li className="p-6 font-sans text-xl">
              <strong>
                <Link to="/puppySchool">Puppy Training</Link>
              </strong>
              <p>
                {" "}
                Professional training sessions to help your dog learn and grow.
              </p>
            </li>
            <li className="p-6 font-sans text-xl">
              <strong>
                <Link to="/dogGrooming">Grooming</Link>
              </strong>
              <p> Pampering services including baths, nail trims, and more.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
