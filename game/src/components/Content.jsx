import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";


// CARD DATA
// SUB 1 = EXCITE
// SUB 2 = LEARN
// SUB 3 = PEACE
const cardData = [
  { id: 24, value: 'بافتنی', subject: 'subTwo', imgSrc: './src/assets/images/learn/sub2-12.png' },
  { id: 18, value: 'خیاطی', subject: 'subTwo', imgSrc: './src/assets/images/learn/sub2-6.png' },
  { id: 5, value: 'پیکنیک', subject: 'subOne', imgSrc: './src/assets/images/excite/sub1-5.png' },
  { id: 35, value: 'اسب سواری', subject: 'subThree', imgSrc: './src/assets/images/peace/sub3-11.png' },
  { id: 11, value: 'کاراوکه', subject: 'subOne', imgSrc: './src/assets/images/excite/sub1-11.png' },
  { id: 29, value: 'ماساژ', subject: 'subThree', imgSrc: './src/assets/images/peace/sub3-5.png' },
  { id: 8, value: 'پازل', subject: 'subOne', imgSrc: './src/assets/images/excite/sub1-8.png' },
  { id: 28, value: 'بولینگ', subject: 'subThree', imgSrc: './src/assets/images/peace/sub3-4.png' },
  { id: 32, value: 'دوچرخه سواری', subject: 'subThree', imgSrc: './src/assets/images/peace/sub3-8.png' },
  { id: 10, value: 'حیوان خانگی', subject: 'subOne', imgSrc: './src/assets/images/excite/sub1-10.png' },
  { id: 2, value: 'خانواده', subject: 'subOne', imgSrc: './src/assets/images/excite/sub1-2.png' },
  { id: 9, value: 'موزه', subject: 'subOne', imgSrc: './src/assets/images/excite/sub1-9.png' },
  { id: 20, value: 'بازیافت', subject: 'subTwo', imgSrc: './src/assets/images/learn/sub2-8.png' },
  { id: 27, value: 'ایروبیک', subject: 'subThree', imgSrc: './src/assets/images/peace/sub3-3.png' },
  { id: 25, value: 'سخره نوردی', subject: 'subThree', imgSrc: './src/assets/images/peace/sub3-1.png' },
  { id: 17, value: 'آشپزی', subject: 'subTwo', imgSrc: './src/assets/images/learn/sub2-5.png' },
  { id: 13, value: 'یادگیری زبان', subject: 'subTwo', imgSrc: './src/assets/images/learn/sub2-1.png' },
  { id: 21, value: 'کتاب خواندن', subject: 'subTwo', imgSrc: './src/assets/images/learn/sub2-9.png' },
  { id: 1, value: 'بازی ویدئویی', subject: 'subOne', imgSrc: './src/assets/images/excite/sub1-1.png' },
  { id: 33, value: 'پیاده روی', subject: 'subThree', imgSrc: './src/assets/images/peace/sub3-9.png' },
  { id: 19, value: 'عکاسی', subject: 'subTwo', imgSrc: './src/assets/images/learn/sub2-7.png' },
  { id: 34, value: 'رقص', subject: 'subThree', imgSrc: './src/assets/images/peace/sub3-10.png' },
  { id: 7, value: 'فیلم', subject: 'subOne', imgSrc: './src/assets/images/excite/sub1-7.png' },
  { id: 12, value: 'میراث معماری', subject: 'subOne', imgSrc: './src/assets/images/excite/sub1-12.png' },
  { id: 15, value: 'خوش نویسی', subject: 'subTwo', imgSrc: './src/assets/images/learn/sub2-3.png' },
  { id: 16, value: 'نقاشی', subject: 'subTwo', imgSrc: './src/assets/images/learn/sub2-4.png' },
  { id: 36, value: 'ژیمناستیک', subject: 'subThree', imgSrc: './src/assets/images/peace/sub3-12.png' },
  { id: 6, value: 'پیاده روی', subject: 'subOne', imgSrc: './src/assets/images/excite/sub1-6.png' },
  { id: 14, value: 'نجاری', subject: 'subTwo', imgSrc: './src/assets/images/learn/sub2-2.png' },
  { id: 3, value: 'ماهیگیری', subject: 'subOne', imgSrc: './src/assets/images/excite/sub1-3.png' },
  { id: 30, value: 'یوگا', subject: 'subThree', imgSrc: './src/assets/images/peace/sub3-6.png' },
  { id: 22, value: 'تئاتر', subject: 'subTwo', imgSrc: './src/assets/images/learn/sub2-10.png' },
  { id: 23, value: 'کاردستی', subject: 'subTwo', imgSrc: './src/assets/images/learn/sub2-11.png' },
  { id: 31, value: 'شنا', subject: 'subThree', imgSrc: './src/assets/images/peace/sub3-7.png' },
  { id: 4, value: 'استادیوم', subject: 'subOne', imgSrc: './src/assets/images/excite/sub1-4.png' },
  { id: 26, value: 'بدنسازی', subject: 'subThree', imgSrc: './src/assets/images/peace/sub3-2.png' }
];




const ListContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  direction: rtl;
  text-align: center;
  margin: 0;
  padding: 0;
  gap: 20px;
`;

const CardListContainer = styled.div`
  width: 100%;
  height: calc(100vh - 120px); /* Adjust the height as needed */
  overflow-y: auto;
  overflow-x: hidden;
  padding: 8px 0;

  @media screen and (max-width: 768px) {
    height: calc(100vh - 100px); /* Adjust the height for mobile devices */
  }

  @media screen and (max-width: 480px) {
    height: calc(100vh - 80px); /* Adjust the height for smaller mobile devices */
  }
`;

const ListCards = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 18px;
`;

const ListCard = styled(motion.div)`
  width: 90%;
  margin: 0 auto;
  padding: 10px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 2px;
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  align-items: center;
  border: ${(props) => (props.isActive ? '2px solid #3498db' : 'none')};
  background-color: ${(props) => (props.isActive ? '#d9d9d9' : 'transparent')}; /* Apply background color if active */
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isActive ? '#d9d9d9' : '#f5f5f5')}; /* Apply hover color only if not active */
  }
`;

const CardContent = styled.div`
  display: flex;
  gap: 8px;
  color: ${(props) => props.theme.titleColor};
  font-size: ${(props) => props.theme.fontSizeLg};
  font-weight: 700;
`;

const ContentImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 15px;
`;


const ListSubjects = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  gap: 0;
  width: 380px;
  margin-top: 20px;
  background-color: rgba(32, 155, 224, 0.6); /* Adjust the opacity as needed */
  padding: 15px;
  position: fixed;
  bottom: 0;
  border-top-right-radius: 45px;
  border-top-left-radius: 45px;
`;


const SubjectCount = styled.div`
  width: 40%;
  height: 30px;
  background-color: ${(props) => props.theme.lightGray};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizeLg};
  font-weight: 700;
  color: ${(props) => props.theme.titleColor};
  padding: 0;
  margin: 15px 0 0 0;
  color: #fff;
  opacity: 1;
  font-weight: 500;
`;


const ProgressBarContainer = styled.div`
  width: 90%;
  height: 25px;
  background-color: #D9D9D9;
  border-radius: 30px;
  margin: 2px auto;
`;

const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: ${(props) => props.color || '#FE929C'};
  border-radius: 25px;
`;
const AlertMessage = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  width: 90%;
  margin: 10px auto;
  text-align: center;
  font-weight: 600;
  direction: rtl;
`;

