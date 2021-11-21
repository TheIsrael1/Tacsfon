import React, {useState, useEffect} from 'react'
import ProfileCard from '../../Utils/ProfileCard'
import {BioContainer, BioH1, BioWrapper} from './BioSectionElements'
import axios from 'axios'


const BioSection = () => {

    const [bio, setBio] = useState([])

    useEffect(()=>{
        axios.get(
          `http://api.hebbnet.com/api/excos`,  {
            headers: {
              'Accept': 'application/json',
            }
          } 
          ).then(res=> {
            
            // var response = res.data.toString().match(/{(.*)}/g)[0]
            // response = JSON.parse(response)
            // console.log("response", response)
            const bio = res.data.payload.table_data;
            setBio(bio);
            }
        ).catch(err =>{
          console.log("error", err)
        })
      }, [])

    return (
        <>
             <BioContainer id="services">
            <BioH1>Meet Tacsfon's Executives</BioH1>
            <BioWrapper>
               {bio && bio.map((b, idx)=>(
                    <ProfileCard 
                    img={b.excos_path}
                    post ={b.post}
                    name ={b.name}
                    bio ={b.bio? b.bio : `house of refuge`}   
                    dob ={b.dob}
                    />
               ))}
           </BioWrapper>
        </BioContainer>
        </>
    )
}

export default BioSection
