

let dataLink = "https://run.mocky.io/v3/c765a081-65cc-4e49-b420-f7d4947a1102";
let shortNameArr = [];

function getAPIData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            displayData(xhr.responseText);
        }
    };
    xhr.open('GET', dataLink);
    xhr.send();
}

getAPIData();


function displayData(responseData) {
    var data = JSON.parse(responseData);
    var arrData = Object.values(data.searchresult);
    var contentString = ``;
    shortNameArr.push(arrData);
    for (let i = 0; i < arrData.length; i++) {
        var shortName = arrData[i].companyShortName;
        var current = arrData[i].current;
        var absoulteChange = arrData[i].absolutechange;
        var percentageChange = arrData[i].percentagechange;
        var low = arrData[i].low;
        var high = arrData[i].high
        
        contentString = contentString + `<div class="card">
                <p class="api-txt">
                    Short Name : <span class="short-name">${shortName}</span>
                </p>
                <p class="api-txt">
                    Current : <span class="current-name">${current}</span>
                </p>
                <p class="api-txt">
                    Absoulte Change : <span class="absolute-change">${absoulteChange}</span>
                </p>
                <p class="api-txt">
                    Percentage Change : <span class="percentage-change">${percentageChange}</span>
                </p>
                <p class="api-txt">
                    Low : <span class="low">${low}</span>
                </p>
                <p class="api-txt">
                    High : <span class="high">${high}</span>
                </p>
            </div>`
        document.querySelector('.card-wrap').innerHTML = contentString;
    }
}


var searchData = document.getElementById('search-card');
searchData.addEventListener('keyup', function () {
    let currentValue = this.value;
    if (currentValue.length > 0 ) {
        
        // shortNameArr.filter(function () {
            
        // });
    }
    // console.log(currentValue);
})

