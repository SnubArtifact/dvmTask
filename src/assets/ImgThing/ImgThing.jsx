import React from 'react';
import "./ImgThing.css";

function ImgThing() {
  return (
    <>
 
       <svg
  id="movingpath5"
  width="400"
  height="2500"
  viewBox="0 0 300 2500" 
  style={{
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    overflow: 'visible',
    pointerEvents: 'none',
    zIndex:0
    
   
  }}
>
  <path 
    vectorEffect="non-scaling-stroke"
    id="liane5" 
    d="M134.616 0v50.103c0 7.227-18.796 42.933-19.702 50.103-2.086 16.511-17.714 46.629 14.896 69.314 42.593 29.629 135.701 18.007 137.283 56.289 2.993 72.439-43.435 131.395-50.435 138.395-7.407 7.408-50.357 36.951-55.555 59.26-14.009 60.119-10.509 191.247-7.408 205.556 7.408 31.481-29.63 138.889-46.296 151.851s-24.074 22.222-24.074 35.186 3.704 38.889 9.259 48.148c5.556 9.26-53.467 157.391-52.965 158.651 1.502 24.11 4.613 63.737 10.713 70.037 11.11 7.741 55.534 25.395 93.7 29.319 38.486 3.958 56.666 41.479 62.429 48.785 4.018 5.092 4.177 12.231.45 17.539-6.595 9.394-61.626 40.725-34.708 55.568 43.984 24.252 54.305 47.974 56.305 50.974 3.704 9.26-3.704 68.519-11.111 79.63s-42.592 59.259-78.703 81.481-50.926 38.519-50.926 57.408c0 7.407 28.127 138.606 37.037 150 32.512 41.577-1.852 112.963-14.816 148.148-12.962 35.185-58.374 75.902-63.2 84.018-15.587 26.215 24.798 55.973 26.215 86.439 2.009 43.173 66.145 95.065 75.959 113.011 15.049 27.517 23.24 79.704 23.24 101.68"
    style={{
      fill: 'none', 
      stroke: 'rgb(19, 115, 95)', 
      strokeMiterlimit: 10, 
      strokeWidth: '4px',
      strokeDasharray: 'none', 
      strokeDashoffset: 0 
    }}
  />
</svg>
    





   
      <div id="imgThing">        
        <img id="sectionImg" src="./src/assets/images/forest@2x.jpg" alt="Forest" />

        <p id="firstparatext">Lebendiger Baum.</p>
        <p id="secondparatext">Lebendiger Raum.</p>
        
           <img id="paraimg"  src="./src/assets/images/paranussbaum.png" alt="Para Nussbaum" />
      </div>
      

      
      <svg
        id="movingpath4"
        width="63"
        height="1000"
        viewBox="1200 1600 300 1400"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 8,
          overflow: 'visible',
          pointerEvents: 'none',
        }}
      >
        <path
          vectorEffect="non-scaling-stroke"
          id="liane4"
          d="M1289.681 1709.855c.614 53.87 17.792 59.165-40.952 91.94-82.886 46.245 63.972 166.047-26.028 214.047s-305.99-101.26-284.748 83.133c6.825 59.246-12.377 75.225-2.685 186.191 4.836 55.379 38.58-20.22 38.148 218.655-.043 23.544-.043 37.212 0 41.003"
          style={{
            strokeLinecap: 'square',
            fill: 'none',
            stroke: 'white',
            strokeMiterlimit: 10,
            strokeWidth: '4px',
            strokeDashoffset: 0,
            strokeDasharray: 'none',
          }}
        />
      </svg>

     
    
    </>
  );
}

export default ImgThing;