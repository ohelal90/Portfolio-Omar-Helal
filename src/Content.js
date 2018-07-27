import * as Pages from './Pages';

export default function Content(state, posts){
    console.log('page', Pages[state.body]);
    console.log('body', state.body);
    
    return `
    <div id="content">
        <div class="container">
            <ul>
                <li>I am a 27 year old nerd.
                </li>
                <li>Avid Chicago sports fan.
                </li>
                <li>I have a family and two dogs.
                </li>
            </ul>
            ${Pages[state.body](posts)}    
        </div>
    </div>
`;
}