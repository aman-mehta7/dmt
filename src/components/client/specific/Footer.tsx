import { Logo } from "../../../assets";
import Container from "../shared/Container";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Links = {
  company: [
    { name: "About", href: "#" },
    { name: "Carrers", href: "#" },
    { name: "Affiliates", href: "#" },
    { name: "Media center", href: "#" },
  ],
  exploreDmt: [
    { name: "Become a partner", href: "#" },
    { name: "Book a vacation", href: "#" },
    { name: "Trust & saftey", href: "#" },
    { name: "Vacation guides", href: "#" },
  ],
};

const socialLinks = [
  {
    name: "twitter",
    href: "https://",
    icon: Logo.twitter,
  },
  {
    name: "linkedin",
    href: "https://",
    icon: Logo.linkedin,
  },
  {
    name: "facebook",
    href: "https://",
    icon: Logo.facebook,
  },
  {
    name: "instagram",
    href: "https://",
    icon: Logo.instagram,
  },
];

export default function Footer() {
  return (
    <footer
      className={`relative z-30 w-full bg-dark-blue text-white pb-10 md:px-6 pt-16 sm:pt-24 lg:px-8 lg:pt-42 lg:pb-20`}
      aria-labelledby="footer-heading"
    >
      <Container className={`mx-auto max-w-7xl`}>
        <div
          className={`flex items-center justify-center lg:items-start lg:justify-between flex-col lg:flex-row gap-16 lg:gap-0 lg:mt-16`}
        >
          <div
            className={`flex gap-10 sm:gap-56 items-center justify-between flex-row px-4 md:px-0 w-full lg:w-auto`}
          >
            <div>
              <h3 className={`text-lg font-semibold text-white`}>Company</h3>
              <ul
                className={`flex gap-2 flex-col items-start justify-between mt-4`}
              >
                {Links.company.map(({ name, href }, i) => (
                  <li key={i}>
                    <a className={`text-sm font-medium text-white`} href={href}>
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={`text-lg font-semibold text-white`}>
                Explore dmt
              </h3>
              <ul
                className={`flex gap-2 flex-col items-start justify-between mt-4`}
              >
                {Links.exploreDmt.map(({ name, href }, i) => (
                  <li key={i}>
                    <a className={`text-sm font-medium text-white`} href={href}>
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <img src={Logo.logo_white} />
          <div
            className={`flex flex-col gap-4 items-center justify-center lg:items-start lg:justify-start`}
          >
            <h5 className={`text-base font-medium`}>
              {`Support: `}
              <span className={`underline`}>{`407 924 6902`}</span>
            </h5>
            <h5 className={`text-base font-medium`}>
              {`Email: `}
              <span className={`underline`}>{`adam@webrevived.com`}</span>
            </h5>
            <ul className={`flex gap-8 items-center justify-center mt-4`}>
              {socialLinks.map(({ icon, name, href }, i) => (
                <li key={i}>
                  <a href={href}>
                    <img src={icon} alt={`${name} logo`} className={`w-6`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`flex items-center justify-center lg:items-center text-center lg:justify-between flex-col lg:flex-row gap-4 lg:gap-0 mt-12`}
        >
          <p className={``}>
            © 2022 Web Revived Media Group. All rights reserved
          </p>
          <p className={``}>Designed by Web Revived LLC, with love </p>
        </div>
      </Container>
    </footer>
  );
}
