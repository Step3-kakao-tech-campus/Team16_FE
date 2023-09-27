const StringWithLineBreak = (str: string): JSX.Element[] => {
  return str.split('\n').map((line, idx) => (
    <span key={idx}>
      {line}
      <br />
    </span>
  ));
};

export default StringWithLineBreak;
