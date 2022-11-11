import styled, { css } from 'styled-components'

const getVariantStyles = variant => {
  switch (variant) {
    case 'wide':
      return css`
        max-width: auto;
      `
    case 'default':
        return css`
          max-width: ${({ theme }) => theme?.breakpoints?.minWidthDesktop};
        `
    default:
      return css`
        max-width: ${({ theme }) => theme?.breakpoints?.minWidthWideDesktop};
      `
  }
}

export const ContainerStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  overflow: initial;
  ${({ theme, padding, fullWidth }) =>
    fullWidth
      ? `padding: ${theme?.spaces?.none};`
      : `padding: 0px ${theme?.spaces?.[padding]};`}

  ${({ variant }) => getVariantStyles(variant)};

  ${({ styles }) => styles};
`
