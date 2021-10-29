import React, { useState, useEffect } from "react";
import PT from "prop-types";
import ReactDOM from "react-dom";
import {
  LightgalleryProvider,
  LightgalleryItem,
  withLightgallery,
  useLightgallery
} from "react-lightgallery";
import styles from  "./style.module.css";
import { wrap } from "module";
import axios from 'axios'
// import GetImages from '../../adapters/getImages'


const baseUrl= `https://tacsfonui.org/`


const PhotoItem = ({ image, thumb, group }) => (
  <div style={{ maxWidth: "300px", padding: "5px" }}>
    <LightgalleryItem group={group} src={image} thumb={thumb}>
      <img src={image} style={{ width: "100%" }} />
      <h1>
      </h1>
    </LightgalleryItem>
  </div>
);



const GallerySection = () => {

  const [gallery, setGallery] = useState([])
  // const [visible, setVisible] = useState(true);
  
    
    useEffect(()=>{
      axios.get(
        `https://tacsfonui.org/api/gallery`,  {
          headers: {
            'Accept': 'application/json',
          },
        } 
        ).then(res=> {
          
          var response = res.data.toString().match(/{(.*)}/)[0]
          response = JSON.parse(response)
          console.log("response", response)
          const gallery = response.payload.table_data;
          setGallery(gallery);
          }
      ).catch(err =>{
        // alert('error with server, click ok reload.')
        console.log(err)
        // window.location.reload();  
        
      })
    }, [gallery])

  return (
    <>
    <div className={`${styles.con}`}>

      <div>
         
          <LightgalleryProvider
            onBeforeOpen={() => console.info("onBeforeOpen")}
            onAfterOpen={() => console.info("onAfterOpen")}
            onSlideItemLoad={() => console.info("onSlideItemLoad")}
            onBeforeSlide={() => console.info("onBeforeSlide")}
            onAfterSlide={() => console.info("onAfterSlide")}
            onBeforePrevSlide={() => console.info("onBeforePrevSlide")}
            onBeforeNextSlide={() => console.info("onBeforeNextSlide")}
            onDragstart={() => console.info("onDragstart")}
            onDragmove={() => console.info("onDragmove")}
            onDragend={() => console.info("onDragend")}
            onSlideClick={() => console.info("onSlideClick")}
            onBeforeClose={() => console.info("onBeforeClose")}
            onCloseAfter={() => console.info("onCloseAfter")}
          >
            
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {gallery && gallery.map((g, idx) => (
                <PhotoItem key={idx} image={`${baseUrl}${g.gallery_path}`} group="group2" />
              ))}
            </div>
           
          </LightgalleryProvider>
         
      </div>
      </div>
    </>
  );
}

export default GallerySection;