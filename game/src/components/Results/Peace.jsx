import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import "./result.scss"
import { useInView } from 'react-intersection-observer'


const Peacee = styled(motion.div)`
  max-width: 470px;
  width: 100%;
  margin: 0 auto;
  height: 155vh;
  background: url("./src/assets/images/PeaceBg.svg");
  background-color: #cecece;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* overflow: hidden; */
  overflow:  hidden;
`

const PeaceFooter = styled(motion.footer)`
  width: 100%;
  padding: 3rem 0 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PeaceHeader = styled(motion.header)`
  width: 100%;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const PeaceContainer = styled(motion.div)`
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

const PeaceAbsoluteImg = styled(motion.div)`
  position: absolute;
  content: "";
  width: 180px;
  height: 180px;
  left: 2.5rem;
  bottom: 550px;
`

const PeaceText = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 4rem 0;
`

const PeaceEmojies = styled(motion.ul)`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  gap: 1.5rem;
  margin: 1%.5 0 3rem 0;
  padding: 0;
`


const PeaceEmoji = styled(motion.li)`
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

const Peace = ({userData}) => {
  // DOWNLOAD IMAGE 
  const imageUrl1 = './src/assets/images/peaceResult(1).jpg';
  const imageUrl2 = './src/assets/images/peaceResult(2).jpg';
  const { first_name: firstName, last_name: lastName } = userData;

  const handleDownloadImages = () => {
    downloadImage(imageUrl1);
    downloadImage(imageUrl2);
  };

  const downloadImage = (imageUrl) => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'result.jpg'; // You can set the filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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



  return (
    <Peacee>
      <PeaceContainer ref={containerRef}>
        <PeaceAbsoluteImg
          initial={{ opacity: 0, x: '-100%' }}
          animate={containerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <img src="./src/assets/images/saltIcon.svg" alt="disco" />
        </PeaceAbsoluteImg>
        {/* HEADER */}
        <PeaceHeader
          initial={{ opacity: 0, y: -50 }}
          animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={transition}
        >
          <h2 className="result-title">
            چراغ نمکی
          </h2>
          <div className="result-header_text">
            {firstName}  {lastName} عزیز
            برای تو تندرستی و آرامش از هر چیزی مهم‌تره.بعضی وقتا
            ذار هیجان وارد زندگی‌ت بشه.
          </div>
          <button className="result-btn peace-light" onClick={handleDownloadImages}>
            دانلود و اشتراک‌گذاری
          </button>
        </PeaceHeader>
        {/* HEADER */}

        {/* TEXT */}
        <PeaceText
          initial={{ opacity: 0, x: '-100%' }}
          animate={containerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' }}
          transition={transition}
        >
          <p className="result-text">
            تو مثل چراغ نمکی هستی! با نور ملایم و آرامش‌بخش خودت، به بقیه کمک می‌کنی تا بعد از یک روز پرهیاهو، به آرامش برسند. توجهی که به آرامش و سلامتی خودت و دیگران داری قابل تحسینه، اما یادت باشه که گاهی اوقات لازمه از این فضا فاصله بگیری و به دنبال فرصت‌های جدید برای یادگیری و رشد بری.          </p>
        </PeaceText>
        {/* TEXT */}

        {/* EMOJI */}
        <PeaceEmojies>
          <PeaceEmoji
            ref={emojiRef1}
            variants={emojiVariants}
            initial="hidden"
            animate={emojiInView1 ? "visible" : "hidden"}
          >
            <img src="./src/assets/images/Attraction.svg" alt="" className="emoji-img" />
            <p className="emoji-text">
              جذاب
            </p>
          </PeaceEmoji>

          <PeaceEmoji
            ref={emojiRef2}
            variants={emojiVariants}
            initial="hidden"
            animate={emojiInView2 ? "visible" : "hidden"}
          >
            <img src="./src/assets/images/hyperactive2.svg" alt="" className="emoji-img" />
            <p className="emoji-text">
              پرانرژی
            </p>
          </PeaceEmoji>

          <PeaceEmoji
            ref={emojiRef3}
            variants={emojiVariants}
            initial="hidden"
            animate={emojiInView3 ? "visible" : "hidden"}
          >
            <img src="./src/assets/images/HandShake.svg" alt="" className="emoji-img" />
            <p className="emoji-text">
              نوع دوست
            </p>
          </PeaceEmoji>
        </PeaceEmojies>
        {/* EMOJI */}

        {/* FOOTER */}
        <PeaceFooter
          initial={{ opacity: 0, scale: 0.5 }}
          animate={containerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <img src="./src/assets/images/zarinWhiteLogo.svg" alt="footer-img" className="result-footer_img" />
        </PeaceFooter>
        {/* FOOTER */}
      </PeaceContainer>
    </Peacee>
  )
}

export default Peace;