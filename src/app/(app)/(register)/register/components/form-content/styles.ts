import { Box, styled, Text } from '@unimake-ui/react';

export const FormContainer = styled(Box)`
  margin-top: ${props => props.theme.space[6]};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[4]};

  label {
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.space[2]};
  }
`;

export const FieldError = styled(Text)`
  font-size: ${({ $size = 'xs', theme }) => theme.fontSizes[$size]};
  color: ${({ theme }) => theme.colors.red500};
  margin-left: 0.25rem;
`;
