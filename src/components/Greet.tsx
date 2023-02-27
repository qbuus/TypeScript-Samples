type Name = {
  name: string;
  count?: number;
  isLoggedIn: boolean;
};

function Greet(props: Name) {
  const { count = 0 } = props;

  return (
    <>
      {props.isLoggedIn ? (
        <h2>
          Welcome {props.name} {props.count}
        </h2>
      ) : (
        <h2>Welcome guest</h2>
      )}
    </>
  );
}

export default Greet;
