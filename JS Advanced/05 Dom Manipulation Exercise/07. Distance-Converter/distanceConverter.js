function attachEventsListeners() {
    const ratios = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    function convert(value, type) {
        const inMeters = value / ratios[type];

        return {
            m: inMeters,
            km: inMeters * ratios.km,
            cm: inMeters * ratios.cm,
            mm: inMeters * ratios.mm,
            mi: inMeters * ratios.mi,
            yrd: inMeters * ratios.yrd,
            ft: inMeters * ratios.ft,
            in: inMeters * ratios.in,
        };
        
    }

    let input = Number(document.getElementById("inputDistance"));
    let output = document.getElementById("outputDistance");
    document.getElementById("convert").addEventListener("click", onConvert);
    const inputs = document.getElementById("inputUnits")
    
    function onConvert(ev) {
        
        console.log(Number(output.value = convert(input, inputs.value)))
        output.disabled = false;

        
    
        
        
     //  if (ev.target.tagName == "INPUT" && ev.target.type == "button") {
      //  const input = ev.target.parentElement.querySelector('input[type="text"]');

     // const time = convert(Number(input.value), input.id);

     // daysInput.value = time.days;
    // hoursInput.value = time.hours;
    // minutesInput.value = time.minutes;
    //  secondsInput.value = time.seconds;
     }
}

    //document.getElementById("daysBtn").addEventListener("click", onConvert);
    //document.getElementById("hoursBtn").addEventListener("click", onConvert);
   // document.getElementById("minutesBtn").addEventListener("click", onConvert);
   // document.getElementById("secondsBtn").addEventListener("click", onConvert);

   // function onConvert(ev) {
    //    const input = ev.target.parentElement.querySelector('input[type="text"]');

  //      const time = convert(Number(input.value), input.id);

   //     daysInput.value = time.days;
  //      hoursInput.value = time.hours;
  //      minutesInput.value = time.minutes;
  //      secondsInput.value = time.seconds;

   // }


