const Title = ({ locked }) => {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Limit! buy <b>Pro</b> for &gt; 5
        </span>
      ) : (
        "Fancy counter"
      )}
    </h1>
  );
};

export default Title;
