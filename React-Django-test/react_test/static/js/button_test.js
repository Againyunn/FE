
// document.write("<script src='../bootstrap_source/react-bootstrap.min.js'></script>");
// document.write("<script src='../bootstrap_source/react-dom.production.min.js'></script>");
// document.write("<script src='../bootstrap_source/react.production.min.js'></script>");


function TypesExample()  {
    return (
      <div>
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
        <button type="button" className="btn btn-warning">Warning</button>
        <button type="button" className="btn btn-info">Info</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-dark">Dark</button>

      </div>
    );
  }

const styledButton = document.getElementById("styledButton");
ReactDOM.render(<TypesExample/>, styledButton);