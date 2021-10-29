import React, {useState, useEffect} from 'react'
import axios  from 'axios'
import ReactPlayer from 'react-player'
import {MediaContainer, MediaWrapper, MediaH1} from './MediaSectionElements'


const baseUrl= `https://tacsfonui.org/`;


const MediaSection = () => {

    const [video, setVideo] = useState([])
    const [audio, setAudio] = useState([])

    useEffect(()=>{
        axios.get(
          `https://tacsfonui.org/api/videos`
          ).then(res=> {
            var response = res.data.toString().match(/{(.*)}/g)[0]
            response = JSON.parse(response)
            console.log("response", response)
             const video = response.payload.table_data;
             setVideo(video);
            }   
        ).catch(err =>{
            alert('error with server, click ok reload.')
            window.location.reload(); 
        })
    
      console.log("okay")
      }, [])

      useEffect(()=>{
        axios.get(
          `https://tacsfonui.org/api/audios`
          ).then(res=> {
            var response = res.data.toString().match(/{(.*)}/g)[0]
            response = JSON.parse(response)
            console.log("response", response)
             const audio = response.payload.table_data;
             setAudio(audio);
            }   
        ).catch(err => {
            alert('error with server, click ok reload.')
            window.location.reload(); 
        })
      }, [])

    return (
        <>
        <MediaContainer>
            <MediaH1>Videos</MediaH1>
            <MediaWrapper>
                {
                   video && video.map((v, idx) =>(
                    <ReactPlayer 
                    key={idx}
                    // light={true}
                    // width="20rem"
                    // height="20rem"
                    style={{
                        height: "20rem",width: "auto", maxWidth: "20rem"
                        
                    }}
                    controls={true}
                    pip={true}
                    url={`${baseUrl}${v.videos_path}`} />
                   ))
                }
            </MediaWrapper>
        </MediaContainer>
        <MediaContainer>
            <MediaH1>Audios</MediaH1>
            <MediaWrapper>
            {
                   audio && audio.map((a, idx) =>(
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <img src={baseUrl + a.audios_directory}
                    style={{height: "12rem", width: "250px"}}
                    alt="" />
                    <ReactPlayer
                    key={idx}
                    width="20rem"
                    height="4rem"
                    style={{
                        height: "4rem", maxWidth: "20rem"
                        
                    
                    }}
                    // light={baseUrl + a.audios_directory}
                    controls={true}
                    pip={true}
                    url={`${baseUrl}${a.audios_path}`} />
                    </div>
                   ))
                }
            
            </MediaWrapper>
        </MediaContainer>
        <MediaContainer>
            <MediaH1>Publications</MediaH1>
            <MediaWrapper>
            
            </MediaWrapper>
        </MediaContainer>
        </>
    )
}

export default MediaSection
