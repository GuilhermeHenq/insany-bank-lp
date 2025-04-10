import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

const features = [
  {
    title: "Tecnologia de ponta",
    desc: "Nullam neque, rutrum et enim diam, ligula fringilla aliquet tincidunt ullamcorper elit",
  },
  {
    title: "Entrega eficiente",
    desc: "Posuere sollicitudin semper in posuere habitant. Quis luctus et egestas viverra pellentesque.",
  },
  {
    title: "Suporte especializado",
    desc: "In massa, erat felis massa tincidunt. Aliquam, iaculis rutrum in mauris, integer.",
  },
];

const Section = styled.section`
  background-image: url("/images/background-lines.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 120px 112px;
  background-color: #0f1121;
  color: white;
  display: flex;
  justify-content: space-between;
  position: relative;
  gap: 137px;
  flex-wrap: wrap;
`;

const Left = styled.div`
  flex: 1;
  max-width: 487px;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;
  font-family: "Archivo", sans-serif;
  line-height: 125%;
  margin-bottom: 76px;
`;

const FeatureBox = styled.div<{ active: boolean }>`
  background: ${({ active }) => (active ? "#ffffff" : "transparent")};
  color: ${({ active }) => (active ? "#1E1C2D" : "#CBD6E2")};
  border-radius: 12px;
  padding: 33px;
  margin-bottom: 24px;
  position: relative;
  box-shadow: ${({ active }) =>
    active ? "0px 10px 30px rgba(0, 0, 0, 0.1)" : "none"};
  transition: all 0.2s ease-in-out;

  h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 17px;
    line-height: 1.25;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 17px;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProgressBarAnim = keyframes`
  from { width: 0% }
  to { width: 85% }
`;

const ProgressBar = styled.div`
  width: 294px;
  position: absolute;
  bottom: 33px;
  left: 33px;
  height: 4px;
  background: #2a60f0;
  border-radius: 2px;
  animation: ${ProgressBarAnim} 5s linear forwards;
`;

const Star = styled.div`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;

const StackImage = styled.img`
  width: 281px;
  height: 427px;
  border-radius: 12px;
  object-fit: cover;
`;
const Right = styled.div`
  flex: 1;
  max-width: 625px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: 176px;
  gap: 29px; 
`;

const WomanImageWrapper = styled.div`
  position: relative;
  width: 281px;
  height: 427px;
  border-radius: 6px;
`;

const Overflow = styled.div`
  border-radius: 6px;
  overflow: hidden; 
`;

const WomanImage = styled.img`
  width: 281px;
  height: 427px;
  overflow: hidden; 
  object-fit: cover;
  display: block;
  transform-origin: center;
`;


const Tag = styled.div`
  position: absolute;
  left: -33px;
  bottom: 34px; 
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #413e52;
  background-color: #f2f5fd;
  border-radius: 40px;
  padding: 10px 18px 10px 12px;
  font-size: 14px;
  height: 38px;
  white-space: nowrap;
  z-index: 4;
`;

const StackWrapper = styled.div`
  position: relative;
  width: 281px;
  height: 427px;
  margin-top: 148px; 
`;

const BlueButton = styled.button`
  width: 263px;
  height: 56px;
  position: absolute;
  top: -126px; 
  left: 329px; 
  background-color: #1d63ff;
  padding: 12px 39px;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const ArrowTop = styled.img`
  position: absolute;
  top: 68px; 
  left: auto;
  left: 310px;
  width: 149px;
  height: 55px;
`;

const ArrowBottom = styled.img`
  position: absolute;
  left: 139px;
  top: 466px;
  width: 143px;
  height: 54px;
`;




export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section>
      <Left>
        <Title>03 vantagens exclusivas da SmartMoney</Title>
        {features.map((feature, index) => (
          <FeatureBox key={index} active={index === activeIndex}>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
            {index === activeIndex && <ProgressBar />}
          </FeatureBox>
        ))}
      </Left>

      <Right>
        <WomanImageWrapper>
          <Overflow>
            <WomanImage src="/images/woman-img.png" alt="Cliente feliz usando celular" />
          </Overflow>
          <Tag>
            <Star>
              <img src="/icons/Star.svg" />
            </Star>
            Tecnologia disruptiva
          </Tag>
          <BlueButton>Quero ser cliente</BlueButton>
          <ArrowTop src="/images/arrow-direction.png" alt="Seta para o botão" />
          <ArrowBottom src="/images/arrow-directionR.png" alt="Seta para o stack" />
        </WomanImageWrapper>

        <StackWrapper>
          <StackImage src="/images/stack.svg" alt="Etapas do serviço" />

        </StackWrapper>
      </Right>

    </Section>

  );
}
