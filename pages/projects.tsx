import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import Layout from "../components/layout";
import { Section } from "./index";
import Link from "next/link";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Section>
        <h2>Page under development...</h2>
        <p>
          While you wait, why not check out my{" "}
          <a href="https://github.com/E-Almqvist">GitHub</a>? Or perhaps my very
          own <a href="https://git.wych.dev/elal">git-server</a>?
        </p>
        <p>
          Or you could also <Link href="/">go back</Link> to the home page.
        </p>
      </Section>
    </>
  );
};

Page.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
export default Page;
