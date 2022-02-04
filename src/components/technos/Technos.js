import React, { useState } from 'react'
import Flip from 'react-reveal/Flip'
import Slide from 'react-reveal/Slide'
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai'
import { IoLogoSass, IoLogoReact, IoLogoJavascript } from 'react-icons/io5'
import { SiThreedotjs, SiBlender, SiAutodesk, SiAdobephotoshop, SiVisualstudiocode, SiMongodb, SiBootstrap, SiJava, SiFirebase, SiNpm, SiMysql } from 'react-icons/si' 
import './Technos.scss'
export default function Technos() {
  return (
    <section className="container-technos" id="technologies">
      <Flip top opposite cascade><h3 className="technos-heading">FAQ: A W CZYM?</h3></Flip>
        <Slide bottom opposite cascade>
          <div className="technos-content">
            <AiFillHtml5 className='technos-icon' />
            <IoLogoSass className='technos-icon' />
            <IoLogoReact className='technos-icon' />
            <SiThreedotjs className='technos-icon' />
            <IoLogoJavascript className='technos-icon' />
            <SiBootstrap className='technos-icon' />
            <SiAdobephotoshop className='technos-icon' />
            <SiAutodesk className='technos-icon' />
            <SiBlender className='technos-icon' />
            <SiVisualstudiocode className='technos-icon' />
            <AiFillGithub className='technos-icon' />
            <SiFirebase className='technos-icon' />
            <SiMongodb className='technos-icon' />
            <SiJava className='technos-icon' />
            <SiNpm className='technos-icon' />
            <SiMysql className='technos-icon' />
          </div>
        </Slide>
    </section> 
  );
}
