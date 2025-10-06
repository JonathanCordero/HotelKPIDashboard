document.getElementById("calculateBtn").addEventListener("click", () => {
    const tra = parseFloat(document.getElementById("tra").value);
    const roomsSold = parseFloat(document.getElementById("roomsSold").value);
    const trr = parseFloat(document.getElementById("trr").value);

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

    document.getElementById("occupancyRate").textContent = occupancyRate.toFixed(2);
    document.getElementById("adr").textContent = adr.toFixed(2);
    document.getElementById("revpar").textContent = revpar.toFixed(2);

});