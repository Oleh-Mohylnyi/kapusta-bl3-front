import { useState, useEffect } from "react";

function clientWindowWidth () {
    const {clientWidth: width, clientHeight: height} = document.documentElement;
    return {width, height}
}

function useWindowSize() {
    
    const [windowSize, setWindowSize] = useState(
        clientWindowWidth()
    );


    useEffect(() => {
      
      function handleResize() {
      
        setWindowSize(clientWindowWidth());
      }
     
      window.addEventListener("resize", handleResize);
      
      
      
      return () => window.removeEventListener("resize", handleResize);
    }, []); 
    return windowSize;
  }
  
  export default useWindowSize;