import styled from "styled-components";

const FooterContainer = styled.footer`
  background-image: url("/images/bg-footer.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  padding: 120px 112px 80px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 109px;
  flex-wrap: wrap;
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
    padding: 20px 23px;

    input {
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
      background-color: #3b5bff;
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
`;

const LinkSection = styled.div`
  display: flex;
  gap: 164px;
  flex-wrap: wrap;
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
`;

const BottomBar = styled.div`
  margin-top: 60px;
  padding-top: 48px;
  border-top: 1px solid #2A2739;
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
    color: #CBD6E2;

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

export default function Footer() {
  return (
    <FooterContainer>
      <TopSection>
        <Newsletter>
          <Icon src="/icons/icon-email.svg" alt="Email icon" />
          <Text>
            <h3>Fique por dentro das novidades</h3>
            <p>Cadastre seu e-mail para receber conteúdo</p>
          </Text>
          <form>
            <input type="email" placeholder="Insira seu melhor e-mail" />
            <button type="submit">Receber Novidades</button>
          </form>
        </Newsletter>

        <LinkSection>
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
              <a href="#">
                <img src="/icons/icon-x.svg" alt="X" />
                <p>Twitter</p>
              </a>
              <a href="#">
                <img src="/icons/icon-linkedin.svg" alt="LinkedIn" />
                <p>Linkedin</p>
              </a>
              <a href="#">
                <img src="/icons/icon-instagram.svg" alt="Instagram" />
                <p>Instagram</p>
              </a>
              <a href="#">
                <img src="/icons/icon-facebook.svg" alt="Facebook" />
                <p>Facebook</p>
              </a>
            </SocialLinks>
          </Column>
        </LinkSection>
      </TopSection>

      <BottomBar>
        <img
          src="/images/logo-smartmoneyDark.svg"
          alt="SmartMoney"
          width={231.37}
          height={36.64}
        />
        <span>© 2022 SmartBusiness. Todos os direitos reservados</span>
        <span className="lang">
          <img src="/icons/icon-langue.svg" alt="Idioma" width="18" height="18" />
          Português
          <img src="/icons/icon-arrow-down.svg" alt="Idioma" width="5" height="10" />
        </span>
        <span>
          Desenvolvido por{" "}
          <a href="https://insanydesign.com" target="_blank">
            Insany Design
          </a>
        </span>
      </BottomBar>
    </FooterContainer>
  );
}
