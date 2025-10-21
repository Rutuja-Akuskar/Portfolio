import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import doctor from '../assets/doctor.png';

export default function LeadHero({ clinicName = '[Clinic Name]' }) {
  const { theme } = useTheme();

  return (
    <section className={`py-12 sm:py-20 ${theme === 'dark' ? 'bg-card text-slate-100' : 'bg-background text-foreground'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image - show on top for small screens, side-by-side on md+ */}
          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-brand-teal/10 to-transparent p-4 sm:p-6">
              <img
                src={doctor}
                alt="Physiotherapy session with clinician working with patient"
                className="w-full h-56 sm:h-64 md:h-80 object-contain rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="order-2 md:order-1">
            <p className="text-sm font-semibold text-brand-teal">🌿 Your Path to a Pain-Free Life Starts Here</p>
            <h1 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
              Because every move matters — from your first step to your strongest stride.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">Dr. Rutuja Physiotherapy Clinic — where healing begins with understanding.</p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <Button asChild className="w-full sm:w-auto bg-brand-teal text-white" size="lg">
                <Link to="/contact" aria-label="Book an appointment">Book an Appointment</Link>
              </Button>

              <Button asChild variant="outline" className="w-full sm:w-auto text-brand-teal" size="lg">
                <Link to="/services" aria-label="See our services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
