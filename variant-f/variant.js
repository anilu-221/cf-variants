// Change it to a more moder design based on Whoop's style, more minimalistic and clean
// Test: Whoop-inspired full-page redesign for Memory Air

// Utilities
function qs<T extends Element = Element>(sel: string, root: ParentNode = document): T | null {
  return root.querySelector(sel) as T | null;
}
function qsa<T extends Element = Element>(sel: string, root: ParentNode = document): T[] {
  return Array.from(root.querySelectorAll(sel)) as T[];
}

function getText(id: string, fallback = ""): string {
  const el = qs<HTMLElement>(`#${id}`);
  if (!el) return fallback;
  const txt = el.innerText?.trim();
  return txt || fallback;
}
function getImgSrc(id: string, fallback = ""): string {
  const el = qs<HTMLImageElement>(`#${id} img`);
  const src = el?.getAttribute("src") || el?.src || "";
  return src || fallback;
}
function getBuyHref(): string {
  // Prefer explicit buy buttons
  const btn = qs<HTMLAnchorElement>('a[href*="/products/memory-air-device"], a#lp-pom-button-145, a#lp-pom-button-140, a#lp-pom-button-146, a#lp-pom-button-276, a#lp-pom-button-281, a#lp-pom-button-282, a#lp-pom-button-392, a#lp-pom-button-399, a#lp-pom-button-423');
  return btn?.getAttribute('href') || '#';
}

