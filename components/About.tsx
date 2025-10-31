
import React from 'react';

const TeamMemberCard = ({ name, role, image }: { name: string; role: string; image: string }) => (
    <div className="text-center">
        <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg" />
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-accent">{role}</p>
    </div>
);


const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Our Agency</h2>
          <p className="text-accent mt-4 text-lg">Pioneering AI Automation in Nepal</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img src="https://picsum.photos/seed/about-us/600/400" alt="Our team" className="rounded-lg shadow-xl"/>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Our Mission & Vision</h3>
            <p className="text-light mb-4">
              Our mission is to empower Nepalese businesses with cutting-edge AI automation solutions, making advanced technology accessible and affordable. We envision a future where every business, regardless of size, can leverage AI to achieve unprecedented growth and efficiency.
            </p>
            <h3 className="text-2xl font-semibold text-white mb-4 mt-6">Why Choose Us?</h3>
            <ul className="space-y-3 text-light">
              <li className="flex items-start">
                <span className="text-highlight mr-3 mt-1">&#10003;</span>
                <span><span className="font-bold">Local Expertise:</span> Deep understanding of the Nepalese market and its unique challenges.</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-3 mt-1">&#10003;</span>
                <span><span className="font-bold">Results-Driven:</span> We focus on delivering measurable ROI and tangible business outcomes.</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-3 mt-1">&#10003;</span>
                <span><span className="font-bold">Client-First Approach:</span> Your success is our priority. We offer dedicated support and tailor solutions to your needs.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-10">Meet Our Experts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <TeamMemberCard name="Aarav Sharma" role="Founder & AI Strategist" image="https://picsum.photos/seed/team1/200" />
                <TeamMemberCard name="Sita Rai" role="Lead Automation Engineer" image="https://picsum.photos/seed/team2/200" />
                <TeamMemberCard name="Bikram Thapa" role="Marketing AI Specialist" image="https://picsum.photos/seed/team3/200" />
                <TeamMemberCard name="Anjali Gurung" role="Client Success Manager" image="https://picsum.photos/seed/team4/200" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
