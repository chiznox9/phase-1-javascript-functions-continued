// code your solution here
// 1️⃣ Defines saturdayFun function declaration
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// 2️⃣ Defines mondayWork function expression
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

// 3️⃣ Defines wrapAdjective function
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}
