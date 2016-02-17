import React from "react"
import request from "../helpers/request.js"
import Repos from "./Repos.jsx"
import {browserHistory} from "react-router"

export default class Table extends React.Component{
  list_headers(){
    return(<tr>
      <th className="mdl-data-table__cell--non-numeric">Name</th>
      <th className="mdl-data-table__cell--non-numeric">Description</th>
      <th className="mdl-data-table__cell--non-numeric">DefaultDistribution</th>
      <th className="mdl-data-table__cell--non-numeric">DefaultComponent</th>
    </tr>)
  }
  _handleClick(name){
    browserHistory.push("/repos/"+encodeURIComponent(name))
  }
  render(){
    var headers = this.list_headers()
    var elems = this.props.list.map((el,i)=>{
     return (
       <tr key = {encodeURIComponent(el.Name)} id = {encodeURIComponent(el.Name)} style={{cursor:"pointer"}} onClick={this._handleClick.bind(this,el.Name)}>
       <td>{el.Name}</td>
       <td>{el.Comment}</td>
       <td>{el.DefaultDistribution}</td>
       <td>{el.defaultComponent}</td>
     </tr>)
   })

    return (<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp" style={{}}>
      <thead>
        {headers}
      </thead>
      <tbody>
        {elems}
      </tbody>
    </table>)
  }
}