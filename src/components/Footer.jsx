import { Link } from "react-router-dom";
import {
  github,
  instagram,
  linkedin,
  logo,
  twitter,
  youtube,
} from "../assets/media";
import styles from "../style";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY}`}>
      <div className="sbg-neutral-100">
        <div className="flex flex-col min-[830px]:flex-row items-center justify-between gap-6 pb-10 border-b-2 border-gray-200">
          <img className="h-[32px] w-[124px]" src={logo} alt="logo" />
          <ul className="flex flex-col sm:flex-row items-center gap-5 sm:gap-12">
            <li>
              <Link
                to="/home"
                className="text-lg font-normal text-gray-800 transition-all duration-300 hover:text-blue-600 focus-within:text-blue-600 focus-within:outline-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg font-normal text-gray-800 transition-all duration-300 hover:text-blue-600 focus-within:text-blue-600 focus-within:outline-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="text-lg font-normal text-gray-800 transition-all duration-300 hover:text-blue-600 focus-within:text-blue-600 focus-within:outline-0"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-lg font-normal text-gray-800 transition-all duration-300 hover:text-blue-600 focus-within:text-blue-600 focus-within:outline-0"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="pt-7 flex flex-col min-[520px]:flex-row items-center justify-between gap-6">
          <ul className="flex items-center gap-9">
            <li>© 2024 Nakuja Project. All rights reserved.</li>
          </ul>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/nakujaproject"
              target="_blank"
              className="border border-gray-300 p-2 rounded-full aspect-square text-gray-700 transition-all duration-500 hover:text-blue-600 hover:border-blue-600 focus-within:outline-0 focus-within:text-blue-600 focus-within:border-blue-600"
            >
              <img src={github} alt="github" loading="lazy"  />
            </a>
            <a
              href="https://www.youtube.com/channel/UCE67lrxSyV97KVOOqOtIdrQ"
              target="_blank"
              className="border border-gray-300 p-2 rounded-full aspect-square text-gray-700 transition-all duration-500 hover:text-blue-600 hover:border-blue-600 focus-within:outline-0 focus-within:text-blue-600 focus-within:border-blue-600"
            >
              <img src={youtube} alt="YouTube" loading="lazy"  />
            </a>
            <a
              href="https://www.linkedin.com/company/nakuja-project/"
              target="_blank"
              className="border border-gray-300 p-2 rounded-full aspect-square text-gray-700 transition-all duration-500 hover:text-blue-600 hover:border-blue-600 focus-within:outline-0 focus-within:text-blue-600 focus-within:border-blue-600"
            >
              <img src={linkedin} alt="LinkedIn" loading="lazy" />
            </a>
            <a
              href="https://twitter.com/Nakuja6"
              target="_blank"
              className="border border-gray-300 p-2 rounded-full aspect-square text-gray-700 transition-all duration-500 hover:text-blue-600 hover:border-blue-600 focus-within:outline-0 focus-within:text-blue-600 focus-within:border-blue-600"
            >
              <img src={twitter} alt="Twitter" loading="lazy" />
            </a>
            <a
              href="https://www.instagram.com/nakujaproject/"
              target="_blank"
              className="border border-gray-300 p-2 rounded-full aspect-square text-gray-700 transition-all duration-500 hover:text-blue-600 hover:border-blue-600 focus-within:outline-0 focus-within:text-blue-600 focus-within:border-blue-600"
            >
              <img src={instagram} alt="Insta" loading="lazy"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
