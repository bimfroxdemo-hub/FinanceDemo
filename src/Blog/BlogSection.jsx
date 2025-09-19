import { FaRegClock } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const blogPosts = [
  {
    title: "Tax Saving Tips for 2025",
    description:
      "Discover the latest strategies to maximize your tax savings while staying compliant with new regulations.",
    date: "March 15, 2025",
    readTime: "5 min read",
    category: "Tax Planning",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Smart Investment Strategies",
    description:
      "Learn how to build a diversified portfolio that balances risk and returns for long-term wealth creation.",
    date: "March 12, 2025",
    readTime: "7 min read",
    category: "Investments",
    image:
      "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Business Growth Ideas",
    description:
      "Explore innovative financing options and growth strategies to scale your business effectively.",
    date: "March 10, 2025",
    readTime: "6 min read",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Financial Tips & Insights
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Stay informed with expert insights and practical tips to enhance your financial knowledge
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-64">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <FaRegClock className="w-4 h-4 mr-1" />
                    {post.readTime} • {post.date}
                  </div>
                  <button className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium group-hover:underline">
                    Read More <FaArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
