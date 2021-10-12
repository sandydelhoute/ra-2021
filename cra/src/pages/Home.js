import {
    Link
} from "react-router-dom";

const link= [
    {
      to:'/classvsfunctions',
      label:'Class vs functions'
    },
    {
      to:'/i18n',
      label:'Location'
    },
    {
      to:'/httpRequests',
      label:'Http requests'
    },
    {
        to:'/UseRef',
        label:'UseRef'
      }
  ];

 const Links =()=> link.map((link,index)=>
        <Link
            key={'link'+index}
            className="list-group-item list-group-item-action"       
            to={link.to}>
            {link.label}
        </Link>)
export const Home = () => <div>
    <div className="list-group">
        <h1>React avancé</h1>
        <Links/>
    </div>
</div>;