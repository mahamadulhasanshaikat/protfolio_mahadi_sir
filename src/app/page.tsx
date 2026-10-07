// src/app/page.tsx
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ResearchHub from '@/components/ResearchHub';
import TeachingSection from '@/components/TeachingSection';
import BentoAchievements from '@/components/BentoAchievements';
import JourneyTimeline from '@/components/JourneyTimeline';
import OpEdSection from '@/components/OpEdSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-slate-50 dark:bg-[#050811] text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Navbar />
        {/* ১. পরিচিতি ও অফিসিয়াল ডসিয়ার কার্ড */}
        <Hero />
        
        {/* ২. গুরুত্বপূর্ণ প্রভাব মেট্রিক্স বার */}
        <Stats />
        
        {/* ৩. গবেষণা প্রবন্ধ ও ফিল্টারিং হাব (#research) */}
        <ResearchHub />
        
        {/* ৪. পাঠদান ও থিসিস সুপারভিশন (#teaching) */}
        <TeachingSection />
        
        {/* ৫. প্রধান সম্মাননা ও প্রাতিষ্ঠানিক অর্জনসমূহ (#milestones) */}
        <BentoAchievements />
        
        {/* ৬. পেশাগত ও একাডেমিক ক্যারিয়ার জার্নি (#journey) */}
        <JourneyTimeline />
        
        {/* ৭. প্রকাশিত মতামত ও সম্পাদকীয় কলাম (#articles) */}
        <OpEdSection />
        
        {/* ৮. অফিস আওয়ার ও প্রাতিষ্ঠানিক যোগাযোগ (#contact) */}
        <ContactSection />
        
        <Footer />
      </main>
    </SmoothScroll>
  );
}