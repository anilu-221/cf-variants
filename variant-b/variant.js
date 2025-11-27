/**
 * @fileoverview
 * This variant adds a new section immediately following the hero section.
 */

/**
 * A utility to wait for a condition to be true before executing a callback.
 * It uses MutationObserver to check the condition whenever the DOM changes.
 * @param {() => boolean} condition - A function that returns true when the condition is met.
 * @param {() => void} callback - The function to execute when the condition is met.
 * @param {number} [timeout=5000] - The maximum time to wait in milliseconds.
 */
function monitorChangesByConditionAndRun(
  condition: () => boolean,
  callback: () => void,
  timeout = 5000,
) {
  if (condition()) {
    callback();
    return;
  }

  let timeoutId: number | null = null;
  const observer = new MutationObserver(() => {
    if (condition()) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      observer.disconnect();
      callback();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Failsafe timeout
  timeoutId = window.setTimeout(() => {
    if (condition()) {
      callback();
    } else {
      console.error('monitorChangesByConditionAndRun timed out.');
    }
    observer.disconnect();
  }, timeout);
}

/**
 * The new section component.
 * @returns {JSX.Element} The new section element.
 */
function NewSection(): JSX.Element {
  return (
    <section className="cf-new-section cf:bg-white cf:pt-20 cf:pb-0">
      <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="cf:mx-auto cf:max-w-[674px] cf:text-center">
          <h2 className="leading-trim headline-l cf:text-gray-900">
            How it works
          </h2>
          <p className="cf:mt-4 cf:text-xl cf:text-gray-600">
            Full Control. Total Visibility.
          </p>
        </div>
        <HowItWorksSteps />
      </div>
    </section>
  );
}

function HowItWorksSteps() {
  const steps = [
    {
      step: 'Step 1',
      title: 'Set Your Policy',
      description:
        'Define your spending rules once, and Ramp enforces them on every single transaction.',
    },
    {
      step: 'Step 2',
      title: 'Empower Your Team',
      description:
        'Give employees the ability to spend responsibly with pre-approved limits and clear guidelines.',
    },
    {
      step: 'Step 3',
      title: 'Uncover Insights',
      description:
        'Track every dollar spent in real-time and discover powerful savings opportunities automatically.',
    },
  ];

  return (
    <div className="cf:mt-16 cf:flex cf:flex-wrap cf:gap-8">
      {steps.map((stepInfo) => (
        <StepCard
          key={stepInfo.step}
          step={stepInfo.step}
          title={stepInfo.title}
          description={stepInfo.description}
        />
      ))}
    </div>
  );
}

function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="cf:w-full cf:rounded-lg cf:border cf:border-gray-200 cf:p-6 cf:text-left cf:lg:w-[calc((100%-4rem)/3)]">
      <p className="cf:text-sm cf:font-semibold cf:text-gray-500">{step}</p>
      <h3 className="cf:mt-2 cf:text-xl cf:font-bold cf:text-gray-900">
        {title}
      </h3>
      <p className="cf:mt-4 cf:text-gray-600">{description}</p>
    </div>
  );
}

/**
 * Applies the variant changes to the DOM.
 */
function applyVariant() {
  // The section with the title "Get to know Ramp" appears after the logo slideshows.
  const getToKnowRampSection = document.querySelector('section.spacer-p-t-l');
  if (!getToKnowRampSection) {
    console.error('"Get to know Ramp" section could not be found.');
    return;
  }

  // Idempotency check: Don't add the section if it already exists.
  if (document.querySelector('.cf-new-section')) {
    return;
  }

  getToKnowRampSection.before(<NewSection />);

  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
}

// Wait for the target section to be available before applying the variant.
monitorChangesByConditionAndRun(
  () => document.querySelector('section.spacer-p-t-l') !== null,
  applyVariant,
);
