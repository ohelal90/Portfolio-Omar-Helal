export default function Header(state){
    return `
<div id="header">
<div id class="container">    
    <img src="https://media.licdn.com/dms/image/C5603AQEALmN18O7urQ/profile-displayphoto-shrink_200_200/0?e=1534377600&v=beta&t=aeYx-FvyHZ9Ee_zsMBirTClLpI15-QPqzr2FQFm94-4" alt="">     
<div id="greeting"> </div>
<input type="text"/>
    <h1 class="ChicagoBearsOrange">${state.title}</h1>
</div>
</div>
`;
}