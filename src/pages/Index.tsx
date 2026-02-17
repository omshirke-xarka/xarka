import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const About = lazy(() => import("@/components/About"));
const Product = lazy(() => import("@/components/Product"));
const Solutions = lazy(() => import("@/components/Solutions"));
const WhyXarka = lazy(() => import("@/components/WhyXarka"));
const CompanySnapshot = lazy(() => import("@/components/CompanySnapshot"));
const Leadership = lazy(() => import("@/components/Leadership"));
const Careers = lazy(() => import("@/components/Careers"));

const SectionSkeleton = () => (
  <div className="section-padding bg-background min-h-[300px] animate-pulse" aria-hidden="true" />
);

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <About />
        <Product />
        <Solutions />
        <WhyXarka />
        <CompanySnapshot />
        <Leadership />
        <Careers />
      </Suspense>
    </main>
    <Footer />
  </>
);

export default Index;
