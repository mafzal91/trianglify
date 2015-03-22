let React = require('react');
let Trianglify = require('trianglify');

let TrianglifyCanvas = require('./TrianglifyCanvas.jsx');

module.exports = class TrianglifyOptionDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = React.addons.update(Trianglify.defaults, {}); // Copy Trianglify.defaults instead of referencing it. Prevents heisenbugs
  }

  render() {
    let renderItem = function(colors) {
      return (
        <div key={colors} className="item">
        <TrianglifyCanvas x_colors={colors} height={100} width={100} cell_size={30}/>
        <br />{colors}
        </div>
      )
    }

    return (
      <div className="component-colorbrewerdemo">
        {Object.keys(Trianglify.colorbrewer).map(renderItem)}
      </div>
    );
  }
}