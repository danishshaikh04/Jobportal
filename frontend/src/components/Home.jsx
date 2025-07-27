import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Features from './Features'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LogoCarousel from './LogoCarousel'
import Stats from './Stats'
import CTA from './CTA'

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* 🌑 Dark mode background */}
      <div className="hidden dark:block absolute inset-0 -z-10 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]" />
      </div>

      {/* ☀️ Light mode background */}
  <div className="dark:hidden absolute inset-0 -z-10 bg-white">
  <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
</div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LogoCarousel />
      <LatestJobs />
      <Stats />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
