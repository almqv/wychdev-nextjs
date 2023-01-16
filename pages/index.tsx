import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import IconLink from "components/iconlink";
import ScrollMe from "components/scrollme";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 1rem;
  /*margin: 2rem 0;*/
  margin: 0 0;
  min-height: 100vh;

  h2,
  h3 {
    font-size: 2rem;
    margin: 8px 0;
  }

  p {
    margin: 0;
    color: var(--fg);
  }

  .topmargin {
    margin-top: 1rem;
  }

  ul li {
    margin: 0.5rem 2.5rem;
  }

  #img-container {
    display: flex;
    justify-content: center;
  }
  #img-container img {
    width: 22rem;
    height: auto;
  }

  footer {
    margin-top: 1rem;
    opacity: 0.5;
  }
`;

export const Code = styled.code`
  font-family: monospace;
  font-size: 0.9rem;
  background-color: var(--bg-emph);
  color: var(--fg-code);
  border-radius: 0.4rem;
  padding: 0.1rem 0.4rem;
`;

export const CList = styled.ul`
  list-style: none;

  li {
    margin: 1rem !important;
  }
`;

export const Nem = styled.span`
  color: var(--fg-faded);
`;

export const LinkList = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1.2rem;
  border: unset;
  justify-content: center;

  a {
    color: var(--fg-button);
    transition: var(--trans-time) opacity;
  }

  a:hover {
    opacity: 0.4;
  }

  @media screen and (max-width: 960px) {
    word-break: break-word;
  }
`;

function getAge() {
  let birth = 1050019200;
  let now = Math.floor(Date.now() / 1000);
  return now - birth;
}

function secondsToYears(secs: number) {
  return Math.floor(secs / 31557600.0);
}

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Section>
        <h2 id="about">/almqv</h2>
        <p>
          I am a {secondsToYears(getAge())} year old{" "}
          <em>Computer Science & Engineering student</em> with a passion for{" "}
          <em>physics</em>, <em>programming</em>, <em>mathematics</em> and
          anything <em>*NIX</em> <Nem>(Linux, UNIX etc)</Nem> related.
        </p>
        {/*TODO: Add GitHub code frequency/contrib here*/}
        <p className="topmargin">
          Most of my projects are open-source, and if you are interested, you
          can find all of my projects on my{" "}
          <a href="https://git.wych.dev/elal" target="_blank" rel="noreferrer">
            git-server
          </a>{" "}
          or{" "}
          <a href="https://github.com/almqv" target="_blank" rel="noreferrer">
            GitHub
          </a>
          .
        </p>

        <LinkList className="topmargin">
          <IconLink
            href="#contact"
            icon={faEnvelope}
            target="_self"
            rel="noreferrer"
          />
          {/*<IconLink href="/projects" icon={ faFolderOpen } target="_self" rel="noreferrer"/>*/}
          <IconLink
            href="https://github.com/almqv"
            icon={faGithub}
            target="_blank"
            rel="noreferrer"
          />
          <IconLink
            href="https://git.wych.dev/elal"
            icon={faGit}
            target="_blank"
            rel="noreferrer"
          />
        </LinkList>
        {/*<ScrollMe href="#contact" />*/}
      </Section>

      <Section>
        <h2 id="contact">Contact</h2>
        <p>
          You can contact me through email. And if you prefer it, you can
          contact me using PGP. Do note that my{" "}
          <em>email address below is encrypted</em> as a precaution against bots
          et cetera. <em>Do not worry, it is easy to crack</em>. Alternatively
          you could query for my email with my PGP fingerprint (key-id) on some
          PGP key server (i.e. the{" "}
          <a href="https://pgp.mit.edu/" target="_blank" rel="noreferrer">
            MIT
          </a>{" "}
          or{" "}
          <a
            href="https://keyserver.ubuntu.com/"
            target="_blank"
            rel="noreferrer"
          >
            Ubuntu
          </a>{" "}
          key-server).
        </p>
        <CList>
          <li>
            PGP fingerprint:{" "}
            <Code>68B2 9768 49F0 3C72 38AE B081 E31A 99CE 3E75 A158</Code>
          </li>
          <li>
            Email: <Code>cnlueXpkaXZmZ0B0em52eS5wYnoK</Code>
          </li>
          <li>
            GitHub:{" "}
            <a href="https://github.com/almqv" target="_blank" rel="noreferrer">
              github.com/almqv
            </a>
          </li>
        </CList>
      </Section>
    </>
  );
};

Page.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
export default Page;
