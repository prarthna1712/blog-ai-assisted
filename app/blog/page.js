import React from "react";

const Blog = () => {
  const blogs = [
    {
      title: "Introduction to Next.js",
      description:
        "Learn the basics of Next.js and why it’s a great framework for building React applications.",
      slug: "introduction-to-nextjs",
      date: "2024-11-06",
      author: "John Doe",
      image: "/images/nextjs.jpg",
    },
    {
      title: "Advanced React Patterns",
      description:
        "Explore advanced patterns in React to build powerful, scalable applications.",
      slug: "advanced-react-patterns",
      date: "2024-11-04",
      author: "Jane Smith",
      image: "/images/react-patterns.jpg",
    },
    // Add more blogs as needed
  ];

  return (
    <div className="container mx-auto px-4 py-10 dark:bg-gray-200">
      <h1 className="text-3xl font-bold text-center mb-8 dark:text-gray-700">
        Our Blog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <div className="text-gray-500 text-sm mb-2">
                <p>By {blog.author}</p>
                <p>{new Date(blog.date).toLocaleDateString()}</p>
              </div>
              <a
                href={`/blog/${blog.slug}`}
                className="text-indigo-600 hover:text-indigo-800 font-semibold"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;