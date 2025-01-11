const testButtonFunction = () => {
    alert("Thank you for clicking");
  };
  
  let socket = io('http://localhost:3000', {
    transports: ['polling']
  });
  
  socket.on('connect', () => {
    console.log('Connected to the server');
  });
  
  socket.on("number", (msg) => {
    console.log("Random number: " + msg);
    document.getElementById("randomNumberDisplay").innerText = "Random number: " + msg;
  });
  
  console.log("test");
  
  $(document).ready(function () {
    console.log("ready");
  
    // bind the function
    $("#testButton").click(testButtonFunction);
  
    $.get("/test", (result) => {
      console.log(result);
    }).fail((xhr, textStatus, errorThrown) => {
      console.log(`Error: ${textStatus} - ${errorThrown}`);
    });
  
    // Emit a request for a random number when the button is clicked
    $("#testButton").click(() => {
      socket.emit("requestNumber");
    });
  });
  