// Libs
import React, { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

// Atoms
import { Button, Input, TextArea } from "@/components/atoms";

// Styles
import * as S from "./styles";

export const FormContact = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState<boolean>();

  const handleChanges = (
    ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = ev.target;
    setData((prevState) => ({ ...prevState, [id]: value }));
  };

  const hanldeSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID_EMAILJS,
        process.env.NEXT_PUBLIC_TEMPLATE_ID_EMAILJS,
        data,
        process.env.NEXT_PUBLIC_KEY_EMAILJS
      )
      .then((res) => setLoading(false))
      .catch((err) => setLoading(false));
  };

  return (
    <S.Container>
      <S.Title>Mais informações envie sua mensagem</S.Title>
      <S.Form onSubmit={hanldeSubmit}>
        <Input
          id="fullname"
          placeholder="Nome Completo"
          width="100"
          onChange={handleChanges}
          required
        />

        <S.Group>
          <Input
            id="email"
            placeholder="E-mail"
            type="email"
            onChange={handleChanges}
            required
          />

          <Input
            id="phone"
            placeholder="Celular"
            onChange={handleChanges}
            required
          />
        </S.Group>

        <TextArea
          id="message"
          placeholder="Mensagem"
          onChange={handleChanges}
          required
        />

        <Button
          label="Enviar mensagem"
          height="52px"
          color="#0A3264"
          borderColor="#0A3264"
          backgroundColor="transparent"
          isLoading={loading}
          disabled={loading}
        />
      </S.Form>
    </S.Container>
  );
};
