import React from "react";
import { Helmet } from "react-helmet";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import { HeartHandshake, Stethoscope, ShieldCheck, Users, Lightbulb, ClipboardCheck } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import eth from "../assets/eth.png";
import Ethical from "../components/Ethical";

// Updated ethics array with all points included
const ethics = [
  {
    icon: <HeartHandshake className="w-10 h-10 text-teal-500" />,
    title: "Compassionate Care",
    desc: "Every patient is treated with empathy, dignity, and respect. We listen before we treat.",
  },
  {
    icon: <Users className="w-10 h-10 text-teal-500" />,
    title: "Patient Autonomy",
    desc: "The patient has the right to choose or refuse any treatment, and we respect their decisions at all times.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-teal-500" />,
    title: "Best Interest of the Patient",
    desc: "Our practitioners always act in the best interest of the patient, ensuring safety, effectiveness, and well-being.",
  },
  {
    icon: <ClipboardCheck className="w-10 h-10 text-teal-500" />,
    title: "Do No Harm",
    desc: "We adhere to the principle of non-maleficence: first, do no harm in every treatment and therapy we provide.",
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-teal-500" />,
    title: "Fairness & Equality",
    desc: "We ensure fair distribution of healthcare resources and provide treatments with equality and impartiality.",
  },
  {
    icon: <Stethoscope className="w-10 h-10 text-teal-500" />,
    title: "Patient & Practitioner Dignity",
    desc: "Both patients and our healthcare team are treated with the utmost dignity, respect, and professionalism.",
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-teal-500" />,
    title: "Evidence-Based Practice",
    desc: "Our physiotherapy methods are backed by clinical research and global best standards.",
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-teal-500" />,
    title: "Continuous Learning",
    desc: "Our team stays updated with the latest physiotherapy advancements and techniques.",
  },
  {
    icon: <Stethoscope className="w-10 h-10 text-teal-500" />,
    title: "Safe Clinical Practices",
    desc: "We maintain high hygiene standards, sanitized equipment, and safe treatment protocols.",
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

const floatIcon = {
  animate: {
    y: [0, -10, 0],
    transition: { yoyo: Infinity, duration: 3, ease: "easeInOut" },
  },
};

const EthicsPractices = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <Helmet>
        <title>Ethics & Practices | Dr. Rutuja's Physiotherapy Clinic</title>
        <meta
          name="description"
          content="Learn about our clinic’s ethical standards, safe physiotherapy practices, and our unwavering commitment to patient care and professionalism."
        />
      </Helmet>

      <div className="pt-20">

        {/* 🌿 Hero Section */}
<section className="py-24 bg-card border-b">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* 🖼️ LEFT IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="w-full flex justify-center"
    >
      <img
        src={eth}   // change if jpg/webp
        alt="Ethics"
        className="w-full h-[380px] object-contain rounded-2xl"
      />
    </motion.div>

    {/* 📝 RIGHT CONTENT */}
    <div className="text-center md:text-left">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-bold mb-6"
      >
        Our <span className="gradient-text">Ethics & Clinical Practices</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-muted-foreground text-lg"
      >
        At Dr. Rutuja’s Physiotherapy Clinic, our values define the care we deliver — honest, evidence-based, and guided by empathy.
      </motion.p>
    </div>

  </div>
</section>

        {/* ⚖️ Ethical Principles */}
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
              Core <span className="gradient-text">Ethical Principles</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ethics.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-card border rounded-2xl p-6 text-center cursor-pointer"
                >
                  <motion.div variants={floatIcon} className="flex justify-center mb-4">
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <Ethical />

        {/* 🩺 Commitment Section */}
        <section className="py-24 bg-card border-b">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Our <span className="gradient-text">Commitment to You</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8"
            >
              Your recovery journey is personal, and we’re here to support it with honesty, safety, and the utmost care — every step of the way.
            </motion.p>

            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Button
                onClick={() => navigate("/contact")}
                size="lg"
                variant="outline"
                className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white"
              >
                Book a Consultation
              </Button>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default EthicsPractices;
