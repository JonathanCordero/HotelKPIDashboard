document.addEventListener("DOMContentLoaded", ()=>{
    const totalRoomsAvailableInput = document.getElementById("tra");
    const roomsSoldInput = document.getElementById("roomsSold");
    const totalRoomRevenueInput = document.getElementById("trr");
    const calculateBtn = document.getElementById("calculateBtn");

    const occupancyRateR1= document.getElementById("occupancyRate");
    const adrR1= document.getElementById("adr");
    const revparR1= document.getElementById("revpar");
    const resultSection = document.querySelector('section[aria-labelledby="results"]');

    calculateBtn.addEventListener("click", () => {
    const tra = parseFloat(totalRoomsAvailableInput.value);
    const roomsSold = parseFloat(roomsSoldInput.value);
    const trr = parseFloat(totalRoomRevenueInput.value);

    if (isNaN(tra) || isNaN(roomsSold) || isNaN(trr) 
        || tra<=0 || roomsSold<0 || trr<0){
        alert("Please enter valid numbers in the fields.");
        return;
    }
    if (roomsSold==0 && trr>0){
        alert("Rooms sold cannot equal zero while revenue is greater then zero."); 
        return;
    }
    
    if (roomsSold>tra){
        alert("Rooms sold cannot exceed total rooms available.");
        return;
    }

    /*You must use the following standard industry formulas:
        * Occupancy (%) = (Rooms Sold / Total Rooms Available) * 100
        * ADR ($) = Total Room Revenue / Rooms Sold
        * RevPAR ($) = Total Room Revenue / Total Rooms Available*/
    const occupancyRate = roomsSold/tra*100;
    const adr =  trr / roomsSold;
    const revpar = trr / tra;

    occupancyRateR1.textContent = occupancyRate.toFixed(2);
    adrR1.textContent = adr.toFixed(2);
    revparR1.textContent = revpar.toFixed(2);

    resultSection.classList.remove("results-highlight");
    void resultSection.offsetWidth;
    resultSection.classList.add("results-highlight");
    });
})
