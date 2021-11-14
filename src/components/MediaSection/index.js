import React, {useState, useEffect} from 'react'
import axios  from 'axios'
import ReactPlayer from 'react-player'
import {MediaContainer, MediaWrapper, MediaH1} from './MediaSectionElements'
import {MdMovieCreation as Vid} from 'react-icons/md'  
import {MdAudiotrack as Aud} from 'react-icons/md'   


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
            <MediaH1>Videos<Vid style={{position: "relative", top:"5", left:"2px"}}/></MediaH1>
            <MediaWrapper>
                {
                   video && video.map((v, idx) =>(
                    <ReactPlayer 
                    key={idx}
                    // light={true}
                    width="16rem"
                    height="20rem"
                    controls={true}
                    pip={true}
                    url={`${baseUrl}${v.videos_path}`} />
                   ))
                }
            </MediaWrapper>
        </MediaContainer>
        <MediaContainer>
            <MediaH1>Audios <Aud style={{position: "relative", top:"5"}}/></MediaH1>
            <MediaWrapper>
            {
                   audio && audio.map((a, idx) =>(
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <img src={a.audios_directory ? baseUrl + a.audios_directory : `https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?cs=srgb&dl=pexels-elviss-railijs-bit%C4%81ns-1389429.jpg&fm=jpg` }
                    style={{height: "12rem", width: "250px"}}
                    alt="" />
                    <ReactPlayer
                    key={idx}
                    width="16rem"
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
