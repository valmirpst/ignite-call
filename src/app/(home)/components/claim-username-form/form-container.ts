import { Box, styled } from '@unimake-ui/react';

export const FormContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${props => props.theme.space[2]};
  gap: ${props => props.theme.space[2]};
`;
