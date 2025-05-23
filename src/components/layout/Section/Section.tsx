import type { BoxProps } from '@mui/material';
import type React from 'react';
import { Box, Container, type ContainerProps } from '@mui/material';

type SectionProps = BoxProps & {
  children?: React.ReactNode;
  fullWidth?: boolean;
  containerProps?: ContainerProps;
};

const Section = ({ children, fullWidth = false, className, containerProps, sx, ...props }: SectionProps) => {
  return (
    <Box component={'section'} sx={{ py: 10, ...(sx as object) }} {...props}>
      {fullWidth ? (
        children
      ) : (
        <Container maxWidth="lg" {...containerProps}>
          {children}
        </Container>
      )}
    </Box>
  );
};

Section.displayName = 'Section';
export { Section };
