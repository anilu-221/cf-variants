// Set background-image for the sleep/memory air device section
const element = document.querySelector("#lp-pom-box-417");
if (element) {
  element.style.backgroundImage = `url('https://cdn.coframe.com/assets/temp/memoryair/sleep_1024x1024-919a0b11-b84a-4477-9626-9d0c54274701.webp')`;
  element.style.backgroundSize = 'cover';
  element.style.backgroundPosition = 'center';
}

// Change the image src for #lp-pom-image-120 and all related attributes
const imgElement = document.querySelector("#lp-pom-image-120 > div > img");
if (imgElement) {
  const newImageUrl = 'https://cdn.coframe.com/assets/temp/memoryair/sleep_1024x1024-919a0b11-b84a-4477-9626-9d0c54274701.webp';
  
  // Set the main src
  imgElement.src = newImageUrl;
  
  // Apply object-fit: cover styling
  imgElement.style.objectFit = 'cover';
  
  // Remove srcset to prevent page from overriding with responsive images
  imgElement.removeAttribute('srcset');
  
  // Remove data-src-* attributes that might be used by lazy loading
  imgElement.removeAttribute('data-src-mobile-1x');
  imgElement.removeAttribute('data-src-mobile-2x');
  imgElement.removeAttribute('data-src-mobile-3x');
}

// Emit variantRendered event after successfully applying all changes
window.CFQ = window.CFQ || [];
window.CFQ.push({ emit: 'variantRendered' });