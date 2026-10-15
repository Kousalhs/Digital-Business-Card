import {
  FaEnvelope,
  FaLinkedin,
  FaSquareTwitter,
  FaSquareFacebook,
  FaSquareInstagram,
  FaGithub,
} from "react-icons/fa6";
import photo from "../assets/george.jpg";

/* ✏️ EDIT YOUR DETAILS HERE ✏️
   Leave a value as "" to hide it. */
const profile = {
  name: "Georgios Kousalidis", // ← your full name
  role: "Full-Stack Developer",
  website: "", // ← add later, e.g. "georgesmith.dev"
  email: "george.kous3@gmail.com", // ← your email
  linkedin: "https://www.linkedin.com/in/george-kousalidis/",
  twitter: "", // e.g. "https://x.com/your-username"
  facebook: "", // e.g. "https://facebook.com/your-username"
  instagram: "", // e.g. "https://instagram.com/your-username"
  github: "https://github.com/Kousalhs",
};

const socials = [
  { label: "Twitter", href: profile.twitter, Icon: FaSquareTwitter },
  { label: "Facebook", href: profile.facebook, Icon: FaSquareFacebook },
  { label: "Instagram", href: profile.instagram, Icon: FaSquareInstagram },
  { label: "GitHub", href: profile.github, Icon: FaGithub },
].filter((s) => s.href); // hide icons with no link

export default function ProfileCard() {
  return (
    <article className="card">
      <img
        className="card__photo"
        src={photo}
        alt={`Portrait of ${profile.name}`}
      />

      <div className="card__body">
        <header className="card__header">
          <h1 className="card__name">{profile.name}</h1>
          <p className="card__role">{profile.role}</p>
          {profile.website && <p className="card__site">{profile.website}</p>}
        </header>

        <div className="card__actions">
          {profile.email && (
            <a className="btn btn--email" href={`mailto:${profile.email}`}>
              <FaEnvelope aria-hidden="true" /> Email
            </a>
          )}
          {profile.linkedin && (
            <a
              className="btn btn--linkedin"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </a>
          )}
        </div>

        <section className="card__section">
          <h2>About</h2>
          <p>
            Computer Science Graduate and Aspiring Full-Stack Developer. I build
            clean, responsive interfaces and love turning complex problems into
            simple, enjoyable experiences.
          </p>
        </section>

        <section className="card__section">
          <h2>Interests</h2>
          <p>
            Hiker. Calisthenics. Home chef. Street food fan. PAOK matchday
            regular. Gamer. Traveler.
          </p>
        </section>
      </div>

      {socials.length > 0 && (
        <footer className="card__footer">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
            >
              <Icon aria-hidden="true" />
            </a>
          ))}
        </footer>
      )}
    </article>
  );
}
