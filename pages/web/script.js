const speechBtn = document.getElementById("speechBtn");
const notifyBtn = document.getElementById("notifyBtn");

speechBtn.addEventListener("click", () => {
  const textToSpeech = "Hello world, I am sundara rao";
  const utterance = new SpeechSynthesisUtterance(textToSpeech);
  speechSynthesis.speak(utterance);
});

notifyBtn.addEventListener("click", () => {
  console.log("clicked");

  console.log("Permission:", Notification.permission);

  if (Notification.permission === "granted") {
    console.log("Showing notification");
    setTimeout(() => {
      new Notification("Delayed notification test", {
        body: "Check if you see this",
        requireInteraction: true
      });
    }, 3000);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      console.log("New permission:", permission);
      if (permission === "granted") {
        setTimeout(() => {
          new Notification("Delayed notification test", {
            body: "Check if you see this",
            requireInteraction: true
          });
        }, 3000);
      }
    });
  } else {
    console.log("Permission denied");
  }
});
