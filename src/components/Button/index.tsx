import styled, { css } from 'styled-components';
import { ButtonProps } from '../../types/button';

const ButtonBase = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  cursor: pointer;
  border: none;
  transition: 0.3s ease;
  font-family: 'Archivo', sans-serif;
  position: relative;
  overflow: hidden;

  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
  ${({ margin }) => margin && `margin: ${margin};`} // ← AQUI!

  ${({ variant }) =>
    variant === 'outline'
      ? css`
          background-color: transparent;
          color: var(--brand-primary-default);
          border: 1.5px solid var(--brand-primary-default);

          &::before {
            content: '';
            position: absolute;
            inset: 0;
            color: white;
            background-color: var(--brand-primary-default);
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.3s ease;
            z-index: 0;
          }

          &:hover::before {
            transform: scaleX(1);
          }

          &:hover {
            color: white;
          }

          & > * {
            position: relative;
            z-index: 1;
          }
        `
      : css`
          background-color: var(--brand-primary-default);
          color: white;
          border: none;

          background-image: linear-gradient(
            to right,
            var(--brand-primary-light),
            var(--brand-primary-default),
            var(--brand-primary-light)
          );
          background-size: 200%;
          background-position: center;
          transition: background-position 0.5s ease;

          &:hover {
            background-position: left;
          }

          &:disabled {
            background-color: #94a3b8;
            cursor: not-allowed;
          }
        `}

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;

    ${({ responsiveStyles }) =>
      responsiveStyles &&
      css`
        ${responsiveStyles}
      `}
  }
`;

export const Button = ({
  children,
  variant = 'primary',
  fontSize = '14px',
  padding = '16px',
  width = '100%',
  height = '56px',
  fontWeight = 600,
  margin,
  onClick,
  responsiveStyles,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  return (
    <ButtonBase
      variant={variant}
      fontSize={fontSize}
      padding={padding}
      width={width}
      height={height}
      fontWeight={fontWeight}
      margin={margin}
      onClick={onClick}
      responsiveStyles={responsiveStyles}
      type={type}
      disabled={disabled}
    >
      {children}
    </ButtonBase>
  );
};
