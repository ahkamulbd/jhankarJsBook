/** Examples */

if(3 < 10){
    // console.log('I can not bite as I am small');
}

/** Problem 1 from Page # 77 */

const reachHomeBefore6 = false;

if(reachHomeBefore6){
    // console.log('Snacks will be given');
}
else{
    // console.log('You will be swiped');
}

/** Problem 2 from Page # 77 */

const logInMobileApp = true;

if(logInMobileApp){
    // console.log('Welcome');
}
else{
    // console.log('Get Lost!');
}

/** Problem 3 from Page # 77 */

const run5Mm = true;

if(run5Mm){
    // console.log('Awarded Chokolet');
}
else{
    // console.log('You will be fatty!');
}


/** Problem 4 from Page # 77 */

const myExamNumber = 85;

if(myExamNumber > 80){
    // console.log('Awarded Motor Cycle');
}
else{
    // console.log('No Motor Cycle');
}

/** Problem 5 from Page # 77 */

const movieFinishingTimeAt9 = false;

if(movieFinishingTimeAt9){
    // console.log('See Movie');
}
else{
    // console.log('Sleep with oil');
}

/** Problem 6 from Page # 77 */

const presentTemperature = 30;

if(presentTemperature >= 30){
    // console.log('AC run');
}
else{
    // console.log('Sleep with blanket');
}

/** ====================================================================
 * =====================================================================
 */

/** Problem 1 from Page # 80 */

const age = 19;
const height = 55;

if (age > 18 && height > 60){
    // console.log('He will push the car');
}
else{
    // console.log('He will sit in the car');
}


/** Problem 2 from Page # 80 */

const mathScore = 55;
const englishScore = 79;

if (mathScore > 80 || englishScore > 85){
    // console.log('Elisible for admission');
}
else{
    // console.log('Get lost');
}

/** Problem 3 from Page # 80 */

const studentGPA = 5;
const familyIncome = 8000;

if (studentGPA === 5 && familyIncome < 10000){
    // console.log('Free Scholarship');
}
else{
    // console.log('Have to pay');
}

/** Problem 4 from Page # 80 */

const candidateAge = 31;
const candidateExperience = 3;

if (candidateAge < 30 && candidateExperience > 2){
    // console.log('Chosen to bid');
}
else{
    // console.log('Can not bid for the job');
}


/** Problem 5 from Page # 80 */

const eggNumber = 11;
const isChiken = false;

if (eggNumber > 12 || isChiken === false ){
    // console.log('Egg Korma');
}
else{
    // console.log('Breed and Banana');
}


/** Problem 6 from Page # 80 */

const humanTemparature = 99;
const isCough = true;

if (humanTemparature > 100 || isCough ){
    // console.log('Go to Doctor');
}
else{
    // console.log('Sleep with the blanket');
}

/** Problem 7 from Page # 80 */

const studentPrecence = 77;
const isHomework = true;

if (studentPrecence > 80 && isHomework ){
    // console.log('Go to Exam');
}
else{
    // console.log('Auto Fail');
}

/** Problem 8 from Page # 80 */

const isElectricity = true;
const isMobileCharge = true;

if ( isElectricity === false && isMobileCharge === false ){
    // console.logstudentPrecence('Go to study');
}
else{
    // console.log('Video Game');
}
/** Problem 9 from Page # 80 */

const shirtPrice = 1200;
const isCoupon = true;

if ( shirtPrice > 1000 && isCoupon ){
    // console.log('20% discount');
}
else{
    // console.log('No discount');
}

/** ====================================================================
 * =====================================================================
 */

/** Example */

const price = 4500;

if(price > 5000){
    const discount = price * (10 / 100);
    // const pay = price - discount;
    console.log(pay)
}
else{
    // console.log(price);
}

/** Problem 1 from Page 83 */

const goodsPrice = 2000;

if (goodsPrice >= 6000){
    const discount = price * (15 / 100);
    const pay = goodsPrice - discount;
    // console.log(pay);
}
else if (goodsPrice < 6000 && goodsPrice >= 3000){
    const discount = price * (5 / 100);
    const pay = goodsPrice - discount;
    // console.log(pay);
}
else{
    // console.log(goodsPrice);
}

/** Problem 2 from Page 84 */

const customerAge = 10;

if(customerAge < 12){
    // console.log('Food price free');
}
else if(customerAge > 60){
    // console.log('50% discount');
}
else{
    // console.log('Full payment');
}

/** Problem 3 from Page 84 */

let bankBalance = 5990;

if(bankBalance < 1000){
    // console.log('Deposit amount');
}
else if( bankBalance >= 1000 && bankBalance <= 5000){
    // console.log('Bindus Life');
}
else{
    // console.log('You rich people');
}


/** Problem 4 from Page 84 */

const examMark = 108;

if (examMark < 50 && examMark >= 0){
    // console.log('Fail');
}
else if(examMark >= 50 && examMark < 80){
    // console.log('Pass');
}
else if(examMark >= 80 && examMark <= 100){
    // console.log('A+');
}
else{
    // console.log('Invalid Marks');
}


/** Problem 5 from Page 84 */

const bookPage = 102;

if(bookPage < 100){
    // console.log('Small book');
}
else if(bookPage >= 100 && bookPage <= 500){
    // console.log('Mid-size book');
}
else if(bookPage > 500){
    // console.log('Heart-attack size book');
}
else{
    // console.log('Invalid book page number');
}
/** Problem 6 from Page 84 */

const weatherTemp = 21;

if (weatherTemp < 0){
    // console.log('Ice');
}
else if(weatherTemp >= 0 && weatherTemp <= 20){
    // console.log('Cool Cool');
}
else{
    // console.log('Hot Hot');
}

/** Problem 7 from Page 84 */

const gameLevel = 113;

if (gameLevel > 0 && gameLevel < 10){
    // console.log('Novice');
}
else if (gameLevel >= 10 && gameLevel <= 50){
    // console.log('Expert');
}
else{
    // console.log('Pro Gamer');
}

/** =============================================================================
 *  =============================================================================
 */

/** Problem 1 from Page # 86 */

// const isInvited = true;
const isInvited = false;
const pocketMoney = 900;

if (isInvited){
    // console.log('Go to Birthday Party');
    if (pocketMoney >= 1000){
        // console.log('Purchasing gift for friend');
    }
    else{
        // console.log('Empty hand');
    }
}
else{
    // console.log('Cut from Friend List');
}


/** Problem 2 from Page # 86 */

// const isTea = true;
const isTea = false;
// const isBiscuit = true;
const isBiscuit = false;

if (isTea){
    if (isBiscuit){
        // console.log('Tea with Biscuit');
    }
    else{
        // console.log('Only tea is ready')
    }
}
else{
    // console.log('Watch Star Jalsa');
}


/** Problem 3 from Page # 86 */

const isAccountActive = false;
const isSubscription = true;

if (isAccountActive){
    if (isSubscription){
        // console.log('Welcome in the Premier Feature');
    }
}
else{
    // console.log('See the free version');
}

/** Problem 4 from Page # 86 */

const isFoodInFreeze = false;
const isFoodDeliveryApp = false;

if (isFoodInFreeze){
    // console.log('Hot tasty food');
}
else{
    if (isFoodDeliveryApp){
        // console.log('Order delicous food');
    }
    else{
        // console.log('Today I am king');
    }
}

/** Problem 5 from Page # 86 */

const isPartyGuestIs100 = true;
const isGuestGift = false;

if (isPartyGuestIs100){
    if (isGuestGift){
        console.log('Lets party all night');
    }
    else {
        console.log('I will party with myself');
    }
}