import BlogList from "@/components/BlogList";
import Hero from "@/components/Hero";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
export default function Home() {
  return (
    <main className="mt-36">
      <Header />
      <Hero />
      <BlogList />
      <Footer />
    </main>
  );
}
