/** Shared domain types for portfolio content. */
export type Project = {
  number: string;
  name: string;
  type: string;
  description: string;
  stack: string[];
  outcome: string;
  link: string;
};

export type Service = {
  title: string;
  description: string;
};