// Content extraction with fallbacks
const content = {
  logo: getImgSrc('lp-pom-image-407') || getImgSrc('lp-pom-image-144') || getImgSrc('lp-pom-image-416'),
  heroHeadline: getText('lp-pom-text-421') || getText('lp-pom-text-117') || 'BIGGEST IMPROVEMENT OF HUMAN MEMORY EVER DISCOVERED',
  heroSub: getText('lp-pom-text-422') || getText('lp-pom-text-118') || 'Prevent and reverse memory loss...WHILE YOU SLEEP',
  buyHref: getBuyHref(),
  metrics: [
    getText('lp-pom-text-215') || 'Neuro Scent Therapy has shown improvements of 226% in healthy adults and 300% in patients with dementia',
    getText('lp-pom-text-133') || 'People reported feeling 4-6 years younger while on Neuro Scent Therapy',
  ],
  productHero: 'https://cdn.coframe.com/assets/memoryair/MemAir2_Lifestyle_Sleep01_01_v02-scaled-6cee6044-eeaf-4896-937e-f53a4599495e.webp',
  benefits: [
    {
      img: 'https://cdn.coframe.com/assets/memoryair/man-sleeping-bed-with-soft-daylight-a0dccc2e-f1dd-4a9f-a000-d5c0bd297a5e.webp',
      title: (getText('lp-pom-text-213') || getText('lp-pom-text-22') || 'IMPROVE MEMORY').replace(/\n/g, ' '),
      desc: getText('lp-pom-text-215') || 'Up to 300% improvement reported in studies.',
    },
    {
      img: getImgSrc('lp-pom-image-222') || getImgSrc('lp-pom-image-234') || getImgSrc('lp-pom-image-166'),
      title: (getText('lp-pom-text-225') || getText('lp-pom-text-29') || 'FEEL YOUNGER').replace(/\n/g, ' '),
      desc: getText('lp-pom-text-226') || 'People reported feeling 4–6 years younger.',
    },
    {
      img: 'https://cdn.coframe.com/assets/memoryair/photo-1758612899162-7f9abfc0d6a3-3fb6e44c-4c9f-4a9c-9c64-fe0a09d01a97.webp',
      title: (getText('lp-pom-text-232') || getText('lp-pom-text-164') || 'FEEL SHARPER').replace(/\n/g, ' '),
      desc: getText('lp-pom-text-233') || 'Clearer mind and more confidence.',
    },
    {
      img: 'https://cdn.coframe.com/assets/memoryair/photo-1510925758641-869d353cecc7-a2b96dc1-6f4b-4c63-9569-3e49cecb79f2.webp',
      title: (getText('lp-pom-text-235') || getText('lp-pom-text-167') || 'FEEL MORE FOCUSED').replace(/\n/g, ' '),
      desc: getText('lp-pom-text-236') || getText('lp-pom-text-168') || 'Reclaimed focus for the moments that matter',
    },
  ],
  howTitle: getText('lp-pom-text-195') || getText('lp-pom-text-238') || 'What Is the Memory Air™ device?',
  howBullets: (() => {
    const ul = qs('#lp-pom-text-197 ul, #lp-pom-text-207 ul');
    if (!ul) return [
      'Everyone knows scents bring back memories',
      'Our NEW science has discovered scents also control memory',
      'Smelling different scents can improve your sense of smell',
      'Improving your sense of smell greatly improves your memory',
      'The Memory Air™ device emits 40 pleasant scents twice nightly',
      'Rotating scents improves smell and memory by up to 300%'
    ];
    return qsa<HTMLLIElement>('li', ul).map(li => li.innerText.trim()).filter(Boolean);
  })(),
  includedTitle: getText('lp-pom-text-199') || getText('lp-pom-text-364') || "What's Included?",
  includedBullets: [
    getText('lp-pom-text-202') || getText('lp-pom-text-365') || 'Auto shipped refills to ensure maximum therapy potency',
  ],
  guarantee: {
    title: (getText('lp-pom-text-391') || '100 % Satisfaction Guaranteed').replace(/\n/g, ' '),
    desc: getText('lp-pom-text-389') || '60 Day No questions asked money back guarantee',
  },
  pressTitle: (getText('lp-pom-text-152') || getText('lp-pom-text-284') || 'Reported in hundreds of articles, programs, and podcasts.').replace(/\n/g, ' '),
  pressLogos: [
    'lp-pom-image-288','lp-pom-image-292','lp-pom-image-296','lp-pom-image-302','lp-pom-image-303','lp-pom-image-308','lp-pom-image-309','lp-pom-image-316','lp-pom-image-317','lp-pom-image-153','lp-pom-image-155','lp-pom-image-157','lp-pom-image-158','lp-pom-image-159','lp-pom-image-160','lp-pom-image-161','lp-pom-image-162'
  ].map(id => getImgSrc(id)).filter(Boolean),
  quotes: [
    { quote: '...Can improve memory by up to 300%, much better than drugs.', author: 'Professor Emerita Dr. Amy Borenstein, USF, UCSD', img: getImgSrc('lp-pom-image-177') },
    { quote: '...Significantly improved memory.', author: 'Associate Professor Dr. Lorene Nelson, Stanford School of Medicine', img: getImgSrc('lp-pom-image-179') },
    { quote: '...Improved memory...No Side Effects.', author: "Professor Emeritus Dr. James Mortimer, USF, World Expert in Alzheimer's", img: getImgSrc('lp-pom-image-182') },
    { quote: '...Convincing Evidence!', author: 'Professor Emeritus Dr. David Thom, Stanford School of Medicine', img: getImgSrc('lp-pom-image-185') },
    { quote: '...Truly Impressive!', author: 'Professor Emeritus Dr. Edward Abramson, CSUC', img: getImgSrc('lp-pom-image-188') },
    { quote: '...A transformative impact!', author: 'Nancy Wassom Bernstein, RN, MS, Nurse Practitioner', img: getImgSrc('lp-pom-image-191') },
  ].filter(q => q.quote),
  footer: {
    privacyHref: qs<HTMLAnchorElement>('#lp-pom-text-411 a, #lp-pom-text-91 a')?.getAttribute('href') || '#',
    termsHref: qs<HTMLAnchorElement>('#lp-pom-text-412 a, #lp-pom-text-92 a')?.getAttribute('href') || '#',
    social: [getImgSrc('lp-pom-image-403'), getImgSrc('lp-pom-image-404')].filter(Boolean),
  }
};

