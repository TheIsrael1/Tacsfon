import React, {useState} from 'react'
import {Button} from '../ButtonElements'
import { 
    ContactContainer, 
    ContactWrapper, 
    ContactRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtext, 
    FormWrap,
    Form,
    Field,
    FieldLabel,
    Select,
    Option
    
 } from './ContactElements';

export const ContactSection = () =>{

    const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

    return(

        <>
        <ContactContainer lightBg={true}>
                <ContactWrapper>
                    <ContactRow>
                        <Column1>
                        <Heading lightText={false} >Directions</Heading>
                         <TopLine>We are situated inside the University of Ibadan</TopLine>
                         <Subtext darkText={true} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                         </Subtext>
                        </Column1>
                        <Column2>
                       <FormWrap>
                        <Form> 
                            <Heading lightText={false}>Message </Heading>
                            <FieldLabel htmlFor='for'> Name </FieldLabel>
                            <Field type ="text" onChange = {e => setName({name: e.target.value})}/>
                            <FieldLabel htmlFor='for'> Catergotry </FieldLabel>
                            <Select name="category" id="category">
                            <Option value="Alumni">Alumni</Option>
                            <Option value="Undergraduate">Undergraduate</Option>
                            <Option value="Others">Others</Option>
                            </Select>
                            <FieldLabel htmlFor='for'> Email </FieldLabel>
                            <Field label="Email"  type ="email" onChange ={e => setEmail({email: e.target.value})}/>
                            <FieldLabel htmlFor='for'> Message </FieldLabel>
                            <Field label="Message" type ="text" onChange  ={e => setMessage({message: e.target.value})}/>
                            <Button>  Submit </Button>
                        </Form>
                       </FormWrap>
                        </Column2>
                    </ContactRow>
                </ContactWrapper>
            </ContactContainer>


        </>
    )
}

export default ContactSection;

