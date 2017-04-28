var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few examples locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Provo'>Provo, Utah</Link>
        </li>
        <li>
          <Link to='/?location=Puebla'>Puebla, Mexico</Link>
        </li>
        <li>
          <Link to='/?location=Hyderabad'>Hyderabad, India</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
