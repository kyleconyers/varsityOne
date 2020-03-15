import React, { useContext } from "react";
import "../../App.css";
import reducer from "../../reducer";
import { Badge } from 'reactstrap';
import { setPriority } from "os";
import {store} from '../Center/center'
 
// const CenterLinks = props => <div className="centerLinks">{props.children}</div>



export default function CenterLinks(props){
  

  const {state, dispatch} = useContext(store)

  console.log('Our global from parent state: ', state);
  const tags = [
    { name: "all", color: "danger", displayText: "All Committees" },
    { name: "innovation", color: "warning", displayText: "Innovation, Technololgy & Economic Development"},
    { name: "consumer", color: "warning", displayText: "Consumer, Technololgy & Economic Development"},
    { name: "finance", color: "warning", displayText: "Finance"},
    { name: "appropriations", color: "warning", displayText: "Appropriations"},
    { name: "civil", color: "warning", displayText: "Civil Rights & Judicary"},
    { name: "workforceDev", color: "warning", displayText: "College and Workforce development"},
    { name: "Education", color: "warning", displayText: "Education"},
    { name: "Environment", color: "warning", displayText: "Environment"},
    { name: "Health", color: "warning", displayText: "Health Care and Wellness"},
    { name: "Housing", color: "warning", displayText: "Housing, Community Development & Veterans"},
    { name: "Human", color: "warning", displayText: "Human Service and Early Learning"},
    { name: "Budget", color: "warning", displayText: "Capital Budget"},
    { name: "Commerce", color: "warning", displayText: "Commerce and Gaming"},
    { name: "Local", color: "warning", displayText: "Local Government"},
    { name: "Safety", color: "warning", displayText: "Public Safety"},
    { name: "Rules", color: "warning", displayText: "Rules"},
    { name: "Rural", color: "warning", displayText: "Rural Development, Agriculture & Natural Resources"},
    { name: "Tribal", color: "warning", displayText: "State Government and Tribal Relations"},
    { name: "Transport", color: "warning", displayText: "Transportation"},



  ];
  const tagComponents = tags.map((tag) => {
    return (
      <Badge className="centerLinksBadges" selected={(state.tag == tag.name)} color={(state.tag == tag.name) ? "primary": tag.color} 
        onClick={() => dispatch({type: "TOGGLE_TAG", tag: tag.name})}>
        {tag.displayText}
      </Badge>
    )
  });
  
  // state = {
  //   href: null
  // }

  // componentDidMount() {
  //   var url = window.location.href;
  //   var urlSplit = url.split("/");    
  //   if (urlSplit.length > 5) {
  //     var to = url.lastIndexOf('/');
  //     to = to == -1 ? url.length : to + 1;
  //     url = url.substring(0, to-1);
  //   }

  //   this.setState (
  //     {
  //       href: url
  //     }
  //   )
  // }


  // render() {
  return (      
    <div className="centerLinks">
      { tagComponents }
      {/* <Badge href={this.state.href+`/all`} onClick={() => dispatch({type: "TOGGLE_TAG", tag: "all"})} color="danger">All Committees</Badge> */}
      {/* <Badge href={this.state.href+`/innovation`} color="warning">Innovation, Technololgy & Economic Development</Badge> */}
      {/* <Badge href={this.state.href+`/consumer`} color="warning">Consumer Protection and Business</Badge> */}
      {/* <Badge href={this.state.href+`/finance`} color="warning">Finance</Badge> */}
      {/* <Badge href={this.state.href+`/appropriations`} color="primary">Appropriations</Badge> */}
      {/* <Badge href={this.state.href+`/civil_rights`} color="primary">Civil Rights & Judicary</Badge> */}
      {/* <Badge href={this.state.href+`/college`} color="primary">College and Workforce development</Badge>
      <Badge href={this.state.href+`/education`} color="primary">Education</Badge>
      <Badge href={this.state.href+`/environment`} color="primary">Environment & Energy</Badge>
      <Badge href={this.state.href+`/health`} color="primary">Health Care & Wellness</Badge>
      <Badge href={this.state.href+`/housing`} color="primary">Housing, Community Development & Veterans</Badge>
      <Badge href={this.state.href+`/human`} color="primary">Human Services & Early Learning</Badge>
      <Badge href={this.state.href+`/capital_budget`} color="success">Capital Budget</Badge>
      <Badge href={this.state.href+`/commerce`} color="success">Commerce & Gaming</Badge>
      <Badge href={this.state.href+`/labor`} color="success">Labor & Workplace Standards</Badge>
      <Badge href={this.state.href+`/local_government`} color="success">Local Government</Badge>
      <Badge href={this.state.href+`/public_safety`} color="success">Public Safety</Badge>
      <Badge href={this.state.href+`/rules`} color="success">Rules</Badge>
      <Badge href={this.state.href+`/rural_development`} color="success">Rural Development, Agriculture & Natural Resources</Badge>
      <Badge href={this.state.href+`/state_government`} color="success">State Government and Tribal Relations</Badge>
      <Badge href={this.state.href+`/transportation`} color="success">Transportation</Badge>
     */}
    </div>
  );

    
  // }
 

    
  // }
}


// function CenterLinks(props) {
//     return (
//       <div className="card">
//         <div className="img-container">
//           <img alt={props.name} src={props.image} />
//         </div>
//         <div className="content">
//           <ul>
//             <li>
//               <strong>Name:</strong> {props.name}
//             </li>
//             <li>
//               <strong>Occupation:</strong> {props.occupation}
//             </li>
//             <li>
//               <strong>Location:</strong> {props.location}
//             </li>
//           </ul>
//         </div>
//         <span onClick={() => props.removeFriend(props.id)} className="remove">
//           𝘅
//         </span>
//       </div>
//     );
//   }
  
// export default CenterLinks;