// Components
function Container({ children }: { children?: any }) {
  return <div className="cf:mx-auto cf:max-w-[1200px] cf:px-4 cf:lg:px-8">{children}</div>;
}
function CTAButton({ href, label = 'Buy Now', size = 'md' }: { href: string; label?: string; size?: 'sm'|'md'|'lg' }) {
  const padding = size === 'lg' ? 'cf:px-8 cf:py-4' : size === 'sm' ? 'cf:px-4 cf:py-2' : 'cf:px-6 cf:py-3';
  return (
    <a href={href} className={[
      'cf:inline-flex cf:items-center cf:justify-center cf:rounded-lg cf:bg-[#1f7dba] cf:text-white cf:font-semibold cf:shadow-sm cf:transition cf:duration-200 cf:hover:bg-[#16679a] cf:focus-visible:outline-none cf:focus-visible:ring-2 cf:focus-visible:ring-[#1f7dba]',
      padding
    ].join(' ')}>
      <span>{label}</span>
      <i data-lucide="arrow-right" className="cf:ml-2 cf:h-4 cf:w-4" />
    </a>
  );
}
function SectionTitle({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="cf:text-center cf:mb-10">
      {eyebrow && <div className="cf:text-[#1f7dba] cf:font-semibold cf:tracking-wide cf:uppercase cf:text-sm">{eyebrow}</div>}
      <h2 className="cf:text-3xl cf:md:text-4xl cf:font-bold cf:text-gray-900">{title}</h2>
      {sub && <p className="cf:mt-3 cf:text-gray-600">{sub}</p>}
    </div>
  );
}
function BenefitCard({ img, title, desc }: { img?: string; title: string; desc?: string }) {
  return (
    <div className="cf:rounded-2xl cf:bg-white cf:border cf:border-gray-200 cf:p-6 cf:flex cf:flex-col cf:gap-4 cf:h-auto">
      {img && <img src={img} alt="" className="cf:w-full cf:h-44 cf:object-cover cf:rounded-xl" />}
      <div>
        <h3 className="cf:text-xl cf:font-semibold cf:text-gray-900">{title}</h3>
        {desc && <p className="cf:mt-1 cf:text-gray-600">{desc}</p>}
      </div>
    </div>
  );
}
function PressStrip({ logos }: { logos: string[] }) {
  if (!logos?.length) return null;
  return (
    <div className="cf:py-6 cf:bg-[#f5f5f5]">
      <Container>
        <div className="cf:flex cf:flex-wrap cf:items-center cf:justify-center cf:gap-8 cf:opacity-80">
          {logos.map((src, i) => (
            <img src={src} alt="" className="cf:h-8 cf:md:h-10 cf:object-contain cf:grayscale" key={i} />
          ))}
        </div>
      </Container>
    </div>
  );
}
function QuoteCard({ quote, author, img }: { quote: string; author?: string; img?: string }) {
  return (
    <div className="cf:rounded-2xl cf:bg-white cf:border cf:border-gray-200 cf:p-6 cf:flex cf:flex-col cf:gap-4 cf:h-full">
      <div className="cf:flex cf:items-start cf:gap-3">
        <i data-lucide="quote" className="cf:text-[#1f7dba] cf:h-5 cf:w-5" />
        <p className="cf:text-gray-800 cf:text-lg cf:leading-7">{quote}</p>
      </div>
      <div className="cf:flex cf:items-center cf:gap-3 cf:mt-auto">
        {img && <img src={img} alt="" className="cf:h-10 cf:w-10 cf:rounded-full cf:object-cover" />}
        {author && <div className="cf:text-sm cf:text-gray-600">{author}</div>}
      </div>
    </div>
  );
}
function List({ items }: { items: string[] }) {
  return (
    <ul className="cf:space-y-6">
      {items.map((t, i) => (
        <li className="cf:flex cf:items-start cf:gap-3" key={i}>
          <i data-lucide="check-circle" className="cf:text-[#1f7dba] cf:mt-0.5 cf:h-5 cf:w-5" />
          <span className="cf:text-gray-700">{t}</span>
        </li>
      ))}
    </ul>
  );
}

