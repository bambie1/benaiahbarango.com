import Link from "next/link";

const iconStrokeWidth = 1.5;

const SVGLinks = () => {
  return (
    <div className="flex mt-8 lg:mt-12 mb-4 gap-3 lg:gap-5 text-gray-600 items-center">
      <Link
        href="https://dribbble.com/benaiahbarango"
        target="_blank"
        title="Dribbble profile"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={iconStrokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-dribbble hover:text-pink-500 transition duration-150 hover:-translate-y-1"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
        </svg>
      </Link>
      <Link
        href="https://twitter.com/benaiahbarango"
        target="_blank"
        title="Twitter profile"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={iconStrokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-twitter hover:text-[#1DA1F2] transition duration-150 hover:-translate-y-1"
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      </Link>
      <Link
        href="https://github.com/bambie1"
        target="_blank"
        title="Github profile"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={iconStrokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-github hover:text-[#171515] transition duration-150 hover:-translate-y-1"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </Link>
      <Link
        href="https://www.linkedin.com/in/benaiah-ambie-barango/"
        target="_blank"
        title="LinkedIn page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={iconStrokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather featherLinkedin hover:text-[#2A67BD] transition duration-150 hover:-translate-y-1"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </Link>
    </div>
  );
};

export default SVGLinks;
