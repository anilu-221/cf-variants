console.log('Adding how to use Ramp section as a card');

// Find the insertion point - the "Get to know Ramp" section
const productSuiteSection = document.querySelector('#product-suite-new');
const getToKnowSection = productSuiteSection?.closest('section');

if (getToKnowSection) {
  // Create the new card section
  const newSection = document.createElement('section');
  newSection.className = "cf:spacer-t-m cf:spacer-p-b-l";
  newSection.style.paddingTop = "3rem";
  
  newSection.innerHTML = `
    <div class="cf:mx-auto cf:w-full cf:max-w-screen-2xl cf:px-4 cf:md:px-8 cf:lg:px-12 cf:xl:px-16">
      <div class="cf:bg-grayLight cf:rounded-xl cf:overflow-hidden cf:p-6 cf:md:p-8 cf:lg:p-10 cf:border cf:border-black-100" style="background: radial-gradient( 100% 55% at 6.4% -10.49%, rgba(var(--primary-color),0.48) 0%, transparent 100% ), var(--bg-minor); padding-top: 3rem;">
        <div class="cf:flex cf:flex-col cf:gap-6">
          <div class="cf:flex cf:flex-col cf:gap-4">
            <h2 class="leading-trim headline-l cf:text-primary">
              How to use Ramp for your business
            </h2>
            <p class="cf:body-m cf:text-hushed cf:text-balance">
              Get your entire finance team up and running in days, not months. Ramp integrates seamlessly with your existing systems and processes. Start with corporate cards, automate your spend, and scale your finance operations.
            </p>
          </div>
          <div class="cf:flex cf:justify-start">
            <a 
              href="/see-a-demo"
              class="cf:inline-flex cf:justify-center cf:items-center cf:text-center cf:rounded-md cf:transition cf:ease-in-out cf:duration-300 cf:px-6 cf:py-3 cf:font-medium cf:text-primary cf:hover:opacity-90"
              style="background-color: oklch(0.9199 0.2009 113.99)"
            >
              Schedule a demo
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  // Insert the new section before the "Get to know Ramp" section
  getToKnowSection.parentNode.insertBefore(newSection, getToKnowSection);

  // Emit variant rendered event
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
  console.log('Section added successfully');
} else {
  console.error('Could not find insertion point for new section');
}