import { useState } from "react";
import styled from "styled-components";

const faqData = [
  {
    id: 1,
    question: "Quais recursos ainda posso acessar nas novas Páginas?",
    answer:
      "Turpis at malesuada orci ultricies ipsum amet sed cras. Enim ut urna feugiat ultricies semper quisque at. Viverra lectus ut a gravida aliquet cras est lectus ullamcorper. Elementum diam iaculis neque arcu, aliquet consectetur.",
  },
  {
    id: 2,
    question: "Como faço para abrir a minha nova Página?",
    answer:
      "Turpis at malesuada orci ultricies ipsum amet sed cras. Enim ut urna feugiat ultricies semper quisque at. Viverra lectus ut a gravida aliquet cras est lectus ullamcorper. Elementum diam iaculis neque arcu, aliquet consectetur.",
  },
  {
    id: 3,
    question: "Há algum conteúdo que não migrará com a minha Página?",
    answer:
      "Turpis at malesuada orci ultricies ipsum amet sed cras. Enim ut urna feugiat ultricies semper quisque at. Viverra lectus ut a gravida aliquet cras est lectus ullamcorper. Elementum diam iaculis neque arcu, aliquet consectetur.",
  },
  {
    id: 4,
    question: "Como as pessoas encontrarão a minha nova Página?",
    answer:
      "Turpis at malesuada orci ultricies ipsum amet sed cras. Enim ut urna feugiat ultricies semper quisque at. Viverra lectus ut a gravida aliquet cras est lectus ullamcorper. Elementum diam iaculis neque arcu, aliquet consectetur.",
  },
  {
    id: 5,
    question: "O que é o Feed? Como faço para configurá-lo?",
    answer:
      "Turpis at malesuada orci ultricies ipsum amet sed cras. Enim ut urna feugiat ultricies semper quisque at. Viverra lectus ut a gravida aliquet cras est lectus ullamcorper. Elementum diam iaculis neque arcu, aliquet consectetur.",
  },
];

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 120px 112px;
  background: #f2f5fc;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 64px 16px;
    flex-direction: column;
    align-items: center;
    gap: 64px;
  }
`;

const Left = styled.div`
  max-width: 410px;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    gap: 40px;
  }

  small {
    font-size: 14px;
    font-weight: 600;
    color: #353345;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 1.5;
      color: #070514;
    }
  }

  h2 {
    font-size: 40px;
    font-weight: 600;
    color: #070514;
    line-height: 1.25;

    @media (max-width: 768px) {
      font-size: 24px;
      color: #0d0b1a;
    }
  }

  p {
    font-size: 20px;
    font-weight: 400;
    color: #413e52;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 16px;
      color: #1e1c2d;
    }
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Icons = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: flex-start;
    gap: 32px;
    margin-bottom: 44px;

    div {
      display: flex;
      flex-direction: column;
      gap: 4px;
      @media (max-width: 768px) {
        align-items: flex-start;
      }
    }

    strong {
      font-size: 18px;
      font-weight: 600;
      color: #0d0b1a;
    }

    span {
      font-size: 14px;
      font-weight: 400;
      color: #413e52;
    }
  }

  @media (max-width: 768px) {
    width: 272.76px;
    text-align: left;
    
    li {
      align-items: center;

      div {
        align-items: flex-start;
      }
    }
  }
`;


const Icon = styled.img`
  height: 33px;
  flex-shrink: 0;
`;

const Right = styled.div`
  flex: 1;
  max-width: 696px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 343px;
  }
`;

const Item = styled.div<{ $isOpen: boolean }>`
  background: white;
  border-radius: 0.5rem;
  padding: 41px 33px;
  transition: all 0.3s ease;
  cursor: pointer;

  ${({ $isOpen }) =>
    $isOpen &&
    `
    border-left: 3px solid #1D63FF;
    box-shadow: 0px 12px 36px rgba(0, 0, 0, 0.06);
  `}
`;

const Header = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 24px;

  span:first-child {
    color: #1d63ff;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.25;
    flex-shrink: 0;
  }

  strong {
    color: #413e52;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-break: break-word;
  }

  span:last-child {
    font-size: 24px;
    color: ${({ $isOpen }) => ($isOpen ? "#1D63FF" : "#413e52")};
    transition: color 0.3s ease;
    margin-left: auto;
  }

  @media (max-width: 768px) {
    span:first-child {
      color: #1d63ff;
      font-size: 24px;
      font-weight: 400;
      line-height: 1.25;
      flex-shrink: 0;
    }

    strong {
      color: #413e52;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      overflow-wrap: break-word;
      word-break: break-word;
    }

    span:last-child {
      margin-top: 10px;
      font-size: 24px;
      color: ${({ $isOpen }) => ($isOpen ? "#1D63FF" : "#413e52")};
      transition: color 0.3s ease;
      margin-left: auto;
    }
  }
`;

const Content = styled.p`
  margin-left: 51px;
  margin-top: 17px;
  font-size: 16px;
  line-height: 150%;
  font-weight: 400;
  color: #353345;
`;

type Props = React.HTMLAttributes<HTMLElement>;

export default function FAQ(props: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <Section {...props}>
      <Left>
        <Text>
          <small>Tire suas dúvidas</small>
          <h2>Perguntas mais frequentes</h2>
          <p>
            Separamos algumas perguntas e respostas que podem te ajudar na sua
            decisão
          </p>
        </Text>

        <Icons>
          <li>
            <Icon src="/icons/icon-duvidas.svg" alt="Ícone duvidas" />
            <div>
              <strong>Dúvidas?</strong>
              <span>Envie uma mensagem para nosso time</span>
            </div>
          </li>
          <li>
            <Icon src="/icons/icon-faça-parte.svg" alt="Ícone faça parte" />
            <div>
              <strong>Faça parte</strong>
              <span>Cadastre-se para transformar sua empresa</span>
            </div>
          </li>
          <li>
            <Icon src="/icons/icon-whatsapp.svg" alt="Ícone whatsapp" />
            <div>
              <strong>Chama no zap</strong>
              <span>Fale com nosso comercial</span>
            </div>
          </li>
        </Icons>
      </Left>

      <Right>
        {faqData.map((item, index) => (
          <Item
            key={item.id}
            onClick={() => toggle(index)}
            $isOpen={openIndex === index}
          >
            <Header $isOpen={openIndex === index}>
              <span>0{item.id}</span>
              <strong>{item.question}</strong>
              <span>{openIndex === index ? "−" : "+"}</span>
            </Header>
            {openIndex === index && <Content>{item.answer}</Content>}
          </Item>
        ))}
      </Right>
    </Section>
  );
}