function Header() {
  return (
    <header className="cf:sticky cf:top-0 cf:z-50 cf:backdrop-blur cf:bg-white/70 cf:border-b cf:border-black/5">
      <Container>
        <div className="cf:h-16 cf:flex cf:items-center cf:justify-between">
          <a href="#" className="cf:flex cf:items-center cf:gap-3">
            {content.logo && <img src={content.logo} alt="Memory Air" className="cf:h-8 cf:w-auto" style={{ filter: 'brightness(0)', width: '100px', height: 'auto' }} />}
            {!content.logo && <span className="cf:font-bold">Memory Air</span>}
          </a>
          <nav className="cf:hidden cf:md:flex cf:items-center cf:gap-8 cf:text-sm cf:text-gray-700">
            <a href="#discover" className="cf:hover:text-black">Discover</a>
            <a href="#why" className="cf:hover:text-black">Why Memory Air</a>
            <a href="#how" className="cf:hover:text-black">How it Works</a>
            <CTAButton href={content.buyHref} label="Buy Now" size="sm" />
          </nav>
          <a href={content.buyHref} className="cf:md:hidden"><CTAButton href={content.buyHref} label="Buy" size="sm" /></a>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section id="discover" className="cf:relative cf:bg-gradient-to-b cf:from-[#0b1220] cf:to-[#0e2436] cf:text-white">
      <Container>
        <div className="cf:py-16 cf:md:py-24 cf:grid cf:md:grid-cols-2 cf:gap-10 cf:md:gap-16 cf:items-center">
          <div>
            <div className="cf:text-[#7dd3fc] cf:text-sm cf:font-semibold cf:uppercase cf:tracking-wider cf:mb-3">As seen in</div>
            <h1 className="cf:text-4xl cf:md:text-5xl cf:font-bold cf:leading-tight">{content.heroHeadline}</h1>
            <p className="cf:mt-4 cf:text-white/80 cf:text-lg">{content.heroSub}</p>
            <div className="cf:mt-6 cf:flex cf:items-center cf:gap-4">
              <CTAButton href={content.buyHref} label="Buy Now" size="lg" />
              <a href="#how" className="cf:inline-flex cf:items-center cf:text-white/80 cf:hover:text-white">
                Learn more <i data-lucide="chevron-right" className="cf:ml-1 cf:h-4 cf:w-4" />
              </a>
            </div>
            <div className="cf:mt-8 cf:grid cf:sm:grid-cols-2 cf:gap-4">
              {content.metrics.map((m, i) => (
                <div key={i} className="cf:rounded-xl cf:bg-white/10 cf:border cf:border-white/10 cf:p-4">
                  <p className="cf:text-white/90">{m}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="cf:relative">
            {content.productHero && (
              <div className="cf:rounded-2xl cf:shadow-2xl">
                <img src={content.productHero} alt="Memory Air Device" className="cf:w-full cf:h-auto cf:rounded-xl cf:object-contain" />
              </div>
            )}
            <div className="cf:absolute cf:-top-4 cf:-right-4 cf:hidden cf:md:flex cf:items-center cf:gap-2 cf:bg-[#1f7dba] cf:border cf:border-white/10 cf:rounded-full cf:px-3 cf:py-1">
              <i data-lucide="moon" className="cf:h-4 cf:w-4" />
              <span className="cf:text-sm">Works while you sleep</span>
            </div>
          </div>
        </div>
      </Container>
      <PressStrip logos={content.pressLogos} />
    </section>
  );
}

function Benefits() {
  return (
    <section id="why" className="cf:bg-white cf:py-16 cf:md:py-24">
      <Container>
        <SectionTitle eyebrow="Benefits" title="Memory, improved — naturally" sub="Better memory, less brain fog, and sharper focus." />
        <div className="cf:grid cf:md:grid-cols-2 cf:lg:grid-cols-4 cf:gap-6">
          {content.benefits.map((b, i) => <BenefitCard key={i} img={b.img} title={b.title} desc={b.desc} />)}
        </div>
      </Container>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="cf:bg-[rgba(236,236,236,1)] cf:text-gray-900 cf:py-16 cf:md:py-24">
      <Container>
        <SectionTitle eyebrow="How it works" title={content.howTitle} sub="Harness scent-driven neurostimulation during sleep to boost memory." />
        <div className="cf:grid cf:md:grid-cols-2 cf:gap-10 cf:md:gap-16 cf:items-center">
          <div>
            <List items={content.howBullets} />
            <div className="cf:mt-8">
              <CTAButton href={content.buyHref} label="Get Memory Air" size="md" />
            </div>
          </div>
          <div>
            {content.productHero && <img src={content.productHero} alt="Device" className="cf:w-full cf:h-auto cf:rounded-2xl cf:border cf:border-white/10 cf:bg-white/5" />}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Included() {
  return (
    <section className="cf:bg-white cf:py-16 cf:md:py-20">
      <Container>
        <SectionTitle eyebrow="In the box" title={content.includedTitle} />
        <div className="cf:grid cf:md:grid-cols-2 cf:gap-10 cf:md:gap-16 cf:items-center" style={{ display: 'flex', flexDirection: 'column-reverse' }}>
          <div>
            <List items={content.includedBullets} />
          </div>
          <div>
            {content.productHero && <img src="https://cdn.coframe.com/assets/memoryair/19b3as-1-memory-air-device-2_1000000000000000000028-eea485a3-fcb5-4096-a3c4-3f16b585cbc6.webp" alt="Included" className="cf:w-full cf:h-auto cf:rounded-2xl cf:border cf:border-gray-200 cf:bg-gray-50" />}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Quotes() {
  if (!content.quotes.length) return null;
  return (
    <section className="cf:bg-white cf:py-16 cf:md:py-24">
      <Container>
        <SectionTitle eyebrow="What experts say" title="The experts love Memory Air™" />
        <div className="cf:grid cf:md:grid-cols-2 cf:lg:grid-cols-3 cf:gap-6" style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
          {content.quotes.map((q, i) => <QuoteCard key={i} quote={q.quote} author={q.author} img={q.img} />)}
        </div>
      </Container>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="cf:bg-[#f8fafc] cf:py-16 cf:md:py-20">
      <Container>
        <div className="cf:rounded-2xl cf:bg-white cf:border cf:border-gray-200 cf:p-8 cf:flex cf:flex-col cf:md:flex-row cf:items-center cf:justify-between cf:gap-6">
          <div className="cf:max-w-[700px]">
            <h3 className="cf:text-2xl cf:font-bold cf:text-gray-900">{content.guarantee.title}</h3>
            <p className="cf:mt-2 cf:text-gray-600">{content.guarantee.desc}</p>
          </div>
          <CTAButton href={content.buyHref} label="Try it risk‑free" size="md" />
        </div>
      </Container>
    </section>
  );
}

function FinalCTA() {
  const title = getText('lp-pom-text-397') || getText('lp-pom-text-82') || 'Take Control of Your Wellness Today';
  const sub = getText('lp-pom-text-398') || getText('lp-pom-text-83') || 'Join thousands who have improved their memory with the Memory Air device.';
  return (
    <section className="cf:relative cf:bg-gradient-to-b cf:from-[#0e2436] cf:to-[#0b1220] cf:text-white">
      <Container>
        <div className="cf:py-16 cf:md:py-24 cf:text-center cf:max-w-[800px] cf:mx-auto">
          <h2 className="cf:text-3xl cf:md:text-4xl cf:font-bold">{title}</h2>
          <p className="cf:mt-3 cf:text-white/80">{sub}</p>
          <div className="cf:mt-8">
            <CTAButton href={content.buyHref} label="Buy Now" size="lg" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="cf:bg-white cf:border-t cf:border-gray-200">
      <Container>
        <div className="cf:py-8 cf:flex cf:flex-col cf:md:flex-row cf:items-center cf:justify-between cf:gap-4">
          <div className="cf:flex cf:items-center cf:gap-3">
            {content.logo && <img src={content.logo} alt="" className="cf:h-6" />}
            <span className="cf:text-gray-600">© {new Date().getFullYear()} Memory Air</span>
          </div>
          <div className="cf:flex cf:items-center cf:gap-6">
            <a href={content.footer.privacyHref} className="cf:text-gray-600 cf:hover:text-gray-900">Privacy Policy</a>
            <a href={content.footer.termsHref} className="cf:text-gray-600 cf:hover:text-gray-900">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function App() {
  return (
    <div id="cf-variant-root" className="cf:font-[Arial,\_sans-serif]">
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Included />
      <Quotes />
      <Guarantee />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function ensureOnce(): boolean {
  if (qs('#cf-variant-root')) return true; // already applied
  const body = document.body;
  if (!body) return false;
  // Hide original page content
  const originalRoot = qs<HTMLElement>('#lp-pom-root');
  if (originalRoot) originalRoot.style.display = 'none';
  // Mount new UI
  body.prepend(<App />);
  // Initialize lucide icons if available globally (failsafe if auto-injection not present)
  try {
    // @ts-ignore
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      // @ts-ignore
      window.lucide.createIcons();
    }
  } catch {}
  return true;
}

function runWhenReady(predicate: () => boolean, done: () => void, timeoutMs = 10000) {
  const start = Date.now();
  if (predicate()) return done();
  const observer = new MutationObserver(() => {
    if (predicate()) {
      observer.disconnect();
      done();
    } else if (Date.now() - start > timeoutMs) {
      observer.disconnect();
      console.error('Variant timeout: required elements not found');
    }
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
}

(function init() {
  try {
    runWhenReady(() => !!document.body && !!qs('#lp-pom-root'), () => {
      const ok = ensureOnce();
      if (ok) {
        // Emit only after successful render
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).CFQ = (window as any).CFQ || [];
        (window as any).CFQ.push({ emit: 'variantRendered' });
      }
    });
  } catch (e) {
    console.error('Variant init error', e);
  }
})();
// Add custom styling for #how section
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  #how {
    color: #1a1a1a;
  }
  #how .cf\:text-center > p {
    color: #1a1a1a !important;
  }
  #how .cf\:text-center p {
    color: #1a1a1a !important;
  }
  #how .cf\:text-gray-600 {
    color: #1a1a1a !important;
  }
  #how ul li {
    color: #1a1a1a !important;
  }
  #how .cf\\:text-\\[\\#1f7dba\\],
  #how .cf\\:text-gray-900,
  #how a[class*="inline-flex"] {
    /* Preserve original colors for title and button */
  }
  #how h2,
  #how .cf\\:text-center {
    color: inherit;
  }
  #how ul li {
    color: #1a1a1a;
  }
`;
document.head.appendChild(styleSheet);
