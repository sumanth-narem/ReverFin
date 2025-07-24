
export interface MarqueeChildType {
  image: string;
  title: string;
}

export interface CardType {
  title: string;
  value: string;
  symbol: string;
  image: string;
  imageHover: string;
  className?: string;
}

export interface ButtonPropsType {
  link: string;
  title: string;
  className?: string;
  icon?: React.ReactNode;
}

export interface ImagePropsType {
  src?: string;
  alt: string;
  fill: boolean;
  loading: "eager" | "lazy" | undefined;
  className?: string;
}

export interface SubItems {
  title: string;
  click: () => void;
  img?: string;
  hoverImg?: string;
  content: string;
}

export interface URLType {
  title: string;
  icon?: React.ReactNode;
  subItems?: SubItems[];
}

export interface ResultsDataType {
  title: string;
  value: string;
  symbol: string;
  image: string;
  imageHover: string;
  className: string;
}

export interface ScrollSectionType {
  id: number;
  title: string;
}

export interface ScrollSectionFeature {
  icon: string;
  text: string;
  content: string;
}

export interface SideContentType {
  img: string;
  content: string;
}

export interface ScrollSectionDataType {
  name: string;
  item?: number;
  percent?: number;
  content: {
    heading: string;
    subheading: string;
  };
  features: ScrollSectionFeature[];
  sideContent: SideContentType;
}

export interface RbyRDataType {
  heading: string;
  subHeading: string;
  content: string[];
}

export interface GettingStartedType {
  img: string;
  heading: string;
  content: React.ReactNode;
}

export interface IntegrationsType {
  name: string;
  img: string;
  category: string;
  content: string;
}

export interface IntegrationsCardType {
  item: IntegrationsType;
  key: number;
  keyValue: number;
}

export interface TimeLineContentType {
  heading: string;
  completed: boolean;
  items: React.ReactNode[];
}

export interface TimeLineDataType {
  title: string;
  content: TimeLineContentType;
}

export interface BlogsDataType {
  type: string;
  title: string;
  description?: string;
  img: string;
}

export type FooterLinkItem = {
  title: string;
  link: string;
};

export type FooterSectionKey = 'Product' | 'Company' | 'Resources' | 'Connect';

export type FooterDataType = {
  [key in FooterSectionKey]: FooterLinkItem[];
};

export interface BlogsPageDataType {
  title: string;
  tag: string;
  summary: string;
  date: string;
  read_time: string;
  img: string;
}