import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import Divider from '@mui/material/Divider';

export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <br></br>
            <Divider sx={{"backgroundColor": "#404040"}}></Divider>
            <br></br>
            <p style={{color: info.baseColor}}> Languages</p>
            <ul className={Style.skills}>
                {info.skills.languages.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <br></br>
            <Divider sx={{"backgroundColor": "#404040"}}></Divider>
            <br></br>
            <p style={{color: info.baseColor}}> Frameworks</p>
            <ul className={Style.skills}>
                {info.skills.frameworks.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <br></br>
            <Divider sx={{"backgroundColor": "#404040"}}></Divider>
            <br></br>
            <p style={{color: info.baseColor}}> Tools</p>
            <ul className={Style.skills}>
                {info.skills.tools.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <br></br>
            <Divider sx={{"backgroundColor": "#404040"}}></Divider>
            <br></br>
            <p style={{color: info.baseColor}}> Databases/Caches</p>
            <ul className={Style.skills}>
                {info.skills.databases.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <br></br>
            <Divider sx={{"backgroundColor": "#404040"}}></Divider>
            <br></br>
            <p style={{color: info.baseColor}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}