import Image from "next/image";

const teamData = [
  {
    name: "mary mwangi",
    title: "c.e.o and founder",
    image: "/assets/executive/mary.png", 
  },
  {
    name: "jason judah musyoka",
    title: "c.f.o",
    image: "/assets/executive/jason.png", 
  },
  {
    name: "karen kiambi",
    title: "head of payments",
    image: "/assets/executive/karen.png", 
  },
  {
    name: "russell aukom",
    title: "head of products",
    image: "/assets/executive/russell.png", 
  },
  {
    name: "martin karuga",
    title: "head of trade and enterprise",
    image: "/assets/executive/martin.png", 
  },
  {
    name: "fauzia mwenja",
    title: "head of compliance",
    image: "/assets/placeholder.png", 
  },
];

const Team = () => {
  return (
    <div className="p-5 md:pb-16">
      <div className="mx-auto text-center md:max-w-2xl md:pb-12">
        <h1 className="mb-4">A team with conviction.</h1>
        <p>
          We started with a conviction that every single one in Africa should
          have access to great and easy payment solutions. Say hello to a team
          that works hard on this goal every single day.
        </p>
      </div>
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-3">
        {teamData.map((member, index) => (
          <div key={index} className="relative">
            <div className="">
              <Image
                src={member.image}
                alt={member.name}
                width="100%"
                height="100"
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className="mt-2">
              <h4 className="text-xl font-bold capitalize">{member.name}</h4>
              <p className="uppercase my-0.5">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
