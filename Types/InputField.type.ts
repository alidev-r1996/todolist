export type InputPropsType = {
  name: string;
  value:string;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void ;
  label: string;
};
