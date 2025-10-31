import React from 'react';

const values = [
  { name: "Education", description: "We believe knowledge is the first step to lasting environmental change." },
  { name: "Responsibility", description: "We empower individuals to take ownership of their environmental footprint." },
  { name: "Innovation", description: "We constantly seek creative solutions to turn waste into valuable resources." },
  { name: "Community", description: "We build strong, collaborative networks to amplify our impact." },
  { name: "Sustainability", description: "Our goal is to create self-sustaining systems for a circular economy." },
  { name: "Transparency", description: "We operate with openness to build trust with our community and partners." },
];

const teamMembers = [
  { name: "Team Member 1", role: "Founder & CEO", imageUrl: "https://picsum.photos/400/400?image=1005" },
  { name: "Team Member 2", role: "Head of Operations", imageUrl: "https://picsum.photos/400/400?image=1011" },
  { name: "Team Member 3", role: "Community Outreach", imageUrl: "https://picsum.photos/400/400?image=1027" },
];

const About: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <header className="bg-green-primary py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">About GreenLoop</h1>
          <p className="mt-2 text-xl">Connecting communities for a cleaner tomorrow.</p>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-dark mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Inspired by the urgent need for local solutions to plastic pollution in Bangladesh, GreenLoop was founded to empower the next generation. We believe in action, education, and creating tangible change from the ground up.
            </p>
            <p className="text-gray-700">
              We envisioned a closed-loop system where students are not just participants, but leaders in the recycling process. By bringing the technology directly to schools with our mobile plastic plants, we're making recycling accessible, educational, and impactful.
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/600/400?image=1043" alt="GreenLoop team" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="bg-green-dark text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-green-accent mb-3">Our Mission</h3>
            <p>Our mission is to foster a culture of sustainability and responsibility among Bangladeshi youth by establishing effective, community-driven plastic waste management systems and transforming waste into valuable resources.</p>
          </div>
          <div className="bg-green-dark text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-green-accent mb-3">Our Vision</h3>
            <p>To see a Bangladesh where plastic waste is a resource, not a pollutant; where every student is an eco-champion; and where circular economy principles are integral to our communities.</p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-dark mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.name} className="text-center p-4">
                <h3 className="text-xl font-semibold text-green-primary mb-2">{value.name}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-dark mb-12">Meet the Team (Placeholder)</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="w-64 text-center">
                <img src={member.imageUrl} alt={member.name} className="w-40 h-40 mx-auto rounded-full shadow-lg mb-4" />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-green-primary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;