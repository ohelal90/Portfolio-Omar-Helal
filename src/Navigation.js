import { lowerCase } from 'lodash';

console.log(lowerCase);

function buildLinks(links){
    var result = '';
    var i = 0;

    while(i < links.length){
        result += `
            <li>
                <a href="/${lowerCase(links[i])}">${links[i]}</a>
            </li>
    `;
        i++;
    }

    return result;
}
export default function Navigation(state){
    return `
    <div id="navigation">
        <ul class="container">
            ${buildLinks(state.links)}
        </ul>
    </div>   
    `;
}