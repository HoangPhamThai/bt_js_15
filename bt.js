// Bai 1
function getEnrollStatus (){
    let mapArea = {
        "A": 2,
        "B": 1,
        "C": 0.5,
    }
    let mapObject = {
        "1": 2.5,
        "2": 1.5,
        "3": 1,
    }
    let standardScore = parseFloat(document.getElementById("standardScore").value)
    let score1 = parseFloat(document.getElementById("score1").value)
    let score2 = parseFloat(document.getElementById("score2").value)
    let score3 = parseFloat(document.getElementById("score3").value)
    let area = document.getElementById("area").value
    let object = document.getElementById("object").value
    let priorScore = 0
    if (mapArea[area] !== undefined){
        priorScore += mapArea[area]
    }
    if (mapObject[object] !== undefined){
        priorScore += mapObject[object]
    }
    let sumScore = score1 + score2 + score3 + priorScore
    let result = ""
    if ((sumScore >= standardScore) && (score1 > 0) && (score2 > 0) && (score3 > 0)){
        result = `Đã trúng tuyển với số điểm ${sumScore}`
    }else{
        result = `Đã rớt với số điểm ${sumScore}`
    }
    
    document.getElementById("resultEnrollStatus").innerHTML = `
    <p class="text-primary">${result}</p>
    `
}

// Bai 2

function calElectricCost(kwNumber){
    let kw = kwNumber
    let cost = 0

    if (kw <= 50){
        cost += kw * 500
        return cost
    }

    cost += 50 * 500
    kw -= 50
    if (kw <= 50){
        cost += kw * 650
        return cost
    }

    cost += 50 * 650
    kw -= 50
    if (kw <= 100){
        cost += kw * 850
        return cost
    }

    cost += 100 * 850
    kw -= 100
    if (kw <= 150){
        cost += kw * 1100
        return cost
    }

    cost += 150 * 1100
    kw -= 150

    if (kw > 0){
        cost += kw * 1300
    }
    return cost
}

function getElectricBill(){
    let fullName = document.getElementById("fullName").value
    let kwNumber = parseFloat(document.getElementById("kwNumber").value)

    let cost = calElectricCost(kwNumber)
    document.getElementById("resultElectricBill").innerHTML = `
    <p class="text-primary">Tên: ${fullName}. Số tiền: ${new Intl.NumberFormat('en-US').format(cost)} VND</p>
    `
}

// Bai 3
function getTax(){
    let fullName = document.getElementById("taxFullName").value
    let annualIncome = parseFloat(document.getElementById("annualIncome").value)
    let depedenceNumber = parseInt(document.getElementById("depedenceNumber").value)


    let taxingIncome = annualIncome - 4000000 - depedenceNumber * 1600000
    
    if (taxingIncome < 0){
        document.getElementById("resultTax").innerHTML = `
        <p class="text-primary">Số tiền nhập không đúng. Vui lòng nhập lại.</p>
        `
        return
    }

    let taxPercent = 0
    if (taxingIncome < 60000000){
        taxPercent = 0.05
    }else if (taxingIncome < 120000000){
        taxPercent = 0.1
    }else if (taxingIncome < 210000000){
        taxPercent = 0.15
    }else if (taxingIncome < 384000000){
        taxPercent = 0.2
    }else if (taxingIncome < 624000000){
        taxPercent = 0.25
    }else if (taxingIncome < 960000000){
        taxPercent = 0.3
    }else{
        taxPercent = 0.3
    }
    let taxed = taxPercent * taxingIncome
    document.getElementById("resultTax").innerHTML = `
        <p class="text-primary">Tên: ${fullName}. Thuế thu nhập cá nhân: ${new Intl.NumberFormat('en-US').format(taxed)} VND</p>
        `
}

// Bai 4
function getCableCost(){
    console.log('get cable')
    let customerType = document.getElementById("customerType").value
    let customerId = document.getElementById("customerId").value
    let channelNumber = parseInt(document.getElementById("channelNumber").value)
    let connectionNumber = 0
    let cost = 0
    // Nha dan
    if (customerType == "A"){
        cost = 4.5 + 20.5 + 7.5 * channelNumber
    }else{
        connectionNumber = parseInt(document.getElementById("connectionNumber").value)
        cost = 15
        if (connectionNumber <= 10){
            cost += 75
        }else{
            cost += 75 + (connectionNumber - 10)*5
        }
        cost += 50 * connectionNumber
    }

    document.getElementById("resultCableBill").innerHTML = `
        <p class="text-primary">Mã khách hàng: ${customerId}. Tiền cáp: ${new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(cost)}</p>
        `

    }