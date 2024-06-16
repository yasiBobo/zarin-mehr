import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

import Marquee from 'react-fast-marquee';
import exciteIcon from './assets/images/exciteIcon.svg';
import leanIcon from './assets/images/leanIcon.svg';
import peaceIcon from './assets/images/peaceIcon.svg';


const HomeContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 1.5rem 0;
  position: relative;
`;

const HomeBanner = styled(motion.div)`
  width: 90%;
  height: 90vh;
  background: url("./src/assets/images/banner.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 25px;
`;

const MarqueeText = styled.h2`
  font-size: 4.5rem;
  color: #0CA4D4;
  font-weight: 500;
  margin: 0.5rem 0 0 0;
`;

const HomeFilter = styled(motion.div)`
  width: 100%;
  text-align: center;
`;

const FilterButton = styled.button`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 2px solid #0CA4D4;
  background: #fff;
  color: #0CA4D4;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #0CA4D4;
    color: #fff;
  }
`;

const HomeRules = styled(motion.div)`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 1.5rem 0;
`;

const subjects = ['تن‌درستی و آرامش', 'یادگیری و توسعه', 'لذت و هیجان'];
const subjectIcons = {
  'لذت و هیجان': <img src={exciteIcon} alt="excite icon" style={{ width: '20px', height: '20px' }} />,
  'تن‌درستی و آرامش': <img src={peaceIcon} alt="peace icon" style={{ width: '20px', height: '20px' }} />,
  'یادگیری و توسعه': <img src={leanIcon} alt="learn icon" style={{ width: '20px', height: '20px' }} />,
};

const images = [
  // EXCITE
  { src: './src/assets/images/excite/sub1-1.png', subject: 'لذت و هیجان' },
  { src: './src/assets/images/excite/sub1-2.png', subject: 'لذت و هیجان' },
  { src: './src/assets/images/excite/sub1-3.png', subject: 'لذت و هیجان' },
  { src: './src/assets/images/excite/sub1-4.png', subject: 'لذت و هیجان' },
  { src: './src/assets/images/excite/sub1-5.png', subject: 'لذت و هیجان' },
  { src: './src/assets/images/excite/sub1-6.png', subject: 'لذت و هیجان' },
  { src: './src/assets/images/excite/sub1-7.png', subject: 'لذت و هیجان' },
  { src: './src/assets/images/excite/sub1-8.png', subject: 'لذت و هیجان' },
  { src: './src/assets/images/excite/sub1-9.png', subject: 'لذت و هیجان' },
  { src: './src/assets/images/excite/sub1-10.png', subject: 'لذت و هیجان' },
  { src: './src/assets/images/excite/sub1-11.png', subject: 'لذت و هیجان' },
  { src: './src/assets/images/excite/sub1-12.png', subject: 'لذت و هیجان' },
  // PEACE
  { src: './src/assets/images/peace/sub3-1.png', subject: 'تن‌درستی و آرامش' },
  { src: './src/assets/images/peace/sub3-2.png', subject: 'تن‌درستی و آرامش' },
  { src: './src/assets/images/peace/sub3-3.png', subject: 'تن‌درستی و آرامش' },
  { src: './src/assets/images/peace/sub3-4.png', subject: 'تن‌درستی و آرامش' },
  { src: './src/assets/images/peace/sub3-5.png', subject: 'تن‌درستی و آرامش' },
  { src: './src/assets/images/peace/sub3-6.png', subject: 'تن‌درستی و آرامش' },
  { src: './src/assets/images/peace/sub3-7.png', subject: 'تن‌درستی و آرامش' },
  { src: './src/assets/images/peace/sub3-8.png', subject: 'تن‌درستی و آرامش' },
  { src: './src/assets/images/peace/sub3-9.png', subject: 'تن‌درستی و آرامش' },
  { src: './src/assets/images/peace/sub3-10.png', subject: 'تن‌درستی و آرامش' },
  { src: './src/assets/images/peace/sub3-11.png', subject: 'تن‌درستی و آرامش' },
  { src: './src/assets/images/peace/sub3-12.png', subject: 'تن‌درستی و آرامش' },
  // LEARN
  { src: './src/assets/images/learn/sub2-1.png', subject: 'یادگیری و توسعه' },
  { src: './src/assets/images/learn/sub2-2.png', subject: 'یادگیری و توسعه' },
  { src: './src/assets/images/learn/sub2-3.png', subject: 'یادگیری و توسعه' },
  { src: './src/assets/images/learn/sub2-4.png', subject: 'یادگیری و توسعه' },
  { src: './src/assets/images/learn/sub2-5.png', subject: 'یادگیری و توسعه' },
  { src: './src/assets/images/learn/sub2-6.png', subject: 'یادگیری و توسعه' },
  { src: './src/assets/images/learn/sub2-7.png', subject: 'یادگیری و توسعه' },
  { src: './src/assets/images/learn/sub2-8.png', subject: 'یادگیری و توسعه' },
  { src: './src/assets/images/learn/sub2-9.png', subject: 'یادگیری و توسعه' },
  { src: './src/assets/images/learn/sub2-10.png', subject: 'یادگیری و توسعه' },
  { src: './src/assets/images/learn/sub2-11.png', subject: 'یادگیری و توسعه' },
  { src: './src/assets/images/learn/sub2-12.png', subject: 'یادگیری و توسعه' },
];

function Home() {
  const [selectedSubject, setSelectedSubject] = useState('All');

  const filteredImages = selectedSubject === 'All'
    ? images
    : images.filter(image => image.subject === selectedSubject);

  return (
    <div className='App home'>
      <HomeContainer>
        {/* BANNER */}
        <HomeBanner />
        {/* BANNER */}

        {/* MOTION TEXT */}
        <Marquee gradient={false}>
          <MarqueeText>
            خلق تجربه ای خاص
          </MarqueeText>
        </Marquee>
        {/* MOTION TEXT */}

        {/* FILTER */}
        <HomeFilter>
          <div className="filter-header">
            <h2 className="filter-title">
              انتخاب مسیر و مقصد با شماست!
            </h2>

            <p className="filter-text">
              ما معتقدیم هر فردی بهتر از دیگران نیازهای خود را می‌شناسد و می‌داند برای داشتن یک زندگی پربار به چه چیزی احتیاج دارد. به همین دلیل، به‌جای تخصیص «زرین مهر» به فعالیت‌هایی خاص، می‌خواهیم طیف وسیعی از تجربیات را به شما معرفی کنیم تا با الهام گرفتن از آن‌ها، بهترین شیوه‌ی استفاده از مزایای فصلی زرین را پیدا کنید.
            </p>
          </div>

          <div className='filter-container'>
            <div className='filter-buttons'>
              {subjects.map(subject => (
                <button className='filter-btn'
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                >
                  {subject}
                  {subjectIcons[subject]}
                </button>
              ))}
            </div>
            <Marquee speed={30} className='filter-row'>
              {filteredImages.slice(0, 6).map((image, index) => (
                <img className='filter-img' key={index} src={image.src} alt={image.subject} />
              ))}
            </Marquee>
            {/* Display the next 6 images in the second row */}
            <Marquee direction='rtl' speed={30} className='filter-row'>
              {filteredImages.slice(6, 12).map((image, index) => (
                <img className='filter-img' key={index} src={image.src} alt={image.subject} />
              ))}
            </Marquee>
          </div>
        </HomeFilter>
        {/* FILTER */}

        {/* RULES */}
        <HomeRules>
          <div className="rule-header">
            <h3 className="rule-title">
              بازی زرین مهر
            </h3>
            <h4 className="rule-preTitle">
              ترجیح می‌دهید «زرین‌مهر» را صرف کسب چه تجربه‌ای کنید؟
            </h4>
            <p className="rule-text">
              انتخاب های شما شخصیت شما را نمایان میکند.
              <br />
              با انجام بازی شخصیت شناسی در قرعه کشی زرین مهر شرکت کنید.
            </p>
          </div>

          {/* <Swiper
            effect={'cards'}
            grabCursor={true}
            className="rule-slider"
            slidesPerView={1} // Only one card is visible at a time
            spaceBetween={20} // Adjust the space between cards
          >
            <SwiperSlide className="rule-card">
              <h2 className="card-title">انتخاب</h2>
              <p className="card-text">
                شما باید از بین تجربه‌هایی که
                <br />
                پیشنهاد داده‌ایم، 15 تجربه را برای این
                <br />
                فصل خود انتخاب کنید.
              </p>
            </SwiperSlide>

            <SwiperSlide className="rule-card">
            </SwiperSlide>

          </Swiper> */}

          {/* Add more slides as needed */}
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="rule-cards"
          >
            <SwiperSlide className='rule-card'>
              <h2 className="card-title">
                انتخاب
              </h2>
              <p className="card-text">
                شما باید از بین تجربه‌هایی که
                <br />
                پیشنهاد داده‌ایم، 15 تجربه را برای این
                <br />
                فصل خود انتخاب کنید.
              </p>
            </SwiperSlide>
            <SwiperSlide className='rule-card'>
              <h2 className="card-title">
                دسته‌بندی
              </h2>
              <p className="card-text">
                تجربه‌هایی که انتخاب می‌کنید در
                <br />
                دسته‌بندی‌های زیر قرار می‌گیرد.
                <br />
                لذت و هیجان ،یادگیری و توسعه
                <br />
                تندرستی و آرامش
              </p>
            </SwiperSlide>
            <SwiperSlide className='rule-card'>
              <h2 className="card-title">
                شخصیت
              </h2>
              <p className="card-text">
                انتخاب‌های شما شخصیت شما و تعادل
                <br />
                بین جنبه‌های مختلف زندگیتان را آشکار
                <br />
                می‌کند.
              </p>
            </SwiperSlide>

            <SwiperSlide className='rule-card'>
              <h2 className="card-title">
                جایزه
              </h2>
              <p className="card-text">
                با شرکت در بازی زرین‌مهر می‌توانید
                <br />
                مبــلغ زرین‌مــهــر خود را 2 برابر کــنید.
                <br />
                ما به قید قرعه، مبلغ زرین‌مهر سه نفر
                <br />
                واریز می‌کنیم.
              </p>
            </SwiperSlide>
          </Swiper>
        </HomeRules>
        {/* RULES */}

        {/* START BUTTON */}
        <a href='/' className="home-btn">
          ورود
        </a>
        {/* START BUTTON */}
      </HomeContainer>
    </div>
  );
}

export default Home;
