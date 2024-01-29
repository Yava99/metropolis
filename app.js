const halo = document.querySelector('.halo');

document.addEventListener('mousemove', (e) => {
    halo.style.left = e.pageX + 'px';
    halo.style.top = e.pageY + 'px';
});

const imgCollections = document.querySelectorAll('.imgCollection');

imgCollections.forEach((imgCollection) => {
  imgCollection.addEventListener('mousemove', (e) => {
    const centerX = imgCollection.clientWidth / 2;
    const centerY = imgCollection.clientHeight / 2;

    const mouseX = e.clientX - imgCollection.getBoundingClientRect().left;
    const mouseY = e.clientY - imgCollection.getBoundingClientRect().top;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    const rotationX = deltaY / centerY * 40;
    const rotationY = deltaX / centerX * 40;

    imgCollection.style.transform = `rotateX(${-rotationX}deg) rotateY(${rotationY}deg)`;
  });

  imgCollection.addEventListener('mouseleave', () => {
    imgCollection.style.transform = 'none';
  });
});