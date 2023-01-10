import React from 'react'
export const useWidthScreen = () => {
    const [width, setWidth] = React.useState(window.screen.width)
   
    const handleSize = React.useCallback(
     (e : UIEvent) => {
     
       setWidth(window.innerWidth);
     }, [width]
    );
    
      React.useEffect(()=> {
     
       window.addEventListener('resize', handleSize)
    
       return () => {
         window.removeEventListener('resize', handleSize)
        
       }
      }, [width])


      return  { width , setWidth}
}


