import { useRouter } from "next/router";

import Layout from "@/components/layout";
import Home from "@/components/home";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import NotFound from "@/components/notFound";

const Page = () => {

  const router = useRouter();

  const page = router.query.path;

  return(
    <Layout>
      {
        page === 'home' 
          ? <Home />
          : page === 'about'
            ? <About />
            : page === 'experience'
              ? <Experience />
              : page === 'projects'
                ? <Projects />
                : page === 'contact'
                  ? <Contact />
                  : <NotFound />
      }
    </Layout>
  )
}

export default Page;