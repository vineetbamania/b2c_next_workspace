// /* eslint-disable @next/next/no-img-element */
// import { ColorModeScript, Box, Flex, Image } from '@chakra-ui/react'
// import { theme } from '../../pages/_app'
// import homeStyles from '../../styles/homeStyles';
// import Api from "../api";
// import DummyApi from "../dummyApi";
// import { useEffect, useState } from 'react';

// const Home = () => {
//   const [showDummyApi, setShowDummyApi] = useState(true)

//   const scriptCode =  `
//   function appendClassNamesFromDummyApiToApi() {
//     const apiWrapper = document.getElementById("api");
//     const dummyApiWrapper = document.getElementById("dummy-api");
    
//     if (!apiWrapper || !dummyApiWrapper) {
//       console.error("Invalid IDs for API or DummyAPI");
//       return;
//     }
    
//     applyClassNames(apiWrapper, dummyApiWrapper);
//   }
  
  // function applyClassNames(apiNode, dummyApiNode) {
  //   if (
  //     apiNode.nodeType === Node.ELEMENT_NODE &&
  //     dummyApiNode.nodeType === Node.ELEMENT_NODE
  //   ) {
  //     const classNames = dummyApiNode.classList;
  //     for (let i = 0; i < classNames.length; i++) {
  //       apiNode.classList.add(classNames[i]);
  //     }
  //   }
  
  //   const apiChildNodes = apiNode.childNodes;
  //   const dummyApiChildNodes = dummyApiNode.childNodes;
  
  //   if (apiChildNodes.length === dummyApiChildNodes.length) {
  //     for (let i = 0; i < apiChildNodes.length; i++) {
  //       applyClassNames(apiChildNodes[i], dummyApiChildNodes[i]);
  //     }
  //   }
  // }          
  
//   function removeDummyApi(dummyApiWrapper) {      
//     if (dummyApiWrapper) {
//       dummyApiWrapper.remove();
//     }
//   }

//   appendClassNamesFromDummyApiToApi();
//   showDummyApi = false;
// `
//   useEffect(() => {
//     setShowDummyApi(false)
//   }, [])
  
//   return (
//     <>
//       <ColorModeScript initialColorMode={theme.config.initialColorMode} />
//       <Flex>  
//         <Box id="background_branding_container" data-tenant-branding-background-color="true">
//           <Image data-tenant-branding-background="true" alt="sign-in sign-up illustration" />
//         </Box>
//         <Flex h="100%" w="60%" direction="column" className="panel" id="panel">
//           <table role="presentation">
//             <tbody>
//               <tr>
//                 <td/>
//                 <td>
//                   <div>
//                     <div>
//                       <Image data-tenant-branding-logo="true" className="companyLogo" alt="GenesisX logo" />
//                       <Api />
//                       {/* { showDummyApi && <DummyApi /> } */}
//                       <DummyApi />
//                     </div>
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </Flex>
//       </Flex>

//       {/* styling using styled jsx approach */}
//       <style jsx>
//         {homeStyles}
//       </style>

//       {/* <script dangerouslySetInnerHTML={{ __html: scriptCode }} /> */}
//     </>
//   )
// }

// export default Home



/* eslint-disable @next/next/no-img-element */
import { ColorModeScript, Box, Flex, Image } from '@chakra-ui/react'
import { theme } from '../../pages/_app'
import homeStyles from '../../styles/homeStyles';
import Api from '../api';
import DummyApi from '../dummyApi';
import { useEffect, useState, useRef } from 'react';

const Home = () => {
  const [showDummyApi, setShowDummyApi] = useState(true);
  
  // const appendClassNamesFromDummyApiToApi = () => {
  //   const apiWrapper = document.getElementById("api");
  //   const dummyApiWrapper = document.getElementById("dummy-api");

  //   if (!apiWrapper || !dummyApiWrapper) {
  //     console.error("Invalid IDs for API or DummyAPI");
  //     return;
  //   }

  //   applyClassNames(apiWrapper, dummyApiWrapper);
  //   setShowDummyApi(false);
  //   console.log('Content changed in the Api component');
  // };

  // function applyClassNames(apiNode: HTMLElement, dummyApiNode: HTMLElement) {
  //   if (
  //     apiNode.nodeType === Node.ELEMENT_NODE &&
  //     dummyApiNode.nodeType === Node.ELEMENT_NODE
  //   ) {
  //     const classNames = dummyApiNode.classList;
  //     for (let i = 0; i < classNames.length; i++) {
  //       apiNode.classList.add(classNames[i]);
  //     }
  //   }
  
  //   const apiChildNodes = apiNode.childNodes;
  //   const dummyApiChildNodes = dummyApiNode.childNodes;
  
  //   if (apiChildNodes.length === dummyApiChildNodes.length) {
  //     for (let i = 0; i < apiChildNodes.length; i++) {
  //       applyClassNames(apiChildNodes[i] as HTMLElement, dummyApiChildNodes[i] as HTMLElement);
  //     }
  //   }
  // } 

  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Flex>  
        <Box id="background_branding_container" data-tenant-branding-background-color="true">
          <Image data-tenant-branding-background="true" alt="sign-in sign-up illustration" />
        </Box>
        <Flex h="100%" w="60%" direction="column" className="panel" id="panel">
          <table role="presentation">
            <tbody>
              <tr>
                <td>
                  <div>
                    <div>
                      <Image data-tenant-branding-logo="true" className="companyLogo" alt="GenesisX logo" />
                      <Api />
                      <DummyApi />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Flex>
      </Flex>

      {/* styling using styled jsx approach */}
      <style jsx>
        {homeStyles}
      </style>
      
      {/* <script
        id="test-script"
        dangerouslySetInnerHTML={{
          __html: `
            "use strict";
            document.addEventListener("DOMContentLoaded", function () {
              // appendClassNamesFromApiToDummyApi function def
              function appendClassNamesFromApiToDummyApi() {
                const apiWrapper = document.getElementById("api");
                const dummyApiWrapper = document.getElementById("dummy-api");

                if (!apiWrapper || !dummyApiWrapper) {
                  console.error("Invalid IDs for API or DummyAPI");
                  return;
                }

                applyClassNames(apiWrapper, dummyApiWrapper);
                console.log('Content changed in the Api component');
                // console.log(apiWrapper)
              }

              // applyClassNames function def
              function applyClassNames(apiNode, dummyApiNode) {
                if (
                  apiNode.nodeType === Node.ELEMENT_NODE &&
                  dummyApiNode.nodeType === Node.ELEMENT_NODE
                ) {
                  const classNames = dummyApiNode.classList;
                  for (let i = 0; i < classNames.length; i++) {
                    apiNode.classList.add(classNames[i]);
                  }
                }

                const apiChildNodes = apiNode.childNodes;
                const dummyApiChildNodes = dummyApiNode.childNodes;

                if (apiChildNodes.length === dummyApiChildNodes.length) {
                  for (let i = 0; i < apiChildNodes.length; i++) {
                    applyClassNames(apiChildNodes[i], dummyApiChildNodes[i]);
                  }
                }
              }

              // appendClassNamesFromApiToDummyApi function call
              appendClassNamesFromApiToDummyApi();
              console.log('classNames appended');
            })
          `,
        }}
      /> */}
    </>
  );
}

export default Home