'use client'
import Image from 'next/image'
import Slider from 'react-slick'
import p1 from '@/assets/0qo2r4.jpg'
import p2 from '@/assets/439rj3.jpg'
import p3 from '@/assets/xlq1rv.jpg'
import p4 from '@/assets/dgzj9o.jpg'
import p5 from '@/assets/nr7zq0.jpg'
import p6 from '@/assets/e7ek7k.jpg'
import styles from './slider.module.scss'
import './slider.scss'
import { useRef } from 'react'

export default function FrontSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    cssEase: 'linear',
    fade: true,
    pauseOnHover: true
  }
  return (
    <section id={`${styles.fontSlider}`}>
      <div className={`${styles.container} container mx-auto`}>
        <div className={`${styles.fronSlider} fronSlider`}>
          <Slider className={``} {...settings}>
            <div className={`${styles.imgContainerSlider}`}>
              <Image src={p1} alt="img not found" />
            </div>
            <div className={`${styles.imgContainerSlider}`}>
              <Image src={p2} alt="img not found" />
            </div>
            <div className={`${styles.imgContainerSlider}`}>
              <Image src={p3} alt="img not found" />
            </div>
            <div className={`${styles.imgContainerSlider}`}>
              <Image src={p4} alt="img not found" />
            </div>
            <div className={`${styles.imgContainerSlider}`}>
              <Image src={p5} alt="img not found" />
            </div>
            <div className={`${styles.imgContainerSlider}`}>
              <Image src={p6} alt="img not found" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}
