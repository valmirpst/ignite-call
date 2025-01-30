'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Text, TextInput } from '@unimake-ui/react';
import { MoveRight } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FieldError, FormContainer } from './styles';

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, 'O usuário precisa ter no mínimo 3 letras')
    .regex(/^([a-z\\-]+)$/i, 'O usuário só pode conter letras e hifens')
    .transform(username => username.toLowerCase()),

  name: z.string().min(3, 'O nome precisa ter no mínimo 3 letras'),
});

type RegisterFormData = z.infer<typeof registerFormSchema>;

export default function FormContent() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  const searchParams = useSearchParams();

  async function handleRegisterSubmit(data: RegisterFormData) {
    const { name, username } = data;
    console.log(name, username);
  }

  useEffect(() => {
    const username = searchParams.get('username');
    console.log(username);
    if (username) {
      setValue('username', username);
    }
  }, [searchParams, setValue]);

  return (
    <FormContainer as={'form'} onSubmit={handleSubmit(handleRegisterSubmit)}>
      <label>
        <Text $size="sm">Nome de usuário</Text>
        <TextInput {...register('username')} prefix="ignite.com/" placeholder="seu-usuario" />
        {errors.username && <FieldError>{errors.username.message}</FieldError>}
      </label>

      <label>
        <Text $size="sm">Nome Completo</Text>
        <TextInput {...register('name')} placeholder="Seu nome" />
        {errors.name && <FieldError>{errors.name.message}</FieldError>}
      </label>

      <Button type="submit" $size="lg" disabled={isSubmitting}>
        Próximo passo
        <MoveRight />
      </Button>
    </FormContainer>
  );
}
