import styled from "styled-components";

const Section = styled.section`
  padding: 100px 112px 120px;
  background-color: #f8f9ff;
  display: flex;
  justify-content: center;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 68px;
`;

const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 188px;

  img {
    width: 64px;
    margin-bottom: 16px;
  }

  h3 {
    color: #1E1C2D;
    font-size: 24px;
    line-height: 1.25;
    font-weight: bold;
  }

  p {
    max-width: 252px;
    color: #353345;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
  }
`;

const benefits = [
  {
    icon: "/icons/icon-benefit1.svg",
    title: "Fim da complexidade",
    desc: "Amet, leo turpis facilisi nam fusce nunc molestie. Orci, nibh auctor lacus eleifend tincidunt sceleris",
  },
  {
    icon: "/icons/icon-benefit2.svg",
    title: "Sem burocracia",
    desc: "Eu arcu arcu vitae ipsum sed. Purus volutpat laoreet sed nisi, imperdiet sit aliquam viverra.",
  },
  {
    icon: "/icons/icon-benefit3.svg",
    title: "Tudo digital",
    desc: "Dictum mi risus auctor donec et amet duis tincidunt gravida. Tellus amet, porttitor quis mauris.",
  },
  {
    icon: "/icons/icon-benefit4.svg",
    title: "Evolução constante",
    desc: "Commodo egestas dolor, sapien nam posuere at. Ultrices dictum cras vel gravida gravida vehicula ",
  },
];

export default function Benefits() {
  return (
    <Section>
      <Grid>
        {benefits.map((item, idx) => (
          <Benefit key={idx}>
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Benefit>
        ))}
      </Grid>
    </Section>
  );
}
