import TeamMemberCard from '../components/TeamMemberCard';
import './AboutUs.css';

const AboutUs = () => {
  const team = [
    {
      name: 'Lucía Gómez',
      role: 'CEO & Founder',
      imageUrl: 'https://media.istockphoto.com/id/2164061238/photo/entrepreneur-in-jacket-smiling-happy-mid-adult-mature-age-man-standing-smiling-isolated-on.jpg?s=2048x2048&w=is&k=20&c=JVhXcY8Nl4yq_mM2Kb-wDnK6CPvGxxXdEk7kbLDjqRc=',
      description: 'Lidera con visión y pasión por el diseño digital.',
    },
    {
      name: 'Carlos Díaz',
      role: 'Frontend Developer',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1689562473471-6e736b8afe15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3V5fGVufDB8fDB8fHww',
      description: 'Especialista en interfaces modernas con React.',
    },
    {
      name: 'María Ríos',
      role: 'UX Designer',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3V5fGVufDB8fDB8fHww',
      description: 'Diseña experiencias centradas en el usuario.',
    },
  ];

  return (
    <section className="about">
      <div className="about-header">
        <h1>Sobre Nosotros</h1>
        <p className="about-intro">
          Somos un equipo de profesionales dedicados a construir herramientas intuitivas y visualmente atractivas.
        </p>
      </div>
      <div className="team-section">
        {team.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};


export default AboutUs;
