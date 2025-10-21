import React from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '../components/PageTransition';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';
import { PenSquare } from 'lucide-react';
import marathon from '../assets/marathon.png';
import ALC from '../assets/ALC.png';

const SuccessStoriesSection = () => {
    const stories = [
        {
            title: "From debilitating back pain to running marathons",
            story: "John, a 45-year-old software developer, came to us with severe chronic back pain that kept him from his passion for running. Through a combination of manual therapy, core strengthening, and ergonomic advice, he is now pain-free and recently completed his first full marathon.",
            image: marathon,
        },
        {
            title: "A swift recovery after ACL surgery",
            story: "Maria, a college soccer player, underwent ACL reconstruction surgery. Our intensive post-surgery rehab program focused on regaining strength, stability, and confidence. She returned to the field stronger than before, just in time for the new season.",
            image: ALC,
        },
    ];

    return (
        <section className="py-20 bg-card border-y">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">
                       In-Depth <span className="gradient-text">Success Stories</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                        A closer look at the transformative journeys of our patients.
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-8">
                    {stories.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="bg-background rounded-2xl overflow-hidden shadow-lg border"
                        >
                            <img src={item.image} alt={item.title} className="w-full h-56 object-contain" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground">{item.story}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ShareStorySection = () => {
    const { toast } = useToast();
    const handleShare = () => {
        toast({
            title: "Thank you for your interest!",
            description: "This feature is coming soon. We'd love to hear your story! 🚀",
        });
    };
    return (
        <section className="py-20 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <PenSquare className="w-12 h-12 text-brand-teal mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">
                       Share Your <span className="gradient-text">Success Story</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                        Has our clinic helped you on your recovery journey? Your story can inspire others to take the first step towards better health.
                    </p>
                    <Button
  onClick={handleShare}
  size="lg"
  variant="outline"
  className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white"
>
  Share Your Story
</Button>

                </motion.div>
            </div>
        </section>
    )
}

const TestimonialsPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Patient Testimonials | Dr. Rutuja's Clinic</title>
        <meta name="description" content="Read real stories and testimonials from patients who have successfully recovered and improved their quality of life with Dr. Rutuja's care." />
      </Helmet>
      <div className="pt-20">
        <Testimonials />
        <SuccessStoriesSection />
        <ShareStorySection />
        {/* <Contact /> */}
      </div>
    </PageTransition>
  );
};

export default TestimonialsPage;