import { useRouter } from "next/router";

import Layout from "@/components/layout"


const Page = () => {

  const router = useRouter();

  const page = router.query.path;

  console.log(page)

  return(
    <Layout>
      {
        page === 'home' 
          ? <>
              <h2 className="font-mono text-3xl bg-gradient-to-r from-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">I'm Viktor Splavnyk.</h2>
              <br />
              <h1 className="font-mono text-3xl bg-gradient-to-r from-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Experienced Web | Electron App Developer</h1>
            </>
          : page === 'about'
            ? <h1>About</h1>
            : page === 'experience'
              ? <h1>Experience</h1>
              : page === 'projects'
                ? <h1>Projects</h1>
                : page === 'contact'
                  ? <h1>Contact</h1>
                  : <h1>Not Found</h1>
      }
    </Layout>
  )
}

export default Page;