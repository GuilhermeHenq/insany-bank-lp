import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { Button } from '../components/Button';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    max-height: 40px;
    width: auto;

    @media (max-width: 768px) {
      max-width: 131px;
      height: auto;
    }
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

const NavLink = styled.a<{ $scrolled?: boolean; $isInDrawer?: boolean }>`
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  transition: 0.3s;
  font-family: 'Archivo', sans-serif;

  color: ${({ $scrolled, $isInDrawer }) => {
    if ($isInDrawer) return '#ffffff';
    return $scrolled ? '#070514' : '#ffffff';
  }};
`;

const MenuIcon = styled.div<{ $scrolled: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
    color: ${({ $scrolled }) => ($scrolled ? '#070514' : '#ffffff')};
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
  z-index: 1000;
`;

const MenuDrawer = styled(motion.div)<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 320px;
  height: 100vh;
  background: ${({ $scrolled }) => ($scrolled ? '#ffffff' : '#080615')};
  z-index: 1001;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${NavLink} {
    color: ${({ $scrolled }) => ($scrolled ? '#070514' : '#ffffff')} !important;
  }

  button {
    margin-top: auto;
  }
`;

const CloseIcon = styled.div<{ $scrolled: boolean }>`
  right: 24px;
  color: ${({ $scrolled }) => ($scrolled ? '#070514' : '#ffffff')};
  font-size: 24px;
  cursor: pointer;
  align-self: flex-end;
`;

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavClick = (id: string) => {
    if (router.pathname !== '/') {
      router.push(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }
  };

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
            width={231}
            height={36}
            style={{ width: '100%', height: 'auto' }}
          />
        </LogoWrapper>

        <Nav>
          <NavLink onClick={() => handleNavClick('quem-somos')} $scrolled={isScrolled}>
            Quem somos
          </NavLink>
          <NavLink onClick={() => handleNavClick('solucoes')} $scrolled={isScrolled}>
            Soluções
          </NavLink>
          <NavLink onClick={() => handleNavClick('carreira')} $scrolled={isScrolled}>
            Carreira
          </NavLink>
          <NavLink onClick={() => handleNavClick('contato')} $scrolled={isScrolled}>
            Contato
          </NavLink>
          <NavLink onClick={() => handleNavClick('suporte')} $scrolled={isScrolled}>
            Suporte
          </NavLink>

          <Button
            width="136.56px"
            height="40px"
            fontSize="15px"
            fontWeight={700}
            padding="0.75rem 1.5rem"
          >
            Cadastre-se
          </Button>
        </Nav>

        <MenuIcon $scrolled={isScrolled} onClick={() => setIsMenuOpen(true)}>
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
              $scrolled={isScrolled}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
            >
              <CloseIcon $scrolled={isScrolled} onClick={() => setIsMenuOpen(false)}>
                <FiX />
              </CloseIcon>

              <NavLink onClick={() => handleNavClick('quem-somos')} $isInDrawer>
                Quem somos
              </NavLink>
              <NavLink onClick={() => handleNavClick('solucoes')} $isInDrawer>
                Soluções
              </NavLink>
              <NavLink onClick={() => handleNavClick('carreira')} $isInDrawer>
                Carreira
              </NavLink>
              <NavLink onClick={() => handleNavClick('contato')} $isInDrawer>
                Contato
              </NavLink>
              <NavLink onClick={() => handleNavClick('suporte')} $isInDrawer>
                Suporte
              </NavLink>

              <Button
                width="100%"
                fontWeight={700}
                fontSize="16px"
                padding="0.75rem 1.5rem"
              >
                Cadastre-se
              </Button>
            </MenuDrawer>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
