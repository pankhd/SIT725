const testButtonFunction = () => {
    alert("Thank you for clicking");
  };
  
  const socket = io();
  
  socket.on("number", (msg) => {
    console.log("Random number: " + msg);
  });
  
  console.log("test");
  
  $(document).ready(function () {
    console.log("ready");
  
    // bind the function 
    $("#testButton").click(testButtonFunction);
  
    // Test GET call
    $.get("/test", (result) => {
      console.log(result);
    });
  });