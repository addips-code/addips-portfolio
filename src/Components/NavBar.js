import Link from "next/link";
import Logo from "../Components/Logo";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from "../Components/Icons";
import { motion } from "framer-motion";


const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full 
            transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>
            &nbsp;
        </span>
    </Link>
  );
};

function NavBar() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/project" title="Project" className="mx-4" />
      </nav>
        <nav className="flex items-center justify-center flex-wrap">
            <motion.a href="https://twitter.com" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale: 0.9}}
                className='w-6 mr-2'
            >
                <TwitterIcon/>
            </motion.a>
            <motion.a href="https://linkedIn.com" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale: 0.9}}
                className='w-6 mx-2'
            >
                <LinkedInIcon/>
            </motion.a>
            <motion.a href="https://github.com" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale: 0.9}}
                className='w-6 mx-2'
            >
                <GithubIcon/>
            </motion.a>
            <motion.a href="https://pinterest.com" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale: 0.9}}
                className='w-6 ml-2'
            >
                <PinterestIcon/>
            </motion.a>
        </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        {isMounted && <Logo />}
      </div>
    </header>
  );
}

export default NavBar;
