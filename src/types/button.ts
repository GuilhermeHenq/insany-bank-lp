export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  fontSize?: string;
  padding?: string;
  width?: string;
  height?: string;
  fontWeight?: number;
  margin?: string;
  onClick?: () => void;
  responsiveStyles?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  style?: React.CSSProperties;
};
