import Link from "next/link";

import {
  DribbbleIcon,
  GithubIcon,
  HashnodeIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./Icons";

const SVGLinks = () => {
  return (
    <div className="flex mt-8 lg:mt-12 mb-4 gap-3 lg:gap-5 text-gray-600 items-center">
      <Link
        href="https://benaiah.hashnode.dev/"
        target="_blank"
        title="Hashnode Blog"
        className="rounded-lg transition duration-150 hover:-translate-y-1"
      >
        <HashnodeIcon />
      </Link>
      <Link
        href="https://dribbble.com/benaiahbarango"
        target="_blank"
        title="Dribbble profile"
        className="hover:text-dribbble transition duration-150 hover:-translate-y-1"
      >
        <DribbbleIcon />
      </Link>
      <Link
        href="https://twitter.com/benaiahbarango"
        target="_blank"
        title="Twitter profile"
        className="hover:text-[#1DA1F2] transition duration-150 hover:-translate-y-1"
      >
        <TwitterIcon />
      </Link>
      <Link
        href="https://github.com/bambie1"
        target="_blank"
        title="Github profile"
        className="hover:text-[#171515] transition duration-150 hover:-translate-y-1"
      >
        <GithubIcon />
      </Link>
      <Link
        href="https://www.linkedin.com/in/benaiah-ambie-barango/"
        target="_blank"
        title="LinkedIn page"
        className="hover:text-[#2A67BD] transition duration-150 hover:-translate-y-1"
      >
        <LinkedInIcon />
      </Link>
    </div>
  );
};

export default SVGLinks;
