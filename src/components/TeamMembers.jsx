const teamMembers = [
  {
    img: "/emily.jpg",
    name: "Emily",
    bio: " Emily brings a wealth of knowledge and compassion, with over 10 years of experience working with dogs of all breeds and temperaments. Her calm and caring nature makes her a favorite among both shy and energetic dogs.",
  },
  {
    img: "/sarah.jpg",
    name: "Sarah",
    bio: " With a background in animal behavior and over a decade of hands-on experience, Sarah has a natural ability to understand and connect with dogs of all sizes. She ensures that every dog in her care feels safe and loved.",
  },

  {
    img: "/john.jpg",
    name: "John",
    bio: "John’s expertise in canine training and behavior, combined with his fun-loving attitude, makes him a great fit for any dog. He has spent the last 12 years working with rescue dogs and helping them find forever homes.",
  },
  {
    img: "/lisa.jpg",
    name: "Lisa",
    bio: "Lisa has dedicated the past 15 years to working with dogs, specializing in early socialization and training. Her patience and playful approach create a welcoming environment for puppies and older dogs alike.",
  },
  {
    img: "/zoe.jpg",
    name: "Zoe",
    bio: "Zoe is a passionate dog lover with a deep understanding of canine health and wellness. Over the past 10 years, she has helped countless dogs live happier, healthier lives through her personalized care and attention.",
  },
];

function TeamCard({ member }) {
  return (
    <>
      <div className="flex justify-evenly">
        <div className="w-[400px] hover:bg-slate-500 hover:text-yellow-400 transition ease-in-out hover:opacity-85 hover:rounded-t-lg ">
          <img
            src={member.img}
            className="w-[400px] h-[350px] object-cover rounded-t-lg "
          />
          <div className="grid text-center p-5">
            <h1 className="font-bold text-xl p-5 font-sans">{member.name}</h1>
            <p className="font-sans font-semibold m-5">{member.bio}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function TeamMembers() {
  return (
    <>
      <div className="text-center p-5 m-10">
        <h1 className="text-2xl uppercase font-sans font-medium">
          meet the team
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </>
  );
}
export default TeamMembers;
