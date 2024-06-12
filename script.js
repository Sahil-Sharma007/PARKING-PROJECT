document.addEventListener('DOMContentLoaded', () => {
 const addParkingSpotButton = document.querySelector('.add-parking-spot');
 const parkingSpotList = document.querySelector('.parking-spot-list');

 addParkingSpotButton.addEventListener('click', () => {
    const parkingSpot = prompt('Enter the parking spot number:');
    if (parkingSpot) {
      const listItem = document.createElement('li');
      listItem.textContent = parkingSpot;
      parkingSpotList.appendChild(listItem);
    }
 });
});