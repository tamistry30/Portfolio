/**
 * @copyright 2025 Tejas Mistry
 * @license Apache-2.0
 */


import { ButtonPrimary } from "./Button";


const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Projects',
    href: '#projects'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/tamistry30'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tamistry/'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/tejas2000930'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/_tejassmistry/'
  }
];



const Footer = () => {
  return (
    <footer className="section">
        <div className="container">

            <div className="lg:grid lg:grid-cols-2">

                <div className="mb-10">
                <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                    Let&apos;s work together today!
                </h2>

                <ButtonPrimary
                    label="Contact Me"
                    href="mailto:tejas2000930@gmail.com"
                    icon="chevron_right"
                    classes="reveal-up"

                />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2 reveal-up">Sitemap</p>

                        <ul>
                            {sitemap.map(({ label, href }, key) => (
                              <li key={key}>
                                <a
                                  href={href}
                                  className="block block-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                >
                                  {label}
                                </a>
                              </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 reveal-up">Socials</p>

                        <ul>
                            {socials.map(({ label, href }, key) => (
                              <li key={key}>
                                <a
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block block-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                >
                                  {label}
                                </a>
                              </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>


            <div className="flex justify-end pt-10 mb-8">
              <p className="text-zinc-500 text-sm reveal-up">
                &copy; 2025 <span className="text-zinc-200">Tejas Mistry</span>
              </p>
            </div>

        </div>
    </footer>
);
}

export default Footer
