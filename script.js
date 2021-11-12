
const workJson = `
    {
        "daily": {
            "current": 5,
            "previous": 7
        },
        "weekly": {
            "current": 32,
            "previous": 36
        },
        "monthly": {
            "current": 103,
            "previous": 128
        }
    }
`;
const playJson = `
    {
        "daily": {
            "current": 1,
            "previous": 2
        },
        "weekly": {
            "current": 10,
            "previous": 8
        },
        "monthly": {
            "current": 23,
            "previous": 29
        }
    }
`;
const studyJson = `
    {
        "daily": {
            "current": 0,
            "previous": 1
        },
        "weekly": {
            "current": 4,
            "previous": 7
        },
        "monthly": {
            "current": 13,
            "previous": 19
        }
    }
`;
const exerciseJson = `
    {
        "daily": {
            "current": 1,
            "previous": 1
        },
        "weekly": {
            "current": 4,
            "previous": 5
        },
        "monthly": {
            "current": 11,
            "previous": 18
        }
    }
`;
const socialJson = `
    {
        "daily": {
            "current": 1,
            "previous": 3
        },
        "weekly": {
            "current": 5,
            "previous": 10
        },
        "monthly": {
            "current": 21,
            "previous": 23
        }
    }
`;
const selfJson = `
    {
        "daily": {
            "current": 0,
            "previous": 1
        },
        "weekly": {
            "current": 2,
            "previous": 2
        },
        "monthly": {
            "current": 7,
            "previous": 11
        }
    }
`;
const wJ = JSON.parse(workJson);
const playJ = JSON.parse(playJson);
const studyJ = JSON.parse(studyJson);
const exerJ = JSON.parse(exerciseJson);
const socJ = JSON.parse(socialJson);
const selfJ = JSON.parse(selfJson);
function dailyFunction()
{
    document.getElementById("Daily").style.color = "white";
    if(document.getElementById("Daily").style.color == "white"){
        document.getElementById("Weekly").style.color = "#bdc1ff85";
        document.getElementById("Monthly").style.color = "#bdc1ff85";
    }
    document.getElementById("work_time").innerHTML = wJ.daily.current;
    document.getElementById("play_time").innerHTML = playJ.daily.current;
    document.getElementById("study_time").innerHTML = studyJ.daily.current;
    document.getElementById("exercise_time").innerHTML = exerJ.daily.current;
    document.getElementById("social_time").innerHTML = socJ.daily.current;
    document.getElementById("self_time").innerHTML = selfJ.daily.current;

    document.getElementById("work_btm").innerHTML = wJ.daily.previous;
    document.getElementById("play_btm").innerHTML = playJ.daily.previous;
    document.getElementById("std_btm").innerHTML = studyJ.daily.previous;
    document.getElementById("exer_btm").innerHTML = exerJ.daily.previous;
    document.getElementById("soc_btm").innerHTML = socJ.daily.previous;
    document.getElementById("self_btm").innerHTML = selfJ.daily.previous;
}
function weeklyFunction()
{
    document.getElementById("Weekly").style.color = "white";
    if(document.getElementById("Weekly").style.color == "white"){
        document.getElementById("Daily").style.color = "#bdc1ff85";
        document.getElementById("Monthly").style.color = "#bdc1ff85";
    }
    document.getElementById("work_time").innerHTML = wJ.weekly.current;
    document.getElementById("play_time").innerHTML = playJ.weekly.current;
    document.getElementById("study_time").innerHTML = studyJ.weekly.current;
    document.getElementById("exercise_time").innerHTML = exerJ.weekly.current;
    document.getElementById("social_time").innerHTML = socJ.weekly.current;
    document.getElementById("self_time").innerHTML = selfJ.weekly.current;
}
function monthlyFunction()
{
    document.getElementById("Monthly").style.color = "white";
    if(document.getElementById("Monthly").style.color == "white"){
        document.getElementById("Weekly").style.color = "#bdc1ff85";
        document.getElementById("Daily").style.color = "#bdc1ff85";
    }
    document.getElementById("work_time").innerHTML = wJ.monthly.current;
    document.getElementById("play_time").innerHTML = playJ.monthly.current;
    document.getElementById("study_time").innerHTML = studyJ.monthly.current;
    document.getElementById("exercise_time").innerHTML = exerJ.monthly.current;
    document.getElementById("social_time").innerHTML = socJ.monthly.current;
    document.getElementById("self_time").innerHTML = selfJ.monthly.current;
}
