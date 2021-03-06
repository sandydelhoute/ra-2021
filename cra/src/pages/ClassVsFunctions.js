import MonImage from '../assets/componentbyclass.png';
import { ParagrapheClass } from '../components/ParagrapheClass';
export const ClassVsFunctions = () => <>
    <h1>Class vs functions</h1>
    <h2>Functions</h2>
    <img className="img-fluid w-100" src={process.env.PUBLIC_URL + '/assets/componentbyfunction.png'} alt="" />
    <ParagrapheClass />
    <h2>Class</h2>
    <img className="img-fluid w-100" src={MonImage} alt="" />
</>;
