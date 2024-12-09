import Card from "../components/Card";
import Navbar from "../components/Navbar";

function DogDayCare() {
  return (
    <div>
      <Navbar />
      <Card
        title="Dog Daycare"
        image="./daycare1.jpg"
        discription=" Welcome to our Dog Daycare, where your furry friend is our top
              priority! Our daycare services provide a safe, fun, and nurturing
              environment for dogs of all sizes and breeds. We understand that
              every dog is unique, so we offer a range of activities tailored to
              keep them happy and healthy throughout the day."
      />
    </div>
  );
}

export default DogDayCare;
