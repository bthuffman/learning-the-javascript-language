switch (answer) {
	case "Yes":
		console.log("You said YES!");
		break;
//		... Note if exclude breaks then it will continue to execute (cascade). If statements can't do this easily.
}

//Ex cascade. will return "you said yes" and "you said maybe"
switch (answer) {
	case "YES":
		console.log("You said YES!");
	case "MAYBE":
		console.log("You said maybe. I don't know what to make of that.");
		break;
	case "NO":
		console.log("You said no. :(");
		break;
	default:
		console.log("You rebel, you!");
		break;
}
