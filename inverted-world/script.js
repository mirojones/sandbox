navigator.mediaDevices.getUserMedia({ 
  video: { 
    facingMode: { exact: "environment" },
    width: { exact: innerWidth / 2 },
    height: { exact: innerHeight }
  } 
}).then((stream) => {
  const videos = document.querySelectorAll("video");
  videos[0].srcObject = videos[1].srcObject = stream;
});
