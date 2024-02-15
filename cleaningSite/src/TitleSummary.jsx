
function TitleSummary({title, summary, rest}) {
  return (
    <div className="col-md-12 pb-3">
    <h1 className="title">{title}</h1>
    <p className="summary pt-3">
     {summary}
    <br />
     {rest}
    </p>
  </div>
  )
}

export default TitleSummary