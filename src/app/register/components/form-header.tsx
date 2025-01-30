'use client';

import { css, Heading, MultiStep, Text } from '@unimake-ui/react';

export default function FormHeader() {
  return (
    <div className="px-6 grid gap-6">
      <div>
        <Heading>Bem-vindo ao Ignite Call!!</Heading>
        <Text
          $css={css`
            color: ${props => props.theme.colors.gray700};
          `}
        >
          Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois.
        </Text>
      </div>

      <MultiStep $size={4} $currentStep={1} />
    </div>
  );
}
