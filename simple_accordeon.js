/* ----------------------------------------------
  JS Simple Accordion - Created by orionce
  Version: 1.0
---------------------------------------------- */

function simple_accordion(styles = {}) {

  // default styles
  const defaultStyle = {
    enable: true,
    class_name: '',
    header_size: 16,
    header_color: 'inherit',
    header_active_color: 'inherit',
    first_active: false
  }

  const acc_styles = {...defaultStyle, ... styles};

  // Get accordion container
  const accordion = document.querySelector('.simple_accordion');
  if(acc_styles.class_name) {
    accordion.classList.add(acc_styles.class_name);
  }

  // creating chevron svg icon
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z");
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('viewBox', '0 -960 960 960');
  svg.setAttribute('width', `${acc_styles.header_size + 5}px`);
  svg.setAttribute('height', `${acc_styles.header_size + 5}px`);
  svg.setAttribute('fill', acc_styles.header_color);
  svg.appendChild(path);

  // gets accordion headers
  const headers = document.querySelectorAll('.acc_header');

  function showContent(header, accordionContent){
    accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"; // show current element
    header.classList.add('active');
    header.style.color = acc_styles.header_active_color;
  };

  // adding icon and event to each header
  headers.forEach(header => {
    // set custom styles
    header.appendChild(svg.cloneNode(true));
    header.style.color = acc_styles.header_color;
    header.style.fontSize = acc_styles.header_size + 'px';

    const accordionItem = header.parentElement; // Get parent element
    const accordionContent = accordionItem.querySelector('.acc_content'); // get content of current header
    
    // if accordion is enable
    if(acc_styles.enable) {

      // if first header is active
      if(acc_styles.first_active) {
        const accordionItem = headers[0].parentElement; // Get parent element
        const accordionContent = accordionItem.querySelector('.acc_content')
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        headers[0].classList.add('active');
      };

      header.addEventListener('click', () => {

        // close all element except current one
        headers.forEach(otherHeader => {
          if (otherHeader !== header) {
            const otherAccordionItem = otherHeader.parentElement;
            const otherAccordionContent = otherAccordionItem.querySelector('.acc_content');
            otherAccordionContent.style.maxHeight = null;
            otherHeader.classList.remove('active');
            otherHeader.style.color = acc_styles.header_color;
          }
        });

        // Toggle visibility content
        if (accordionContent.style.maxHeight) {
          accordionContent.style.maxHeight = null; // Reset height and hide element
          header.classList.remove('active');
          header.style.color = acc_styles.header_color;

        } else {
          showContent(header, accordionContent)
        }
      });
    } else {
      showContent(header, accordionContent)
    }

  });
}
