console.log("Script running");

const triggers = document.querySelectorAll('.trigger');
console.log("Triggers found:", triggers.length);

const boxes = document.querySelectorAll('.floating-box');
console.log("Boxes found:", boxes.length);

triggers.forEach(trigger => {
  trigger.addEventListener('mouseenter', () => {
    const targetGroup = trigger.dataset.target;
    console.log("Hovering on:", targetGroup);
    boxes.forEach(box => {
      if (box.classList.contains(`group-${targetGroup}`)) {
        box.classList.add('active');
        console.log("Activated:", box.textContent.trim());
      }
    });
  });

  trigger.addEventListener('mouseleave', () => {
    const targetGroup = trigger.dataset.target;
    console.log("Stopped hovering:", targetGroup);
    boxes.forEach(box => {
      if (box.classList.contains(`group-${targetGroup}`)) {
        box.classList.remove('active');
        console.log("Deactivated:", box.textContent.trim());
      }
    });
  });
});
