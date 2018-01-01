var myLogoutFunc = function(){
	Session.set('nav-toggle', '');
	FlowRouter.go('/');
}

AccountsTemplates.configure({
	sendVerificationEmail: true,
	onLogoutHook: myLogoutFunc
});


AccountsTemplates.addFields([
		{
			_id: 'firstName',
			type: 'text',
			displayName: 'First Name',
			required: true,
			placeholder: 'Enter your First Name',
			errStr: 'Please input First Name to continue!'
		},
		{
			_id:'profession',
			type: 'select',
			displayName: 'Profession',
			errStr: 'Please choose your profession!',
			required: true,
			select: [
			{
				text: "Developer",
				value: "developer"
			},
			{
				text: "Designer",
				value: "designer"
			},
			{
				text: "Admin",
				value: "admin"
			}
			
			]

		}

]);
