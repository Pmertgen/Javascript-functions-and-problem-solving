
function myFunction(idElement) 
{
    var element = document.getElementById('card' + idElement);
    
    //Create an array of all cards and remove the clicked one
    var cards = [1,2,3,4];
    var index = idElement;
    cards.splice(index-1,1 );
      
      if (element.innerHTML === 'down') {
          element.innerHTML = 'up';
          
          //If state is changed to "up", all others are chnged to "down"
          document.getElementById('card' + cards[0]).innerHTML = "down";
          document.getElementById('card' + cards[1]).innerHTML = "down";
          document.getElementById('card' + cards[2]).innerHTML = "down";
        } else {
            element.innerHTML = 'down';
            
        }
    
}

<table id="card-container">
  <tbody>
    <tr>
      <td class="card" id="card1" onclick="myFunction(1)">down</td>
      <td class="card" id="card2" onclick="myFunction(2)">down</td>
    </tr>
    <tr>
      <td class="card" id="card3" onclick="myFunction(3)">down</td>
      <td class="card" id="card4" onclick="myFunction(4)">down</td>
    </tr>
  </tbody>
</table>