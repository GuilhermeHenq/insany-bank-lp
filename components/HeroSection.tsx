import styled from "styled-components";
import LeadForm from "./LeadForm";
import { FaStar } from "react-icons/fa";

const Section = styled.section`
  background-image: url("/images/hero-bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center -140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 664px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Left = styled.div`
  max-width: 656px;
  color: white;
  text-align: left;

  @media (min-width: 1024px) {
    margin-left: 112px;
    margin-top: 76px;
  }
`;

const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: white;
  border: 2px solid #1d1b38;
  border-radius: 40px;
  padding: 10px 20px 10px 16px;
  font-size: 14px;
  height: 38px;
  white-space: nowrap;
  width: fit-content;
  margin-bottom: 24px;
`;

const Star = styled.div`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;

const Headline = styled.div`
  width: 656px;
  display: flex;
  flex-direction: column;
  gap: 56px; 
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px; 
`;


const Title = styled.h1`
  font-size: 56px;
  font-weight: bold;
  line-height: 1.2;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #cbd5e1;
  margin: 0;
`;

const Divider = styled.div`
  width: 32px;
  height: 2px;
  background-color: #1d63ff;
`;

const Stats = styled.div`
  display: flex;
  gap: 64px;
`;

const Stat = styled.div`
  text-align: left;
  width: 146px;
  height: 80px;
  white-space: nowrap;
  width: fit-content;

  strong {
    font-size: 40px;
    font-weight: 700;
    color: white;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    color: white;
    margin-top: 6px;
  }
`;

const Right = styled.div`
  max-width: 488px;
  margin-top: 40px;
  width: 100%;
  border-radius: 6px;

  box-shadow: 0px 30px 50px -10px rgba(28, 33, 63, 0.2);
  display: flex;
  flex-direction: column;
  gap: 33px;

  @media (min-width: 1024px) {
    margin-right: 112px;
  }
`;


export default function HeroSection() {
  return (
    <Section id="hero">
      <Left>
        <Tag>
          <Star>
            <img src="/icons/Star.svg" />
          </Star>
          Tecnologia disruptiva
        </Tag>

        <Headline>
          <TextBlock>
            <Title>
              Conta digital que não é <br /> só uma conta digital.
            </Title>

            <Subtitle>
              Pellentesque rutrum turpis non est turpis pretium morbi urna.
            </Subtitle>
          </TextBlock>

          <Divider />

          <Stats>
            <Stat>
              <strong>120</strong>
              <p>Projeto realizado 2021</p>
            </Stat>
            <Stat>
              <strong>12</strong>
              <p>Escritórios no Brasil</p>
            </Stat>
            <Stat>
              <strong>15mi</strong>
              <p>Faturamento 2021</p>
            </Stat>
          </Stats>
        </Headline>

      </Left>

      <Right>
        <LeadForm />
      </Right>
    </Section>
  );
}