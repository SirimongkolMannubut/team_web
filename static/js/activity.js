function toggleContent() {
    var shortDesc = document.querySelector('.activity_desc.short');
    var fullDesc = document.querySelector('.activity_desc.full');
    var readMoreLink = document.querySelector('.read-more');
  
    if (fullDesc.style.display === "none") {
      fullDesc.style.display = "block";
      shortDesc.style.display = "none";
      readMoreLink.innerHTML = "Read less";
    } else {
      fullDesc.style.display = "none";
      shortDesc.style.display = "block";
      readMoreLink.innerHTML = "Read more";
    }
  }
  