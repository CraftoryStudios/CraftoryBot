import { CommandInteraction } from 'discord.js';
import { Bot } from '../client/Client';
import Command from '../interfaces/Command';

const command: Command = {
	config: {
		name: 'support',
		description: 'Provides a information on how to get help quicker',
		options: [],
		defaultPermission: true,
	},
	async execute(client: Bot, interaction: CommandInteraction) {
		interaction.reply(
			`Inorder for us to help you faster please give us the following information: \n - Upload a FULL server log to https://mclo.gs/. \n - Error Reporting ID (this shows up when you type /cr in game, a screenshot is fine) \n - What version of minecraft and craftory are you running.`
		);
	},
};

module.exports = command;
