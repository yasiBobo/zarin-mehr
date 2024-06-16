import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import Logo from "../assets/images/Logo.png"

const HeaderContainer = styled(motion.header)`
  width: inherit;
  margin: 1.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  direction: rtl;
  text-align: center
`;

const Header = () => {
  return (
    <HeaderContainer>
      {/* LOGO */}
      <div className="header-logo">
        <img src={Logo} alt="" className="logo-img" />
      </div>
      {/* LOGO */}

      {/* TITLE */}
      <h2 className="header-title">
        15 تجربه‌ی این فصل را انتخاب کن
      </h2>
      {/* TITLE */}
    </HeaderContainer>
  )
}

export default Header