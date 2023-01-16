import ActiveLink from "./activelink";

const NavLinks = () => {
  return (
    <>
      <ActiveLink href="/">About</ActiveLink>
      <ActiveLink href="/#contact">Contact</ActiveLink>
      <ActiveLink href="/projects">Projects</ActiveLink>
      <a href="https://github.com/E-Almqvist" target="_blank" rel="noreferrer">
        GitHub
      </a>
      <a href="https://git.wych.dev" target="_blank" rel="noreferrer">
        WychGit
      </a>
    </>
  );
};

export default NavLinks;
