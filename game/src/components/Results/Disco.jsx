import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import "./result.scss"
import { useInView } from 'react-intersection-observer'


const Discoo = styled(motion.div)`
  max-width: 470px;
  width: 100%;
  margin: 0 auto;
  height: 155vh;
  background: url("./src/assets/images/DiscoBg.svg");
  background-color: #cecece;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* overflow: hidden; */
  overflow:  hidden;
`

const DiscoFooter = styled(motion.footer)`
  width: 100%;
  padding: 3rem 0 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DiscoHeader = styled(motion.header)`
  width: 100%;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const DiscoContainer = styled(motion.div)`
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

const DiscoAbsoluteImg = styled(motion.div)`
  position: absolute;
  content: "";
  width: 180px;
  height: 180px;
  left: -1rem;
  bottom: 415px;
`

const DiscoText = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 4rem 0;
`

const DiscoEmojies = styled(motion.ul)`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  gap: 1.5rem;
  margin: 1%.5 0 3rem 0;
  padding: 0;
`


const DiscoEmoji = styled(motion.li)`
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


const Disco = ({ userData }) => {
  // DOWNLOAD IMAGE 
  const imageUrl1 = './src/assets/images/DiscoResult(1).jpg';
  const imageUrl2 = './src/assets/images/DiscoResult(2).jpg';

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


  const { first_name: firstName, last_name: lastName } = userData;


  return (
    <Discoo>
      <DiscoContainer ref={containerRef}>
        <DiscoAbsoluteImg
          initial={{ opacity: 0, x: '-100%' }}
          animate={containerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <img src="./src/assets/images/DiscoIcon.svg" alt="disco" />
        </DiscoAbsoluteImg>
        {/* HEADER */}
        <DiscoHeader
          initial={{ opacity: 0, y: -50 }}
          animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={transition}
        >
          <h2 className="result-title">
            چـــــراغ د یـــســکــو
          </h2>
          <div className="result-header_text">
            {firstName} {lastName} عزیز
            برای تو لذت و هیجان از هر چیزی مهم‌تره.بعضی وقتا از این
            اطرافت بیشتر توجه کن
          </div>
          <button className="result-btn" onClick={handleDownloadImages}>
            دانلود و اشتراک‌گذاری
          </button>
        </DiscoHeader>
        {/* HEADER */}

        {/* TEXT */}
        <DiscoText
          initial={{ opacity: 0, x: '-100%' }}
          animate={containerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' }}
          transition={transition}
        >
          <p className="result-text">
            تو مثل چراغ دیسکو هستی! با نور و رنگ‌های شاد و پویایی که از خودت ساطع می‌کنی، شور و نشاط رو به هر جمعی می‌بری و همه رو سر ذوق می‌آوری. اما یادت باشه که گاهی اوقات لازمه که کمی از این هیاهو فاصله بگیری و به آرامش درون خودت گوش کنی.
          </p>
        </DiscoText>
        {/* TEXT */}

        {/* EMOJI */}
        <DiscoEmojies>
          <DiscoEmoji
            ref={emojiRef1}
            variants={emojiVariants}
            initial="hidden"
            animate={emojiInView1 ? "visible" : "hidden"}
          >
            <img src="./src/assets/images/Social.svg" alt="" className="emoji-img" />
            <p className="emoji-text">
              اجتماعی
            </p>
          </DiscoEmoji>

          <DiscoEmoji
            ref={emojiRef2}
            variants={emojiVariants}
            initial="hidden"
            animate={emojiInView2 ? "visible" : "hidden"}
          >
            <img src="./src/assets/images/Passionate.svg" alt="" className="emoji-img" />
            <p className="emoji-text">
              پرشور
            </p>
          </DiscoEmoji>

          <DiscoEmoji
            ref={emojiRef3}
            variants={emojiVariants}
            initial="hidden"
            animate={emojiInView3 ? "visible" : "hidden"}
          >
            <img src="./src/assets/images/Hyperactive.svg" alt="" className="emoji-img" />
            <p className="emoji-text">
              بیش فعال
            </p>
          </DiscoEmoji>
        </DiscoEmojies>
        {/* EMOJI */}

        {/* FOOTER */}
        <DiscoFooter
          initial={{ opacity: 0, scale: 0.5 }}
          animate={containerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <img src="./src/assets/images/zarinWhiteLogo.svg" alt="footer-img" className="result-footer_img" />
        </DiscoFooter>
        {/* FOOTER */}
      </DiscoContainer>
    </Discoo>
  )
}

export default Disco;