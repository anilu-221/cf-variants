console.log('Adding benefits section to Memory Air');

// Function to create a single benefit item
function createBenefitItem(text) {
  const item = document.createElement('div');
  item.className = 'cf:flex cf:items-center cf:gap-2';
  const icon = document.createElement('i');
  icon.setAttribute('data-lucide', 'check-circle');
  icon.className = 'cf:w-4 cf:h-4 cf:text-black cf:shrink-0';
  const span = document.createElement('span');
  span.className = 'cf:text-sm cf:text-black/80';
  span.textContent = text;
  item.appendChild(icon);
  item.appendChild(span);
  return item;
}

// Function to add benefits section to a container
function addBenefitsSection(containerId) {
  const container = document.querySelector(containerId);
  if (container) {
    const section = document.createElement('div');
    section.className = 'cf:mt-4 cf:flex cf:flex-col cf:gap-2';
    
    section.appendChild(createBenefitItem('Improves memory by up to 300%'));
    section.appendChild(createBenefitItem('Works while you sleep'));
    section.appendChild(createBenefitItem('No drugs, no side effects'));
    
    container.appendChild(section);
    console.log(`Benefits added to ${containerId}`);
  } else {
    console.error(`Container ${containerId} not found`);
  }
}

// Add benefits to both containers
addBenefitsSection('#lp-pom-text-422');
addBenefitsSection('#lp-pom-text-118');

// Position the button
const button = document.querySelector('#lp-pom-button-423');
if (button) {
  button.style.left = '630px';
  button.style.top = '620px';
  
  console.log('Button positioned with responsive styles');
}

// Move button-115 to body
const floatingButton = document.querySelector('#lp-pom-button-115');
if (floatingButton) {
  document.body.appendChild(floatingButton);
  floatingButton.style.setProperty('position', 'sticky', 'important');
  floatingButton.style.left = '10px';
  floatingButton.style.bottom = '10px';
  floatingButton.style.lineHeight = '2';
  floatingButton.style.zIndex = '999';
  console.log('Button 115 moved to body with styles');
}

// Create responsive styles for both buttons
const style = document.createElement('style');
style.textContent = `
  @media (max-width: 768px) {
    #lp-pom-button-423 {
      left: 50% !important;
      transform: translateX(-50%);
      top: auto !important;
      bottom: 20px !important;
    }
    #lp-pom-button-115 {
      position: fixed !important;
      left: 20px !important;
      bottom: 20px !important;
      z-index: 999;
    }
  }
`;
document.head.appendChild(style);

window.CFQ = window.CFQ || [];
window.CFQ.push({ emit: 'variantRendered' });
console.log('Benefits sections added successfully');