import React from "react";

export default function Home() {
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for
            community <br className="hidden lg:block" /> components using
            <span
              className="font-semibold underline decoration-primary"
              href="https://tailwindcss.com/"
            >
              Tailwind CSS
            </span>
          </h1>
          <div>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Open source Tailwind UI components and templates to{" "}
              <br className="hidden lg:block" /> bootstrap your new apps,
              projects or landing sites!
            </p>
          </div>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            >
              <input
                type="search"
                name="query"
                placeholder="Search Components"
                required
                className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      <section className="container px-4 py-10 mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 md:text-4xl">
          Choose Your Plan
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Find the plan that suits you best!
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {/* Free Plan */}
          <div className="max-w-xs p-6 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Free
            </h3>
            <p className="mt-4 text-gray-500 dark:text-gray-300">
              Access basic components for free.
            </p>
            <p className="mt-2 text-3xl font-bold text-gray-800 dark:text-gray-200">
              $0
            </p>
            <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
              <li>Basic components</li>
              <li>Community support</li>
              <li>Limited customization</li>
            </ul>
            <button className="w-full px-4 py-2 mt-6 text-white bg-primary rounded-lg hover:bg-primary/70 focus:outline-none">
              Get Started
            </button>
          </div>

          {/* Standard Plan */}
          <div className="max-w-xs p-6 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Standard
            </h3>
            <p className="mt-4 text-gray-500 dark:text-gray-300">
              Get more templates and features.
            </p>
            <p className="mt-2 text-3xl font-bold text-gray-800 dark:text-gray-200">
              $10/month
            </p>
            <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
              <li>All Free features</li>
              <li>More component options</li>
              <li>Priority support</li>
            </ul>
            <button className="w-full px-4 py-2 mt-6 text-white bg-primary rounded-lg hover:bg-primary/70 focus:outline-none">
              Upgrade
            </button>
          </div>

          {/* Premium Plan */}
          <div className="max-w-xs p-6 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Premium
            </h3>
            <p className="mt-4 text-gray-500 dark:text-gray-300">
              Unlock all components and custom features.
            </p>
            <p className="mt-2 text-3xl font-bold text-gray-800 dark:text-gray-200">
              $25/month
            </p>
            <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
              <li>All Standard features</li>
              <li>Exclusive components</li>
              <li>24/7 Support</li>
            </ul>
            <button className="w-full px-4 py-2 mt-6 text-white bg-primary rounded-lg hover:bg-primary/70 focus:outline-none">
              Go Premium
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
