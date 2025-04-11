import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 100px 112px;
  background: #fff;
  position: relative;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 48px 24px;
    gap: 40px;
  }
`;
const Left = styled.div`
  max-width: 457px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 40px;
    color: #070514;
    font-weight: 600;
  }

  p {
    color: #353345;
    font-weight: 400;
    font-size: 18px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 16px;
      color: #000;

      img {
        width: 24px;
        height: 24px;
      }
    }
  }

  .button {
    width: fit-content;
    height: 56px;
    background-color: #1D63FF;
    padding: 16px 76px;
    color: #fff;
    margin-top: 48px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }
  }

  .contact {
    color: #1E1C2D;
    margin-top: 32px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 16px;
    font-weight: 400;

    img {
      width: 20px;

      @media (max-width: 768px) {
        width: 16px;
      }
    }

    @media (max-width: 768px) {
      justify-content: center;
    }
  }


  @media (max-width: 768px) {
    text-align: center;

    h2 {
      font-size: 24px;
      color: #070514;
      font-weight: 600;
      line-height: 1.25;
      margin-bottom: 8px;
    }

    p {
      color: #353345;
      font-weight: 400;
      font-size: 16px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      gap: 24px;

      li {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        color: #413E52;

        img {
          width: 24px;
          height: 24 px;
        }
      }
    } 
  }
`;
const Right = styled.div`
  position: relative;
  width: 488px;
  height: 608px;
  top: -16px;
  background-image:
    url('/images/fundo-azul2.png'),
    url('/images/fundo-azul.png');
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    position: relative;
    width: 229px;
    height: 300.26px;
    top: 0;
    margin-left: auto;
    margin-right: 0;
  }
`;

const WomanImage = styled.img`
  width: 434px;
  height: 544px;
  object-fit: cover;
  position: absolute;
  top: 64px;
  border-radius: 6px;

  @media (max-width: 768px) {
    position: relative;
    width: 203.61px;
    height: 255.22px;
    top: 45px;
  }
`;

const FloatingCard = styled.div`
  width: 278px;
  height: 185px;
  position: absolute;
  right: 430px;
  top: 350px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0px 30px 50px -10px rgba(28, 33, 63, 0.2);
  padding: 24px;

  .text {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-weight: 400;
    font-size: 18px;
    color: #4C4A5E;
  }

  .title {
    font-weight: bold;
    font-size: 24px;
    color: #2A2739;
  }

  .chart {
    width: 20px;
    height: 18px;
    margin-left: auto;
  }

  .avatars {
    display: flex;
    margin-top: 16px;

    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      object-fit: cover;
      margin-left: -5px;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    position: absolute;
    width: 130.42px;
    height: 86.79px;
    padding: 11.26px;
    right: 198px;
    top: 180px;
    box-shadow: 0 9.38px 14.07px -4.69px #4C4A5E26;
    .text {
    display: flex;
    flex-direction: column;
    gap: 2x;
    font-weight: 400;
    font-size: 8.44px;
    color: #4C4A5E;
  }

    .title {
      font-weight: bold;
      font-size: 11.26px;
      color: #2A2739;
    }

    .chart {
      width: 9.38px;
      height: 8.44px;
      margin-left: auto;
    }

    .avatars {
      display: flex;
      margin-top: 7.51px;

      img {
        width: 16.42px;
        height: 16.42px;
        border-radius: 50%;
        object-fit: cover;
        margin-left: -5px;

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
`;



const Etc = styled.div`
  position: absolute;
  width: 27px;
  height: 5px;
  top: 26.66px;
  left: 401.82px;

  @media (max-width: 768px) {
    top: 17.02px;
    left: 190px;

    img {
      width: 12.67px;
      height: 2.35px;
    }
  }
`;

const ScrollArrows = styled.div`
  position: absolute;
  right: 29px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  img {
    width: 50px;
  }

  @media (max-width: 768px) {

    right: 14px;
    bottom: 10px;

    img {
      width: 23.46px;
      height: 70.37px;
    }

  }
`;

const Divider = styled.div`
  width: 100%;
  height: 3px;
  margin-top: 16px;
  background-color: #cbd6e2;
  opacity: 0.4;

  @media (max-width: 768px) {
    margin-top: 7.51px;
  }
`;

type Props = React.HTMLAttributes<HTMLElement>;

export default function CustomSolutions(props: Props) {
  return (
    <Section {...props}>
      <Left>
        <h2>Conheça nossas solução customizadas</h2>
        <p>
          Suscipit pellentesque praesent auctor molestie massa nunc vitae felis
          eget est ut gravida in maecenas. Tempus in in in congue proin.
        </p>
        <ul>
          <li>
            <img src="/icons/icon-check.svg" /> Sagittis sed cursus sed
            malesuada ultrices
          </li>
          <li>
            <img src="/icons/icon-check.svg" /> Lectus ac at massa ac tellus
            fringilla aenean
          </li>
          <li>
            <img src="/icons/icon-check.svg" /> Cras faucibus tristique volutpat
            accumsan
          </li>
        </ul>
        <button className="button">Quero ser cliente</button>
        <div className="contact">
          <img src="/icons/icon-tel.svg" />
          Fale conosco
        </div>
      </Left>

      <Right>
        <WomanImage src="/images/cliente-sorrindo.jpg" alt="Cliente feliz" />
        <Etc>
          <img src="/icons/etc.svg" />
        </Etc>
        <ScrollArrows>
          <img src="/icons/Arrow.svg" />
        </ScrollArrows>
        <FloatingCard>
          <div className="row">
            <div className="text">
              <div className="title">R$ 999,90</div>
              <div>Balanço</div>
            </div>
            <img
              className="chart"
              src="/icons/bar-chart.svg"
              alt="Gráfico"
            />
          </div>
          <Divider />
          <div className="avatars">
            <img src="/images/avatar-1.png" />
            <img src="/images/avatar-2.png" />
            <img src="/images/avatar-3.png" />
            <img src="/images/avatar-4.png" />
          </div>
        </FloatingCard>
      </Right>
    </Section>
  );
}
