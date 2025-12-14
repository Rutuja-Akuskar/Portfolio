import React from "react";
import { Helmet } from "react-helmet";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import blogimg from "../assets/blogimg.png";

// Sample blogs data (replace with real content or fetch from API)
const blogs = [
  {
    id: 1,
    title: "Top 5 Exercises to Relieve Back Pain",
    excerpt:
      "Discover the most effective exercises to strengthen your back and prevent chronic pain. Suitable for all ages.",
    image: "https://images.unsplash.com/photo-1597430844900-2d7ff7c2e0ed?auto=format&fit=crop&w=800&q=80",
    link: "/blog/1",
  },
  {
    id: 2,
    title: "Post-Surgery Physiotherapy: What to Expect",
    excerpt:
      "Recover faster and safer with our post-surgery physiotherapy guide. Tips on regaining strength and mobility.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
    link: "/blog/2",
  },
  {
    id: 3,
    title: "How to Improve Posture at Home",
    excerpt:
      "Simple techniques and exercises to improve posture while working from home or sitting long hours.",
    image: "https://images.unsplash.com/photo-1584697964402-7e192e2e4d39?auto=format&fit=crop&w=800&q=80",
    link: "/blog/3",
  },
  {
    id: 4,
    title: "The Importance of Stretching Before Workouts",
    excerpt:
      "Learn why stretching is crucial for injury prevention and better performance during physical activities.",
    image: "https://images.unsplash.com/photo-1594737625785-2076f2c4f5b3?auto=format&fit=crop&w=800&q=80",
    link: "/blog/4",
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
  hover: { scale: 1.05, boxShadow: "0px 15px 25px rgba(0,0,0,0.2)" },
};

const BlogsPage = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <Helmet>
        <title>Blogs | Dr. Rutuja's Physiotherapy Clinic</title>
        <meta
          name="description"
          content="Read our latest blogs on physiotherapy, rehabilitation, posture correction, and wellness tips to improve your health and recovery journey."
        />
      </Helmet>

      <div className="pt-20">
        {/* 🌿 Hero Section */}
       {/* 🌿 Hero Section */}
<section className="py-24 bg-card border-b">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

    {/* Left Content */}
    <div className="text-start">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-bold mb-6 leading-snug"
      >
        Our <span className="gradient-text">Blog & Insights</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-muted-foreground text-lg max-w-xl"
      >
        Stay updated with the latest tips, research, and insights from the world of physiotherapy,
        rehabilitation, and wellness.
      </motion.p>
    </div>

    {/* Right Side Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="flex justify-center"
    >
      <img
        src={blogimg}
        alt="Physiotherapy Blogs"
        className="object-contain rounded-xl"
      />
    </motion.div>

  </div>
</section>


        {/* 📰 Blogs Grid */}
        <section className="py-24 bg-background border-b">
          <motion.div
            className="max-w-7xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Latest <span className="gradient-text">Blogs</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-card border rounded-2xl overflow-hidden cursor-pointer flex flex-col"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                    <p className="text-muted-foreground flex-1">{blog.excerpt}</p>
                    <Button
                      onClick={() => navigate(blog.link)}
                      size="sm"
                      variant="outline"
                      className="mt-4 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white"
                    >
                      Read More
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
};

export default BlogsPage;
