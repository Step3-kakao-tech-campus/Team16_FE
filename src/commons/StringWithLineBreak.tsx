const StringWithLineBreak = (str: string): JSX.Element[] => {
  return str.split('\n').map((line, idx) => (
    <span key={idx} className="break-words">
      {line}
      <br />
    </span>
  ));
};

export default StringWithLineBreak;
