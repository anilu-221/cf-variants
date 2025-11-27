/**
 * @name Ramp.com - Change Hero Headline
 * @description Changes the main hero headline to "Finance on Autopilot".
 */
(function() {
  const selector = '#hero-section h1';

  const monitorChangesByConditionAndRun = (
    predicate: () => boolean,
    callback: () => void,
  ) => {
    // Initial check
    if (predicate()) {
      callback();
      return;
    }

    // If not found, set up an observer
    const observer = new MutationObserver(() => {
      if (predicate()) {
        observer.disconnect();
        callback();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  };

  const applyChanges = () => {
    try {
      const headlineElement = document.querySelector<HTMLHeadingElement>(selector);

      if (headlineElement) {
        headlineElement.textContent = 'Finance on Autopilot';

        console.log('Successfully changed hero headline.');
        
        window.CFQ = window.CFQ || [];
        window.CFQ.push({ emit: 'variantRendered' });
      } else {
        console.error('Hero headline element could not be found to apply changes.');
      }
    } catch (error) {
      console.error('Error applying headline change:', error);
    }
  };

  monitorChangesByConditionAndRun(
    () => document.querySelector(selector) !== null,
    applyChanges
  );
})();
