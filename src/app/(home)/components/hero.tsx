'use client';

import { Heading, Text, css } from '@unimake-ui/react';
import ClaimUsernameForm from './claim-username-form/claim-username-form';

export default function Hero() {
  return (
    <section className="px-12 lg:px-24 h-full flex flex-col justify-center gap-6 z-10">
      <div>
        <Heading $size="3xl">
          Agendamento <br /> descomplicado
        </Heading>

        <Text
          $size="lg"
          $css={css`
            color: ${props => props.theme.colors.gray700};
            @media screen and (width < 1024px) {
              font-size: ${props => props.theme.fontSizes['md']};
            }
          `}
        >
          Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.
        </Text>
      </div>
      <ClaimUsernameForm />
    </section>
  );
}
