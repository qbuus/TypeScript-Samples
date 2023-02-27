export type Profile = {
  name: string;
};

export const Profile = ({ name }: Profile) => {
  return <div>Private Profile. Name is {name}</div>;
};
