import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 112px;
  background-color: #fff;
  gap: 100px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 64px 24px 64px;
    gap: 56px;
  }
`;

const Box = styled.div`
  text-align: center;
  max-width: 466px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    height: auto;
    gap: 32px;
  }
`;

const Icon = styled.img`
  height: 30px;

  @media (max-width: 768px) {
    height: 30px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 600;
  color: #070514;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 1.25;
    color: #070514;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #413e52;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 16px;
    color: #413e52;
    line-height: 1.5;
  }
`;

const PrimaryButton = styled.button`
  width: 237px;
  height: 56px;
  padding: 12px 24px;
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 150%;

  &:hover {
    background-color: #1e40af;
  }
`;

const OutlinedButton = styled(PrimaryButton)`
  background-color: transparent;
  color: #2563eb;
  border: 1px solid #2563eb;

  &:hover {
    background-color: #f0f4ff;
  }

  @media (max-width: 768px) {
    margin-bottom: 64px;
  }
`;

const Divider = styled.div`
  width: 4px;
  height: 340px;
  background-color: #CBD6E2;
  opacity: 0.3;
  border-radius: 2px;

  @media (max-width: 768px) {
    width: 327px;
    height: 4px;
    transform: rotate(180deg);
    margin: 0 auto;
    opacity: 0.4;
  }
`;

export default function TwoBanners() {
  return (
    <Wrapper>
      <Box>
        <Icon src="/icons/icon-cifrao.svg" alt="Ícone moeda" />
        <Text>
          <Title>Faça parte do mercado digital financeiro!</Title>
          <Description>
            Pellentesque urna commodo, elementum, est nullam.
          </Description>
        </Text>
        <PrimaryButton>Quero ser cliente</PrimaryButton>
      </Box>

      <Divider />

      <Box>
        <Icon src="/icons/icon-chat.svg" alt="Ícone suporte" />
        <Text>
          <Title>Um time de suporte incrível para lhe atender</Title>
          <Description>
            Pellentesque urna commodo, elementum, est nullam.
          </Description>
        </Text>
        <OutlinedButton>Fale conosco</OutlinedButton>
      </Box>
    </Wrapper>
  );
}
