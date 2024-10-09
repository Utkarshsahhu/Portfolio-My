import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import Head from "next/head";

const Projects = () => {
  return (
    <div className="h-screen mx-5 sm:mx-auto pt-32">
      <Head>
        <title>Projects | Vijay Brat Pandey</title>
      </Head>
      <h1 className="font-bold text-3xl text-center"></h1>
      <div className="max-w-5xl md:px-4 py-8 pb-32 mx-auto space-y-28">
        <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
            Blog-App
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="aspect-w-5 aspect-h-3">
              <Image
                src="/images/project-images/BlogApp.png"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs md:text-base">
                BloggApp simplifies blog post creation and management by
                leveraging modern technologies like React, Tailwind CSS, Redux
                Toolkit, and TinyMCE. Users enjoy a seamless experience for
                writing, formatting, and publishing content, with user
                authentication powered by AppWrite. The integrated TinyMCE
                editor offers a user-friendly interface, while Redux Toolkit
                ensures efficient state management
              </p>
              <p className="text-xs md:text-base">
                <a
                  className="text-blue-500 hover:text-blue-700"
                  href="https://luminous-pasca-7c1f32.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BloggApp Live Demo
                </a>
              </p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                  React, Tailwind Css, Appwrite, Redux Toolkit, TinyMCE
                </p>
              </cite>
              <div className="flex pt-8 space-x-4">
                <div>
                  <a
                    href="https://github.com/vijaybrat/BlogApp/tree/main"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size="30px" />
                  </a>
                </div>
              </div>
            </blockquote>
          </div>
        </section>

        <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
            Nike Landing Page
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src="/images/project-images/Nike.png"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs md:text-base">
                The Nike Company Landing Page project is a web application
                developed using React and Tailwind CSS. It serves as a visually
                stunning representation of the Nike brand, offering users a
                seamless browsing experience across various devices and screen
                sizes.
              </p>
              <p className="text-xs md:text-base">
                <a
                  className="text-blue-500 hover:text-blue-700"
                  href="https://luminous-pasca-7c1f32.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nike Landing Page Live Demo
                </a>
              </p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                  Vite|React Tailwind Css
                </p>
              </cite>
              <div className="flex pt-8 space-x-4">
                <div>
                  <a
                    href="https://github.com/vijaybrat/NikeFrontend/tree/main"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size="30px" />
                  </a>
                </div>
              </div>
            </blockquote>
          </div>
        </section>

        <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
            Currency Converter
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src="/images/project-images/cur.png"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs md:text-base">
                Developed a currency conversion app using React, integrating
                custom hooks for real-time currency information. Implemented a
                user-friendly interface allowing seamless conversion between
                currencies. Applied modern styling techniques, responsive
                design, and dynamic functionality for a polished and intuitive
                user experience.
              </p>
              <p className="text-xs md:text-base">
                <a
                  className="text-blue-500 hover:text-blue-700"
                  href="https://splendid-haupia-95f534.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Currency Converter Page Live Demo
                </a>
              </p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                  Vite|React, Tailwind Css, Custom Hooks
                </p>
              </cite>
              <div className="flex pt-8 space-x-4">
                <div>
                  <a
                    href="https://github.com/vijaybrat/Currency_Converter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size="30px" />
                  </a>
                </div>
              </div>
            </blockquote>
          </div>
        </section>

        <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
            Password Generator
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src="/images/project-images/PasswordGen.png"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs md:text-base">
                The Password Generator is a web application built with React and
                styled with Tailwind CSS, designed to provide users with a
                convenient tool for generating secure and customizable
                passwords. In an age where online security is paramount, this
                application empowers users to create strong and unique passwords
                effortlessly.
              </p>
              <p className="text-xs md:text-base">
                <a
                  className="text-blue-500 hover:text-blue-700"
                  href="https://lambent-lolly-48e3f7.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Password Generator Live Demo
                </a>
              </p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                  Vite|React, Tailwind Css
                </p>
              </cite>
              <div className="flex pt-8 space-x-4">
                <div>
                  <a
                    href="https://github.com/vijaybrat/Password-Generator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size="30px" />
                  </a>
                </div>
              </div>
            </blockquote>
          </div>
        </section>

        <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
            WishList App
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src="/images/project-images/TodoApp.png"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs md:text-base">
                Developed a currency conversion app using React, integrating
                custom hooks for real-time currency information. Implemented a
                user-friendly interface allowing seamless conversion between
                currencies. Applied modern styling techniques, responsive
                design, and dynamic functionality for a polished and intuitive
                user experience.
              </p>
              <p className="text-xs md:text-base">
                <a
                  className="text-blue-500 hover:text-blue-700"
                  href="https://scintillating-sunflower-3ce44e.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WishList App Live Demo
                </a>
              </p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                  Vite|React, Tailwind Css
                </p>
              </cite>
              <div className="flex pt-8 space-x-4">
                <div>
                  <a
                    href="https://github.com/vijaybrat/Currency_Converter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size="30px" />
                  </a>
                </div>
              </div>
            </blockquote>
          </div>
        </section>

        <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
            Myntra Static Clone
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src="/images/project-images/Myntra.png"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs md:text-base">
                The Mytra Landing Page is a modern web application developed
                using React and Tailwind CSS
              </p>
              <p className="text-xs md:text-base">
                <a
                  className="text-blue-500 hover:text-blue-700"
                  href="https://eclectic-tapioca-d97248.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Myntra Static Clone Page Live Demo
                </a>
              </p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                  Html, Css
                </p>
              </cite>
              <div className="flex pt-8 space-x-4">
                <div>
                  <a
                    href="https://github.com/vijaybrat/Myntra_static_clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size="30px" />
                  </a>
                </div>
              </div>
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
