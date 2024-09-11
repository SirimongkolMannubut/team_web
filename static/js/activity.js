function toggleContent(element) {
    const activityBox = element.closest('.activity_box');
    const shortDesc = activityBox.querySelector('.activity_desc.short');
    const fullDesc = activityBox.querySelector('.activity_desc.full');
    
    if (shortDesc.style.display !== 'none') {
        shortDesc.style.display = 'none';
        fullDesc.style.display = 'block';
        element.textContent = 'แสดงน้อยลง';
    } else {
        shortDesc.style.display = 'block';
        fullDesc.style.display = 'none';
        element.textContent = 'อ่านเพิ่มเติม';
    }
}