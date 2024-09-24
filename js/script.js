// function used button active background color

function addedActiveColor(id) {
    document.getElementById('history-btn').classList.remove('bg-lime-300');
    document.getElementById('donation-btn').classList.remove('bg-lime-300');
    document.getElementById(id).classList.add('bg-lime-300');
}
function addedHiddenClass(id) {
    document.getElementById('donation-section').classList.remove('hidden')
    document.getElementById('history-container').classList.remove('hidden')
    document.getElementById(id).classList.add('hidden')
}




document.getElementById('donation-btn').addEventListener('click', function () {

    addedActiveColor('donation-btn');
    addedHiddenClass('history-container')

})
document.getElementById('history-btn').addEventListener('click', function () {
    addedActiveColor('history-btn')
    addedHiddenClass('donation-section')
})


// Donation SuccessFully popup funtion

function popupAlart(){
    document.getElementById('popup-shows').classList.remove('hidden');
    document.getElementById('popup-close-btn').addEventListener('click', function () {
        document.getElementById('popup-shows').classList.add('hidden');
    })
}


// Noakhali Donation section

document.getElementById('noakhali-donate-btn').addEventListener('click', function () {
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    const donateBalance = parseFloat(document.getElementById('donate-balance').innerText);
    const noakhaliDonate = parseFloat(document.getElementById('addDonateInput').value);

    // const mainBalance = getInputTextById('main-balance');
    // const donateBalance = getInputTextById('donate-balance');
    // const noakhaliDonate = getInputValueById('addDonateInput');


    if (isNaN(noakhaliDonate) || noakhaliDonate < 0 || noakhaliDonate === 0) {
        alert('Invalid Donation Amount ');
        return;
    }
    if (noakhaliDonate > mainBalance) {
        alert('You do not enough money?');

        return;

    }

    const newDonateBalance = noakhaliDonate + donateBalance;
    const newMainBalance = mainBalance - noakhaliDonate;
    document.getElementById('donate-balance').innerHTML = newDonateBalance;
    document.getElementById('main-balance').innerHTML = newMainBalance;


    // Donation SuccessFully popup

     popupAlart();

    //  History section

    const historyItem = document.createElement('div');
    historyItem.className = ' p-6 rounded-xl border-2 mb-6 bg-lime-100 ';
    historyItem.innerHTML = `
    <h3 class=" text-md font-bold" > ${noakhaliDonate} Taka is Donate for Flood at Noakhali, Bangladesh </h3>
    <p >Date: ${new Date().toDateString()} ${new Date().toTimeString()} </p>

    `;
    const historyList = document.getElementById('history-container');

    historyList.insertBefore(historyItem, historyList.lastChild);

    document.getElementById('addDonateInput').value = "";

    


})



// Feni Donation section
document.getElementById('feni-donate-btn').addEventListener('click', function () {

    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    const donateBalance = parseFloat(document.getElementById('feni-donate-balance').innerText);
    const feniDonate = parseFloat(document.getElementById('feniDonateInput').value);

    // const mainBalance = getInputTextById('main-balance');
    // const donateBalance = getInputTextById('feni-donate-balance');
    // const feniDonate = getInputValueById('feniDonateInput');



    if (isNaN(feniDonate) || feniDonate < 0 || feniDonate === 0 ){
        alert(' Invalid Donation Amount ');
        return;
    }
    if (feniDonate > mainBalance) {
        alert('You do not enough money?');
        return;
    }
    

    const newDonateBalance = feniDonate + donateBalance;
    const newMainBalance = mainBalance - feniDonate;
    document.getElementById('feni-donate-balance').innerHTML = newDonateBalance;
    document.getElementById('main-balance').innerHTML = newMainBalance;

    // Donation SuccessFully popup
    popupAlart();

    // History section

    const historyItem = document.createElement('div');
    historyItem.className = ' p-6 rounded-xl border-2 mb-6 bg-green-100 ';
    historyItem.innerHTML = `
    <h3 class=" text-md font-bold" > ${feniDonate} Taka is Donated for famine-2024 at Feni, Bangladesh </h3>
    <p >Date: ${new Date().toDateString()} ${new Date().toTimeString()} </p>

    `;
    const historyList = document.getElementById('history-container');
    historyList.insertBefore(historyItem, historyList.lastChild);

    document.getElementById('feniDonateInput').value = "";


})


// Quota Donation section

document.getElementById('quota-donate-btn').addEventListener('click', function () {
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    const donateBalance = parseFloat(document.getElementById('quota-donate-balance').innerText);
    const quotaDonate = parseFloat(document.getElementById('quotaDonateInput').value);

    // const mainBalance = getInputTextById('main-balance');
    // const donateBalance = getInputTextById('quota-donate-balance');
    // const quotaDonate = getInputValueById('quotaDonateInput');


    if (isNaN(quotaDonate) || quotaDonate < 0 || quotaDonate === 0) {
        alert(' Invalid Donation Amount ');
        return;
    }
    if (quotaDonate > mainBalance) {
        alert(' You do not enough money?');
        return;
    }

    const newDonateBalance = quotaDonate + donateBalance;
    const newMainBalance = mainBalance - quotaDonate;
    document.getElementById('quota-donate-balance').innerHTML = newDonateBalance;
    document.getElementById('main-balance').innerHTML = newMainBalance;

    // Donation SuccessFully popup

    popupAlart();


    // history section
    const historyItem = document.createElement('div');
    historyItem.className = ' p-6 rounded-xl border-2 mb-6 bg-red-100 ';
    historyItem.innerHTML = `
    <h3 class=" text-md font-bold" > ${quotaDonate} Taka is  Donated for Aid for Injured in the Quota Movement</h3>
    <p >Date: ${new Date().toDateString()} ${new Date().toTimeString()} </p>

    `;
    const historyList = document.getElementById('history-container');

    historyList.insertBefore(historyItem, historyList.lastChild);

    document.getElementById('quotaDonateInput').value = "";


})



// Selation section



document.getElementById('blog-section-btn').addEventListener('click', function () {
    window.location.href = "blog.html";
})

