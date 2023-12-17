import { getContentbyKey } from "@/database/content.query";
import { getAllSocialMedias } from "@/database/socialMedia.query";
import Image from "next/image";
import Link from "next/link";
import Me from "../../../../public/Me.png";
import { StandardLinkButton } from "@/app/components/Buttons";

export default async function Header() {
  const socialMedias = await getAllSocialMedias();
  const aboutMe = await getContentbyKey("about-me");

  return (
    <section id="home" className="mb-32 w-full py-12">
      <header className="flex w-full flex-col items-center justify-between gap-12 md:flex-row md:gap-0">
        <div className="flex w-full flex-col gap-2 md:w-1/2 md:gap-4">
          <h1 className="text-4xl leading-snug drop-shadow-glow md:text-7xl">
            About Me
          </h1>
          <p className="mt-5 text-sm leading-7 text-neutral-400 sm:text-base lg:text-xl">
            {aboutMe?.content || "Something wrong occured."}
          </p>
          <div className="mt-10 flex flex-col items-start gap-7 md:mt-12 md:gap-[42px] lg:flex-row lg:items-center">
            <StandardLinkButton href={"/blog"}>
              My Personal Blog{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="m-1 h-4 w-4 fill-current transition-transform duration-500 group-hover:translate-x-1"
              >
                <path
                  d="M1 8.99998H12.17L7.29 13.88C6.9 14.27 6.9 14.91 7.29 15.3C7.68 15.69 8.31 15.69 8.7 15.3L15.29 8.70998C15.3827 8.61747 15.4563 8.50758 15.5064 8.3866C15.5566 8.26563 15.5824 8.13595 15.5824 8.00498C15.5824 7.87401 15.5566 7.74433 15.5064 7.62336C15.4563 7.50238 15.3827 7.39249 15.29 7.29998L8.71 0.699979C8.61742 0.607397 8.50751 0.533957 8.38654 0.483852C8.26558 0.433747 8.13593 0.407959 8.005 0.407959C7.87407 0.407959 7.74442 0.433747 7.62346 0.483852C7.50249 0.533957 7.39258 0.607397 7.3 0.699979C7.20742 0.792561 7.13398 0.902472 7.08387 1.02344C7.03377 1.1444 7.00798 1.27405 7.00798 1.40498C7.00798 1.53591 7.03377 1.66556 7.08387 1.78652C7.13398 1.90749 7.20742 2.0174 7.3 2.10998L12.17 6.99998H1C0.45 6.99998 0 7.44998 0 7.99998C0 8.54998 0.45 8.99998 1 8.99998Z"
                  fill="current"
                />
              </svg>
            </StandardLinkButton>
            <div className="flex items-center gap-4 md:gap-6">
              {socialMedias.map((socialMedia, i) => {
                return (
                  <a
                    key={i}
                    href={socialMedia.url}
                    target="_blank"
                    className="rounded-full border border-white p-3 transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 fill-current md:h-6 md:w-6"
                      dangerouslySetInnerHTML={{
                        __html: `<title>${socialMedia.name}</title> ${socialMedia.svgPath}`,
                      }}
                    ></svg>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <Image
            src={Me}
            alt="Me"
            width={2731}
            height={4096}
            className="w-full rounded-xl grayscale"
            placeholder="blur"
            priority
          />
        </div>
      </header>
    </section>
  );
}