const ShowResultIcon = styled.div`
  font-size: 1.8rem;
  color: #fff;
  cursor: pointer;
`;
const ProgressContent = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  /* Add your styles for the progress content here */
`;

const Content = () => {
  const [progress, setProgress] = useState({ subOne: 0, subTwo: 0, subThree: 0 });
  const [selectedCards, setSelectedCards] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [selectedBySubject, setSelectedBySubject] = useState({ subOne: [], subTwo: [], subThree: [] });
  const [showProgressContent, setShowProgressContent] = useState(false);

  const toggleProgressContent = () => {
    setShowProgressContent(!showProgressContent);
  };

  const endHandler = () => {
    console.log("endHandler");
    if (selectedCards.length < 15) {
      setAlertMessage('از همه امتیازات استفاده نکردی');
    } else {
      setAlertMessage('لطفا صبر کنید تا نتایج رو ببینید');
    }
    setShowAlert("از همه امتیازات استفاده کرده‌اید!");
    setTimeout(() => setShowAlert(false), 5000);
  };



  const handleCardClick = (card) => {
    // Check if the card value exists in any other subjects
    cardData.forEach((otherCard) => {
      if (otherCard.id !== card.id && otherCard.value === card.value) {
        const subject = otherCard.subject;
        if (selectedBySubject[subject].find((selectedCard) => selectedCard.id === otherCard.id)) {
          // Deselect the card
          setProgress((prevProgress) => ({
            ...prevProgress,
            [subject]: Math.max(prevProgress[subject] - 1, 0),
          }));
          setSelectedCards(selectedCards.filter((id) => id !== otherCard.id));
          setSelectedBySubject((prevSelectedBySubject) => ({
            ...prevSelectedBySubject,
            [subject]: prevSelectedBySubject[subject].filter((selectedCard) => selectedCard.id !== otherCard.id),
          }));
        } else {
          // Select the card only if the maximum selection limit is not reached
          if (selectedCards.length < 15) {
            setProgress((prevProgress) => ({
              ...prevProgress,
              [subject]: Math.min(prevProgress[subject] + 1, 15),
            }));
            setSelectedCards([...selectedCards, otherCard.id]);
            setSelectedBySubject((prevSelectedBySubject) => ({
              ...prevSelectedBySubject,
              [subject]: [...prevSelectedBySubject[subject], otherCard],
            }));
          } else {
            setAlertMessage('از همه امتیازات استفاده کرده‌اید!');
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 5000); // Hide the alert after 5 seconds
          }
        }
      }
    });

    // Handle the click for the current card
    if (selectedCards.includes(card.id)) {
      // Deselect the card
      setProgress((prevProgress) => ({
        ...prevProgress,
        [card.subject]: Math.max(prevProgress[card.subject] - 1, 0),
      }));
      setSelectedCards(selectedCards.filter((id) => id !== card.id));
      setSelectedBySubject((prevSelectedBySubject) => ({
        ...prevSelectedBySubject,
        [card.subject]: prevSelectedBySubject[card.subject].filter((selectedCard) => selectedCard.id !== card.id),
      }));
    } else {
      // Select the card only if the maximum selection limit is not reached
      if (selectedCards.length < 15) {
        setProgress((prevProgress) => ({
          ...prevProgress,
          [card.subject]: Math.min(prevProgress[card.subject] + 1, 12),
        }));
        setSelectedCards([...selectedCards, card.id]);
        setSelectedBySubject((prevSelectedBySubject) => ({
          ...prevSelectedBySubject,
          [card.subject]: [...prevSelectedBySubject[card.subject], card],
        }));
      } else {
        setAlertMessage('از همه امتیازات استفاده کردی!');
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000); // Hide the alert after 5 seconds
      }
    }
  };


  const containerVariants = {
    collapsed: { height: 0 },
    expanded: { height: "auto" },
  };


  return (
    <ListContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <AlertMessage show={showAlert}>
        {alertMessage}
      </AlertMessage>
      <CardListContainer>
        <ListCards>
          {cardData.map((card) => (
            <ListCard
              key={card.id}
              onClick={() => handleCardClick(card)}
              isActive={selectedCards.includes(card.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CardContent>
                <ContentImg src={card.imgSrc} alt="img" />
                <p className='card-text'>{card.value}</p>
              </CardContent>
            </ListCard>
          ))}
        </ListCards>
      </CardListContainer>



      <ListSubjects>
        <ProgressContent show={showProgressContent}>
          <motion.div
            className="progress-container"
            initial="collapsed"
            animate={showProgressContent ? "expanded" : "collapsed"}
            variants={containerVariants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              className="end-btn" onClick={endHandler}
            >
              پایان
            </motion.div>
            <ProgressBarContainer>
              <Progress progress={progress.subThree * 10} color="#fe929c" />
            </ProgressBarContainer>
            <SubjectCount>
              <span>
                تندرستی و آموزش
              </span>
            </SubjectCount>

            <ProgressBarContainer>
              <Progress progress={progress.subTwo * 10} color="#fe929c" />
            </ProgressBarContainer>
            <SubjectCount>
              <span>
                یادگیری و توسعه
              </span>
            </SubjectCount>

            <ProgressBarContainer>
              <Progress progress={progress.subOne * 10} color="#fe929c" />
            </ProgressBarContainer>
            <SubjectCount>
              <span>
                لذت و هیجان
              </span>
            </SubjectCount>
          </motion.div>
        </ProgressContent>

        <ShowResultIcon onClick={toggleProgressContent} className='show-result-icon'>
          {showProgressContent ? <IoChevronDownOutline /> : <IoChevronUpOutline />}
        </ShowResultIcon>
      </ListSubjects>
    </ListContainer>
  );
};

export default Content;
