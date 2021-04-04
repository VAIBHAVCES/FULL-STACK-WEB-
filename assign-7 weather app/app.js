let  locationDef = "New Delhi";
const key = '3b61d2d122368d8f4a166479d47104f2';

$("#location").on("keydown", function(e){
    
    // console.log(e.keyCode);
    if(e.keyCode===13){
        // enter has been pressed

        const value= $(this).val();
        console.log("inp is : "+value);
        locationDef=value;
        const newApi = `https://api.openweathermap.org/data/2.5/weather?q=${locationDef}&APPID=${key}`
        getData(newApi).then((dataReceived)=>{
            // console.log("datat received from api ");
            // console.log(dataReceived);
            updateInDOM(dataReceived , locationDef);

            return dataReceived;
        }).catch((err)=>{
            alert('country not found' )
            // console.log(err);
        });
    }
})
let days=["Sunday", "Monday" ,"Tuesday" ,"Wednesday" ,"Thursday","Friday" ,"Saturday" ];
function updateInDOM(dataReceived , city ){

    let locationSpan = $("#locText");
    let dateTimeSpan = $("#datetime");
    let tempSpan =$("#temp");
    let conditionSpan =$("#condition"); 
    let minmaxSpan =$("#minmax");
    // updating location
    locationSpan.text(` ${dataReceived.name} , ${dataReceived.sys.country}`);

    let d = new Date();
    dateTimeSpan.text(`${d.getDate()} , ${days[d.getDay()]} , ${d.getFullYear()}`); 
    tempSpan.text(`${(Math.round(dataReceived.main.temp-273.15)*100)/100}° Celcius` );
    console.log(dataReceived.weather);
    conditionSpan.text(`${dataReceived.weather[0].main}`)
    minmaxSpan.text(`${(Math.round(dataReceived.main.temp_min-273.15)*10000)/10000}° / ${(Math.round(dataReceived.main.temp_max-273.15)*10000)/10000}°`)

}
async function getData(url){

    const data  = await fetch(url);
    const parsedData = await data.json();
    console.log("data has been fetched ");
    console.log(parsedData);
    return parsedData;


}