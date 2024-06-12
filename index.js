import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
let time = await inquirer.prompt({
    name: "UserInput",
    type: "number",
    message: "Start CountDown",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please Enter vaild Number";
        }
        else {
            return true;
        }
    }
});
let input = time.UserInput;
function starttime(val) {
    const intime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intime);
    setInterval((() => {
        const currtime = new Date();
        const timediff = differenceInSeconds(intervalTime, currtime);
        if (timediff <= 0) {
            console.log("Time ' out");
            process.exit();
        }
        const min = Math.floor((timediff % (3600 * 24)) / 3600);
        const sec = Math.floor(timediff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }), 900);
}
starttime(input);
