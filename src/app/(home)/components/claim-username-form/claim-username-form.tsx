'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, css, Text, TextInput } from '@unimake-ui/react';
import { MoveRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormContainer } from './form-container';

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, 'O usuário precisa ter no mínimo 3 letras')
    .regex(/^([a-z\\-]+)$/i, 'O usuário só pode conter letras e hifens')
    .transform(username => username.toLowerCase()),
});

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>;

export default function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  });

  const router = useRouter();

  async function handlePreRegister(data: ClaimUsernameFormData) {
    const username = data.username;
    router.push(`/register?username=${username}`);
  }

  return (
    <div>
      <FormContainer as={'form'} onSubmit={handleSubmit(handlePreRegister)}>
        <TextInput {...register('username')} $prefix="ignite.com/" placeholder="seu-usuario" />

        <Button type="submit" $variant="primary" disabled={isSubmitting}>
          <span>Reservar</span>
          <MoveRight />
        </Button>
      </FormContainer>
      <Text
        $size="sm"
        $css={css`
          color: ${({ theme }) => theme.colors.gray600};
          margin-top: 0.25rem;
          margin-left: 0.25rem;
        `}
      >
        {errors.username?.message || 'Digite um nome de usuário'}
      </Text>
    </div>
  );
}
