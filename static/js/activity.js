function toggleContent(element) {
    const parentBox = element.closest('.activity_box');
    parentBox.classList.toggle('expanded');
    
    // Toggle between "Read more" and "Read less"
    const readMoreLink = parentBox.querySelector('.read-more');
    if (parentBox.classList.contains('expanded')) {
      readMoreLink.innerHTML = 'Read less';
    } else {
      readMoreLink.innerHTML = 'Read more';
    }
  }
  