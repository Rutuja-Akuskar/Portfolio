// import React from 'react';
// import { Helmet } from 'react-helmet';
// import PageTransition from '../components/PageTransition';
// import Gallery from '../components/Gallery';
// import { motion } from 'framer-motion';
// import { Sparkles, ShieldCheck, Dumbbell, Video } from 'lucide-react';
// import { Button } from '../components/ui/button';
// import { useToast } from '../components/ui/use-toast';

// const FacilityHighlights = () => {
//     const highlights = [
//         { icon: Sparkles, title: "Modern & Clean", description: "Our clinic is designed to be a bright, clean, and welcoming space for all our patients." },
//         { icon: ShieldCheck, title: "Safe & Private", description: "We offer private treatment rooms to ensure your comfort and confidentiality during sessions." },
//         { icon: Dumbbell, title: "Advanced Equipment", description: "We use state-of-the-art equipment to provide the most effective and efficient treatments possible." },
//     ];
//     return (
//         <section className="py-20 bg-card border-y">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, amount: 0.3 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-center mb-16"
//                 >
//                     <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">
//                         A Facility Built for <span className="gradient-text">Your Success</span>
//                     </h2>
//                      <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
//                         Every detail of our clinic is tailored to support your healing journey.
//                     </p>
//                 </motion.div>
//                 <div className="grid md:grid-cols-3 gap-8">
//                     {highlights.map((highlight, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 50 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true, amount: 0.3 }}
//                             transition={{ delay: index * 0.15, duration: 0.5 }}
//                             className="bg-background p-8 rounded-2xl shadow-lg border text-center"
//                         >
//                             <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
//                                 <highlight.icon className="w-8 h-8 text-brand-teal" />
//                             </div>
//                             <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
//                             <p className="text-muted-foreground">{highlight.description}</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// const VirtualTourSection = () => {
//     const { toast } = useToast();
//     const handleTourClick = () => {
//         toast({
//             title: "🚧 Virtual Tour Coming Soon!",
//             description: "This interactive feature is under development. Stay tuned! 🚀",
//         });
//     };
//     return (
//         <section className="py-20 bg-background">
//             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, amount: 0.3 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <Video className="w-12 h-12 text-brand-teal mx-auto mb-4" />
//                     <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">
//                        Take a <span className="gradient-text">Virtual Tour</span>
//                     </h2>
//                     <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
//                         Can't visit in person? Explore our clinic from the comfort of your home with our upcoming interactive virtual tour.
//                     </p>
//                     <Button onClick={handleTourClick} size="lg" className="bg-brand-teal hover:bg-brand-green text-white">
//                         Launch Tour (Coming Soon)
//                     </Button>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };


// const GalleryPage = () => {
//   return (
//     <PageTransition>
//       <Helmet>
//         <title>Clinic Gallery | Dr. Rutuja's Physiotherapy Clinic</title>
//         <meta name="description" content="Take a virtual tour of our modern, state-of-the-art physiotherapy clinic. See our treatment rooms, rehabilitation area, and advanced equipment." />
//       </Helmet>
//       <div className="pt-20">
//         <Gallery />
//         <FacilityHighlights />
//         <VirtualTourSection />
//       </div>
//     </PageTransition>
//   );
// };

// export default GalleryPage;