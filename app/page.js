// ============================================
// app/page.js
// ============================================

import Hero from "./hero/page.js"
import Portfolio from './portfolio/page.js';
import About from './about/page.js';
import Services from './services/page.js';
import Contact from './contact/page.js';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}

