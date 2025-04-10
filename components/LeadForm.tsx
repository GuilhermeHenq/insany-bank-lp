import { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  background: #ffffff;
  border-radius: 6px;
  padding: 40px 48px;
  width: 488px;
  min-height: 664px;
  box-shadow: 0px 30px 50px -10px rgba(28, 33, 63, 0.2);
  display: flex;
  flex-direction: column;

  @media (max-width: 1023px) {
    padding: 32px 24px;
    margin: 0 auto;
  }
`;



const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;


const LabelTop = styled.span`
  font-size: 14px;
  color: #757385;
`;

const Heading = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #0D0B1A;
`;

const Toggle = styled.div`
  display: flex;
  gap: 33px;
  font-size: 14px;
  margin-bottom: 24px;

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    position: relative;
    padding-left: 26px;

    input[type="radio"] {
      appearance: none;
      width: 18px;
      height: 18px;
      border: 1.5px solid #757385;
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    input[type="radio"]:checked {
      border-color: #1D63FF;
    }

    input[type="radio"]:checked::before {
      content: "";
      width: 8px;
      height: 8px;
      background-color: #1D63FF;
      border-radius: 50%;
      display: block;
    }

    span {
      font-weight: 600;
      color: #4c4a5e;
    }

    input[type="radio"]:checked + span {
      color: #0D0B1A;
    }
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 30px;
`;

const Field = styled.input`
  width: 100%;
  height: 56px;
  padding: 16px;
  gap: 10px;
  font-size: 14px;
  color: #757385;
  background: #f2f5fc;
  border: 0px solid transparent;
  border-radius: 6px;
  outline: none;
  transition: border 0.2s ease;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    border: 2px solid rgba(29, 99, 255, 0.2);
    background: #ffffff;
    color: #000;
  }
`;


const Button = styled.button`
  width: 100%;
  height: 56px;
  background-color: #1d63ff;
  color: white;
  font-weight: 600;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 16px;

  &:hover {
    background-color: #1149cc;
  }
`;

const InfoText = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #334155;
  margin-bottom: 30px;

  a {
    color: #334155;
    text-decoration: underline;
  }
`;

const SuccessInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-weight: 400;
  font-size: 14px;
  color: #1E1C2D;
  margin-top: 27px;
`;


const Error = styled.p`
  color: red;
  font-size: 0.85rem;
  margin: -16px 0 0;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #CBD6E2;
  opacity: 0.4;
`;

const Icon = styled.div`
  background-image: url("/icons/icon-safe.svg");
  width: 24px;
  height: 26px;
  border: 2px;
`;

export default function LeadForm() {
  const [formType, setFormType] = useState<"personal" | "company">("personal");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cnpj: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.phone ||
      (formType === "personal" && !formData.name) ||
      (formType === "company" && !formData.cnpj)
    ) {
      setError("Preencha todos os campos obrigatórios!");
      return;
    }

    setError("");
    alert("Formulário enviado com sucesso!");
  };

  return (
    <FormWrapper>
      <TitleGroup>
        <LabelTop>Faça parte da revolução digital!</LabelTop>
        <Heading>
          Cadastre-se e faça parte <br /> do lançamento oficial
        </Heading>
      </TitleGroup>

      <Toggle>
        <label>
          <input
            type="radio"
            name="type"
            checked={formType === "personal"}
            onChange={() => setFormType("personal")}
          />
          <span>Para você</span>
        </label>
        <label>
          <input
            type="radio"
            name="type"
            checked={formType === "company"}
            onChange={() => setFormType("company")}
          />
          <span>Para empresa</span>
        </label>
      </Toggle>




      <form onSubmit={handleSubmit}>
        <FieldGroup>
          {error && <Error>{error}</Error>}

          {formType === "personal" ? (
            <Field
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
            />
          ) : (
            <Field
              type="text"
              name="cnpj"
              placeholder="CNPJ"
              value={formData.cnpj}
              onChange={handleChange}
            />
          )}

          <Field
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />

          <Field
            type="tel"
            name="phone"
            placeholder="Celular"
            value={formData.phone}
            onChange={handleChange}
          />

          <Button type="submit">
            {formType === "personal"
              ? "Quero ser cliente"
              : "Quero para minha empresa"}
          </Button>
        </FieldGroup>
      </form>

      <InfoText>
        Ao enviar seus dados, você autoriza que o SmartMoney entre em contato e declara estar ciente da{" "}
        <a href="#">Política de Privacidade</a>.
      </InfoText>

      <Divider />

      <SuccessInfo>
        <Icon /> Seus dados estão seguros
      </SuccessInfo>
    </FormWrapper>
  );
}
