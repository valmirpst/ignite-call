'use client';

import { registerUser } from '@/actions/register';
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
    // Criar cookies para nao perder as informacoes ate aqui se o usuario ja digitou

    const response = await registerUser({
      name: data.name,
      username: data.username,
    });

    if (!response.ok) alert(response.message);

    console.log(response);
  }

  useEffect(() => {
    const username = searchParams.get('username');

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
