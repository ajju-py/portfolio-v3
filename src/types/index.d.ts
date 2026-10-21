export type TCommonProps = {
  title?: string;
  name?: string;
  icon?: string;
};

export type TExperience = {
  title: string;
  companyName: string;
  iconBg: string;
  date: string;
  points: string[];
  icon: string;
  type?: 'education' | 'certification' | 'milestone' | 'lab';
};

export type TProject = {
  id?: string;
  name: string;
  category?: string;
  categoryBadge?: string;
  isPrimary?: boolean;
  description: string;
  shortDescription?: string;
  problem?: string;
  contribution?: string;
  technologies?: string[];
  implementationDetails?: string[];
  challenges?: string;
  lessonsLearned?: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  sourceCodeLink?: string;
  hasCode?: boolean;
  liveUrl?: string;
};

export type TTechnology = {
  name: string;
  icon: string;
  category?: string;
};

export type TSkillCategory = {
  category: string;
  badge: string;
  isLearningArea?: boolean;
  description: string;
  skills: string[];
};

export type TCertification = {
  id: string;
  title: string;
  subtitle?: string;
  issuer: string;
  year?: string;
  verifyUrl?: string;
  type: 'certification' | 'training';
  highlight?: boolean;
  icon: string;
  iconBg: string;
  status: string;
  description: string;
  skillsCovered: string[];
};

export type TEducation = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  icon: string;
  iconBg: string;
  description: string;
  achievement?: string;
};

export type TNavLink = {
  id: string;
  title: string;
  isAction?: boolean;
};

export type TService = {
  title: string;
  subtitle?: string;
  icon: string;
  description?: string;
};

export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};
