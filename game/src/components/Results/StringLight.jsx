import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const StringLightt = styled(motion.div)`
  max-width: 470px;
  width: 100%;
  margin: 0 auto;
  height: 155vh;
  background: url("./src/assets/images/StringlightBg.svg");
  background-color: #cecece;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* overflow: hidden; */
  overflow:  hidden;
`

const StringFooter = styled(motion.footer)`
  width: 100%;
  padding: 3rem 0 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StringHeader = styled(motion.header)`
  width: 100%;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const StringContainer = styled(motion.div)`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  direction: rtl;
  /* CENTER CONTENT */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`

const StringAbsoluteImg = styled(motion.div)`
  position: absolute;
  content: "";
  width: 180px;
  height: 180px;
  left: 10rem;
  bottom: 445px;
  z-index: 1;
`

const StringText = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 4rem 0;
`

const StringEmojies = styled(motion.ul)`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  gap: 1.5rem;
  margin: 1%.5 0 3rem 0;
  padding: 0;
`


const StringEmoji = styled(motion.li)`
`

const emojiVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
    },
  },
};


function StringLight({ userData }) {
  // DOWNLOAD IMAGE 
  const imageUrl1 = './src/assets/images/stringLightResult(1).jpg';
  const imageUrl2 = './src/assets/images/stringLightResult(2).jpg';
  const { first_name: firstName, last_name: lastName } = userData;

  const handleDownloadImages = () => {
    downloadImage(imageUrl1);
    downloadImage(imageUrl2);
  };

  // ANIMATION
  const { ref: containerRef, inView: containerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: emojiRef1, inView: emojiInView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: emojiRef2, inView: emojiInView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: emojiRef3, inView: emojiInView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const transition = { duration: 1.5, ease: 'easeInOut' };

  const downloadImage = (imageUrl) => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'result.jpg'; // You can set the filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <StringLightt>
      <StringContainer ref={containerRef}>
        <StringAbsoluteImg
          initial={{ opacity: 0, x: '-100%' }}
          animate={containerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <img src="./src/assets/images/stringlightIcon.svg" alt="disco" />
        </StringAbsoluteImg>
        {/* HEADER */}
        <StringHeader
          initial={{ opacity: 0, y: -50 }}
          animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={transition}
        >
          <h2 className="result-title">
            چراغ ریسه‌ای
          </h2>
          <div className="result-header_text">
            {firstName}  {lastName} عزیز
            در کنار یادگیری به فکر  لذت بردن از زندگی هم هستی.
            حواست به تندرستی خودت باشه
          </div>
          <button className="result-btn string-btn" onClick={handleDownloadImages}>
            ذخیره و اشتراک‌گذاری
          </button>
        </StringHeader>
        {/* HEADER */}

        {/* TEXT */}
        <StringText
          initial={{ opacity: 0, x: '-100%' }}
          animate={containerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' }}
          transition={transition}
        >
          <p className="result-text">
            تو مثل چراغ ریسه‌ای هستی! دور هر چیزی که برات جذاب و جالبه می‌پیچی و با کنجکاوی تمام، زیر و بمش رو کشف می‌کنی. از اینکه به دیگران حس خوب می‌دی لذت می‌بری، اما یادت باشه که گاهی اوقات لازمه کمی استراحت کنی و انرژی ذخیره کنی.
          </p>
        </StringText>
        {/* TEXT */}

        {/* EMOJI */}
        <StringEmojies>
          <StringEmoji
            ref={emojiRef1}
            variants={emojiVariants}
            initial="hidden"
            animate={emojiInView1 ? "visible" : "hidden"}
          >
            <img src="./src/assets/images/experties.svg" alt="" className="emoji-img" />
            <p className="emoji-text">
              تجربه‌گرا
            </p>
          </StringEmoji>

          <StringEmoji
            ref={emojiRef2}
            variants={emojiVariants}
            initial="hidden"
            animate={emojiInView2 ? "visible" : "hidden"}
          >
            <img src="./src/assets/images/confused.svg" alt="" className="emoji-img" />
            <p className="emoji-text">
              کنجکاو
            </p>
          </StringEmoji>

          <StringEmoji
            ref={emojiRef3}
            variants={emojiVariants}
            initial="hidden"
            animate={emojiInView3 ? "visible" : "hidden"}
          >
            <img src="./src/assets/images/Hyperactive2.svg" alt="" className="emoji-img" />
            <p className="emoji-text">
              پرانرژی
            </p>
          </StringEmoji>
        </StringEmojies>
        {/* EMOJI */}

        {/* FOOTER */}
        <StringFooter
          initial={{ opacity: 0, scale: 0.5 }}
          animate={containerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <img src="./src/assets/images/zarinWhiteLogo.svg" alt="footer-img" className="result-footer_img" />
        </StringFooter>
        {/* FOOTER */}
      </StringContainer>
    </StringLightt>
  )
}

export default StringLight
