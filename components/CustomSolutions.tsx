import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 100px 112px;
  background: #fff;
  position: relative;
  gap: 40px;
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
    color: #333;
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
        width: 20px;
        height: 20px;
      }
    }
  }

  .button {
    width: 231px;
    height: 56px;
    background-color: #1D63FF;
    padding: 16px 76px;
    color: #fff;
    margin-top: 48px; 
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    width: fit-content;
    cursor: pointer;
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
      width: 24px;
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
`;

const WomanImage = styled.img`
  width: 434px;
  height: 544px;
  object-fit: cover;
  position: absolute;
  top: 64px;
  border-radius: 12px;
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
  width: 278px;

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
`;

const Etc = styled.div`
  position: absolute;
  width: 27px;
  height: 5px;
  top: 26.66px;
  left: 401.82px;
`;



const Divider = styled.div`
  width: 100%;
  height: 3px;
  margin-top: 16px;
  background-color: #CBD6E2;
  opacity: 0.4;
`;

export default function CustomSolutions() {
  return (
    <Section>
      <Left>
        <h2>Conheça nossas solução customizadas</h2>
        <p>
          Suscipit pellentesque praesent auctor molestie massa nunc vitae felis
          eget est ut gravida in maecenas. Tempus in in in congue proin.
        </p>
        <ul>
          <li><img src="/icons/icon-check.svg" /> Sagittis sed cursus sed malesuada ultrices</li>
          <li><img src="/icons/icon-check.svg" /> Lectus ac at massa ac tellus fringilla aenean</li>
          <li><img src="/icons/icon-check.svg" /> Cras faucibus tristique volutpat accumsan</li>
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
            <img className="chart" src="/icons/bar-chart.svg" alt="Gráfico" />
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
