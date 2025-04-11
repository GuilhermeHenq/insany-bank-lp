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

  @media (max-width: 768px) {
    background-color: #070514;
    background-image: url("/images/bg-feature.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    flex-direction: column;
    padding: 64px 0;
    gap: 40px;
  }
`;

const Left = styled.div`
  flex: 1;
  max-width: 487px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;
  font-family: "Archivo", sans-serif;
  line-height: 125%;
  max-width: 501px;
  margin-bottom: 76px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 0 33px 48px;
    text-align: center;
  }
`;

const BlueButton = styled.button`
  width: 276px;
  height: 56px;
  background-color: #1d63ff;
  padding: 12px 39px;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  position: absolute;
  top: 170px;
  right: 112px;

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 327px;
    margin: 32px auto 0;
  }
`;

const FeatureBox = styled.div<{ $active: boolean }>`
  background: ${({ $active }) => ($active ? "#ffffff" : "transparent")};
  color: ${({ $active }) => ($active ? "#1E1C2D" : "#CBD6E2")};
  border-radius: 12px;
  padding: 33px;
  margin-bottom: 24px;
  position: relative;
  box-shadow: ${({ $active }) =>
    $active ? "0px 10px 30px rgba(0, 0, 0, 0.1)" : "none"};
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

  @media (max-width: 768px) {
    width: 327px;
    height: 202px;
    margin: 0 auto;
    padding: 33px;
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

  @media (max-width: 768px) {
    width: 294px;
  }
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

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin: 64px 24px 0;
    max-width: 100%;
  }
`;

const WomanImageWrapper = styled.div`
  position: relative;
  width: 281px;
  height: 427px;
  border-radius: 6px;

  @media (max-width: 768px) {
    width: 156.12px;
    height: 222.55px;
  }
`;

const Overflow = styled.div`
  border-radius: 6px;
  overflow: hidden;
`;

const WomanImage = styled.img`
  width: 281px;
  height: 427px;
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    width: 156.12px;
    height: 222.55px;
  }
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

  @media (max-width: 768px) {
    width: 96.32px;
    height: 21px;
    font-size: 7px;
    left: -20px;
    bottom: 24px;
    gap: 4px;
    padding: 5.54px 9.96px 5.54px 6.64px;
  }
`;

const StackWrapper = styled.div`
  position: relative;
  width: 281px;
  height: 427px;
  margin-top: 148px;

  @media (max-width: 768px) {
    width: 155.56px;
    height: 236.39px;
    margin-top: 75px;
  }
`;

const StackImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ArrowTop = styled.img`
  position: absolute;
  top: 68px;
  left: 310px;
  width: 149px;
  height: 55px;

  @media (max-width: 768px) {
    top: 28px;
    left: 180px;
    width: 82.48px;
    height: 30.45px;
  }
`;

const ArrowBottom = styled.img`
  position: absolute;
  left: 139px;
  top: 466px;
  width: 143px;
  height: 54px;

  @media (max-width: 768px) {
    top: 244px;
    left: 77px;
    width: 79.16px;
    height: 29.89px;
  }
`;

const Star = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 8.86px;
    height: 8.86px;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

type Props = React.HTMLAttributes<HTMLElement>;

export default function Features(props: Props) {
  const [activeIndex, setactiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setactiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section {...props}>
      <Left>
        <Title>03 vantagens exclusivas da SmartMoney</Title>

        {features.map((feature, index) => (
          <FeatureBox key={index} $active={index === activeIndex}>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
            {index === activeIndex && <ProgressBar />}
          </FeatureBox>
        ))}

        <BlueButton>Quero ser cliente</BlueButton>
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
