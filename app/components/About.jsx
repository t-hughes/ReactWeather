var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a weather application built on React.
      </p>
      <p>
        Here are some of the tools I used:
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
          </li>
          <li>
            <a href="https://foundation.zurb.com">Foundation</a> - This is the CSS framework I used to make things look pretty.
          </li>
        </ul>
      </p>
    </div>
  )
};

module.exports = About;
