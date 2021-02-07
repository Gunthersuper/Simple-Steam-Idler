const SteamUser = require('steam-user');

const user = new SteamUser();

const logOnOptions = {
	accountName: 'x02dz005traoppy',  //Enter here your account login
	password: 'MZRPIW4YD1NT116'		 //Enter your password
}

user.logOn(logOnOptions);

user.on('loggedOn', () => {
	console.log(logOnOptions.accountName + ' - Successfully logged on');
	user.setPersona(1);                 //1 - online, 7 - invisible
	user.gamesPlayed([440,730,570]);    //List app IDs
});