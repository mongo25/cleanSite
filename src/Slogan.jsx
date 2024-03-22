function Slogan({ summary, summary2, summary3, p, p2, p3, p4, font, fontP }) {
  return (
    <div className="sloganText">
      <h2 className={font}>
        {summary}
        <br />
        {summary2}
        <br />
        {summary3}
      </h2>
      <p className={`sloganTex ${fontP}`}>
        {p} <b>{p2}</b>
        {p3} <b>{p4}</b>
      </p>
    </div>
  );
}

export default Slogan;
