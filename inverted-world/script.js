navigator.mediaDevices.getUserMedia({ 
  video: { 
    facingMode: { exact: "environment" }
  } 
}).then((stream) => {
  const videos = document.querySelectorAll("video");
  videos[0].srcObject = videos[1].srcObject = stream;
});
