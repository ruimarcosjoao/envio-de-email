import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import React from "react";
interface WelcomeEmailProps {
  name: string;
}

const WelcomeEmail: React.FC<WelcomeEmailProps> = ({ name }) => (
  <Html>
    <Head />
    <Preview>Bem-vindo(a) ao nosso serviço!</Preview>
    <Body
      style={{ backgroundColor: "#f9f9f9", fontFamily: "Arial, sans-serif" }}
    >
      <Container
        style={{
          padding: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "5px",
        }}
      >
        <Heading style={{ color: "#333333" }}>Olá, {name}!</Heading>
        <Text style={{ fontSize: "16px", color: "#555555" }}>
          Obrigado por se inscrever no nosso serviço. Estamos felizes em tê-lo
          conosco.
        </Text>
        <Text style={{ fontSize: "14px", color: "#777777" }}>— Equipe</Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;
