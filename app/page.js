"use client";
import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Coding",
        "Web Development",
        "Software Engineering",
        "Data Science",
        "Machine Learning",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center bg-gray-200">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-800 md:text-4xl">
            A <span className="font-semibold">free repository</span> for
            community <br className="hidden lg:block" /> components using{" "}
            <span className="font-semibold underline decoration-primary">
              <span ref={el} />
            </span>
          </h1>
          <div>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Open source Tailwind UI components and templates to{" "}
              <br className="hidden lg:block" /> bootstrap your new apps,
              projects or landing sites!
            </p>
          </div>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            ></form>
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
      {/* Purchase  */}
      <section className="container px-4 py-10 mx-auto text-center bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-semibold text-gray-800  dark:text-gray-200 md:text-4xl">
          Choose Your Plan
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Find the plan that suits you best!
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-8 ">
          {/* Free Plan */}
          <div className="max-w-xs p-6 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-300 hover:scale-105 transition-transform duration-300">
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
            <button className="w-full px-4 py-2 mt-6 text-white bg-primary rounded-lg hover:bg-primary/70 focus:outline-none dark:text-black">
              Get Started
            </button>
          </div>

          {/* Standard Plan */}
          <div className="max-w-xs p-6 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-300 hover:scale-105 transition-transform duration-300">
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
            <button className="w-full px-4 py-2 mt-6 text-white bg-primary rounded-lg hover:bg-primary/70 focus:outline-none dark:text-black">
              Upgrade
            </button>
          </div>

          {/* Premium Plan */}
          <div className="max-w-xs p-6 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-300 hover:scale-105 transition-transform duration-300 ">
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
            <button className="w-full px-4 py-2 mt-6 text-white bg-primary rounded-lg hover:bg-primary/70 focus:outline-none dark:text-black">
              Go Premium
            </button>
          </div>
        </div>
      </section>
      <section className="container px-4 py-10 mx-auto text-center bg-gray-200">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-800 md:text-4xl">
          What Our Users Say
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Hear from our satisfied users!
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {/* Testimonial 1 */}
          <div className="max-w-xs p-6 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-300">
              "This repository has transformed the way I build my projects! The
              components are easy to use and look fantastic."
            </p>
            <h4 className="mt-4 font-semibold text-gray-800 dark:text-gray-200">
              Jane Doe
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Web Developer
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="max-w-xs p-6 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-300">
              "I love the variety of components available. It saved me so much
              time in my projects!"
            </p>
            <h4 className="mt-4 font-semibold text-gray-800 dark:text-gray-200">
              John Smith
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              UI/UX Designer
            </p>
          </div>
        </div>
      </section>
      <section className="container px-4 py-10 mx-auto text-center bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 md:text-4xl">
          Latest Blog Posts
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Discover tips, resources, and updates from our team!
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {/* Blog Post 1 */}
          <div className="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-300 hover:scale-105 transition-transform duration-300">
            <img
              src="/tailwind.webp"
              alt="Getting Started with Tailwind CSS"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Getting Started with Tailwind CSS
            </h3>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Learn the basics of Tailwind CSS and how to quickly set up your
              project for faster, easier styling.Tailwind's utility-first
              approach simplifies designing responsive, modern, and visually
              appealing web applications.
            </p>
            <button className="w-full px-4 py-2 mt-6 text-white bg-primary rounded-lg hover:bg-primary/70 focus:outline-none dark:bg-primary dark:hover:bg-primary/80 dark:text-black">
              Read More
            </button>
          </div>

          {/* Blog Post 2 */}
          <div className="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-300 hover:scale-105 transition-transform duration-300">
            <img
              src="/component-10.webp"
              alt="10 Essential UI Components for Web Apps"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
              10 Essential UI Components for Web Apps
            </h3>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Discover the must-have UI components that will enhance user
              experience and streamline your development process.
            </p>
            <button className="w-full px-4 py-2 mt-6 text-white bg-primary rounded-lg hover:bg-primary/70 focus:outline-none dark:bg-primary dark:hover:bg-primary/80 dark:text-black">
              Read More
            </button>
          </div>

          {/* Blog Post 3 */}
          <div className="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-300 hover:scale-105 transition-transform duration-300">
            <img
              src="/shadcn.webp"
              alt="Advanced Customization with ShadCN"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Advanced Customization with ShadCN
            </h3>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Discover how ShadCN can help you create highly customizable UI
              components with a consistent design language.
            </p>
            <button className="w-full px-4 py-2 mt-6 text-white bg-primary rounded-lg hover:bg-primary/70 focus:outline-none dark:bg-primary dark:hover:bg-primary/80 dark:text-black">
              Read More
            </button>
          </div>
        </div>
      </section>

      <section className="container px-4 py-10 mx-auto text-center ">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Have questions? We have answers!
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {/* FAQ Item 1 */}
          <div className="max-w-xs p-6 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform duration-300">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">
              How do I get started?
            </h4>
            <p className="mt-2 text-gray-500 dark:text-gray-300">
              Simply choose a plan and sign up to start using the components!
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="max-w-xs p-6 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform duration-300">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">
              Are there any free options?
            </h4>
            <p className="mt-2 text-gray-500 dark:text-gray-300">
              Yes, we offer a free plan that provides access to basic
              components.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
