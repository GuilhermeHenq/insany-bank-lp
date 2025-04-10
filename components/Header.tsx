import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    max-height: 40px;
  }
`;

const HeaderContainer = styled.header<{ $scrolled: boolean }>`
  width: 100%;
  height: 96px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 112px;
  font-family: 'Archivo', sans-serif;
  background-color: ${({ $scrolled }) => ($scrolled ? '#ffffff' : '#080611')};
  position: ${({ $scrolled }) => ($scrolled ? 'fixed' : 'static')};
  top: ${({ $scrolled }) => ($scrolled ? '0' : 'unset')};
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 2px 6px rgba(0, 0, 0, 0.1)' : 'none')};

  @media (max-width: 768px) {
    padding: 0 33px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 41px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  border-radius: 10px;
  padding: 0.75rem 1.5rem;
  border: 2px solid #1d1b38;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  transition: 0.3s;
  font-family: 'Archivo', sans-serif;

  &:hover {
    opacity: 0.7;
  }
`;

const Button = styled.a`
  background: #3B5BFF;
  color: #ffffff;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  transition: 0.3s;
  font-size: 0.95rem;
  font-family: 'Archivo', sans-serif;

  &:hover {
    background: #2848f0;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 28px;
    color: white;
    cursor: pointer;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(8, 6, 21, 0.8);
  z-index: 998;
`;

const MenuDrawer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 320px;
  height: 100vh;
  background: #080615;
  z-index: 999;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  a {
    color: white;
    font-size: 18px;
    font-weight: 400;
  }

  button {
    margin-top: auto;
  }
`;

const CloseIcon = styled.div`
  right: 24px;
  color: white;
  font-size: 28px;
  cursor: pointer;
`;

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HeaderContainer $scrolled={isScrolled}>
        <LogoWrapper>
          <Image
            src={
              isScrolled
                ? '/images/logo-smartmoneyLight.svg'
                : '/images/logo-smartmoneyDark.svg'
            }
            alt="SmartMoney"
            width={231.37}
            height={36.64}
          />
        </LogoWrapper>

        <Nav>
          <NavLink href="#">Quem somos</NavLink>
          <NavLink href="#">Soluções</NavLink>
          <NavLink href="#">Carreira</NavLink>
          <NavLink href="#">Contato</NavLink>
          <NavLink href="#">Suporte</NavLink>
          <Button href="#">Cadastre-se</Button>
        </Nav>

        <MenuIcon onClick={() => setIsMenuOpen(true)}>
          <FiMenu />
        </MenuIcon>
      </HeaderContainer>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <Overlay
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <MenuDrawer
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
            >
              <CloseIcon onClick={() => setIsMenuOpen(false)}>
                <FiMenu />
              </CloseIcon>
              <NavLink href="#">Quem somos</NavLink>
              <NavLink href="#">Soluções</NavLink>
              <NavLink href="#">Carreira</NavLink>
              <NavLink href="#">Contato</NavLink>
              <NavLink href="#">Suporte</NavLink>
              <Button href="#">Cadastre-se</Button>
            </MenuDrawer>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
