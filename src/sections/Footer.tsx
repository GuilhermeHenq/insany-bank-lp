import styled from "styled-components";
import { toast } from 'react-toastify';


const FooterContainer = styled.footer`
  background-image: url("/images/bg-footer.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  padding: 120px 112px 80px;

  @media (max-width: 768px) {
    background-image: url("/images/bg-footer-mobile.svg");
    padding: 64px 24px 64px;
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 109px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 64px;
  }
`;

const Newsletter = styled.div`
  width: 486px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  h3 {
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #ccc;
    margin-bottom: 24px;
  }

  form {
    display: flex;
    gap: 12px;
    background: white;
    border-radius: 6px;
    padding: 10px 20px;

    input {
      outline: none;
      flex: 1;
      background: white;
      border: none;
      border-radius: 6px;
      padding: 12px 16px;
      font-size: 16px;
      line-height: 1.5;
      font-weight: 400;
      color: #757385;

      &::placeholder {
        color: #757385;
      }
    }

    button {
      background-color: #1D63FF;
      color: white;
      font-weight: 500;
      border: none;
      border-radius: 6px;
      padding: 12px 24px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background-color: #2848f0;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;

    h3 {
      font-size: 24px;
      line-height: 1.25;
      text-align: center;
    }

    p {
      font-size: 16px;
      line-height: 1.5;
      text-align: center;
    }

    form {
      flex-direction: column;
      background: transparent;
      padding: 0;
      gap: 16px;

      button,
      input {
        width: 327px;
        height: 64px;
      }

      input {
        padding: 20px 16px;
      }
    }
  }
`;

const DesktopLinkSection = styled.div`
  display: flex;
  gap: 164px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h4 {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    color: white;
  }

  a {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    color: white;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 4px;
  flex-direction: column;

  a {
    display: flex;
    gap: 8px;
  }

  a p {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    color: white;
  }

  a img {
    width: 20px;
    height: 20px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.4);
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 42px;

    a p {
      display: none;
    }
  }
`;

const MobileLinkSection = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    max-width: 327px;
    margin: 0 auto;

    .row {
      display: flex;
      justify-content: space-between;
      gap: 24px;
      flex-wrap: wrap;
    }

    a {
      font-size: 16px;
      line-height: 1.5;
      font-weight: 400;
      color: white;
    }
  }
`;

const MobileSocialSection = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    margin-top: -8px;

    h4 {
      font-size: 16px;
      font-weight: 400;
      color: white;
      text-align: center;
    }
  }
`;

const BottomBar = styled.div`
  margin-top: 48px;
  padding-top: 48px;
  border-top: 1px solid #2a2739;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 14px;

  .lang {
    margin-right: 54px;
    display: flex;
    align-items: center;
    gap: 11px;
    white-space: nowrap;
    flex-shrink: 0;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
    color: #cbd6e2;

    img {
      width: 18px;
      height: 18px;
    }
  }

  span {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #fff;
    font-size: 14px;
  }

  a {
    color: #fff;
    text-decoration: underline;

    &:hover {
      color: white;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;

    span {
      line-height: 1.5;
      text-align: center;
    }

    .lang {
      margin: 0;
    }
  }
`;

const Icon = styled.img`
  width: 32.28px;
  height: 28px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

type Props = React.HTMLAttributes<HTMLElement>;

export default function Footer(props: Props) {
  return (
    <FooterContainer {...props}>
      <TopSection>
        <Newsletter>
          <Icon src="/icons/icon-email.svg" alt="Email icon" />
          <Text>
            <h3>Fique por dentro das novidades</h3>
            <p>Cadastre seu e-mail para receber conteúdo</p>
          </Text>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.currentTarget.email.value;

              if (!email) {
                toast.error('Por favor, insira um e-mail válido!');
                return;
              }

              toast.success('E-mail enviado com sucesso!');
              e.currentTarget.reset();
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="Insira seu melhor e-mail"
            />
            <button type="submit">Receber Novidades</button>
          </form>
        </Newsletter>

        <DesktopLinkSection>
          <Column>
            <h4>Quero ser cliente</h4>
            <a href="#">Acessar conta</a>
            <a href="#">Dúvidas</a>
            <a href="#">Termos e condições</a>
            <a href="#">Fale conosco</a>
          </Column>

          <Column>
            <h4>Acompanhe nas redes</h4>
            <SocialLinks>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/icon-x.svg" alt="X" />
                <p>Twitter</p>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/icon-linkedin.svg" alt="LinkedIn" />
                <p>Linkedin</p>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/icon-instagram.svg" alt="Instagram" />
                <p>Instagram</p>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/icon-facebook.svg" alt="Facebook" />
                <p>Facebook</p>
              </a>
            </SocialLinks>

          </Column>
        </DesktopLinkSection>

        <MobileLinkSection>
          <div className="row">
            <a href="#">Quero ser cliente</a>
            <a href="#">Termos e condições</a>
          </div>
          <div className="row">
            <a href="#">Acessar conta</a>
            <a href="#">Fale conosco</a>
          </div>
          <div className="row">
            <a href="#">Dúvidas</a>
          </div>
        </MobileLinkSection>

        <MobileSocialSection>
          <h4>Acompanhe nas redes</h4>
          <SocialLinks>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/icon-x.svg" alt="X" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/icon-linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/icon-instagram.svg" alt="Instagram" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/icon-facebook.svg" alt="Facebook" />
            </a>
          </SocialLinks>

        </MobileSocialSection>
      </TopSection>

      <BottomBar>
        <img
          src="/images/logo-smartmoneyDark.svg"
          alt="SmartMoney"
          width={236.66}
          height={37.47}
        />
        <span>© 2022 SmartBusiness. Todos os direitos reservados</span>
        <span className="lang">
          <img src="/icons/icon-langue.svg" alt="Idioma" />
          Português
          <img src="/icons/icon-arrow-down.svg" alt="Idioma" />
        </span>
        <span>
          Desenvolvido por{" "}
          <a href="https://insanydesign.com" target="_blank" rel="noopener noreferrer">
            Insany Design
          </a>
        </span>
      </BottomBar>
    </FooterContainer>
  );
}
