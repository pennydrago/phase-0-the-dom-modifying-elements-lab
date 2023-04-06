// Write your code here!

// Remove DOM node 'main#main'
  main.remove();


// Add newHeader variable
  const newHeader = document.createElement('h1');
  newHeader.setAttribute('id', 'victory');
  newHeader.textContent = "Penny is the champion";
  document.body.append(newHeader);