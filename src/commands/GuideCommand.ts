import { Collection, CommandInteraction } from 'discord.js';
import { Bot } from '../client/Client';
import Command from '../interfaces/Command';

const command: Command = {
	config: {
		name: 'guide',
		description: 'Replies with your input!',
		options: [
			{
				name: 'guide',
				type: 'STRING',
				description: 'guide',
				required: true,
				choices: [
					{
						name: 'Resource Pack Link',
						value: 'pack',
					},
					{
						name: 'Resource Pack Troubleshooting',
						value: 'packfaq',
					},
					{
						name: 'Guide for Getting Started with the plugin',
						value: 'starting',
					},
					{
						name: 'Permissions Guide',
						value: 'perms',
					},
					{
						name: 'Server Config Guide',
						value: 'config',
					},
				],
			},
		],
		defaultPermission: true,
	},
	async execute(client: Bot, interaction: CommandInteraction) {
		const args: Collection<string, any> = new Collection();
		interaction.options.forEach((option) =>
			args.set(option.name, option.value)
		);
		switch (args.get('guide')) {
			case 'pack':
				sendEmbed(interaction, resourcePackEmbed);
				break;
			case 'packfaq':
				sendEmbed(interaction, resourcePackFAQEmbed);
				break;
			case 'starting':
				sendEmbed(interaction, guideEmbed);
				break;
			case 'perms':
				sendEmbed(interaction, permissionsEmbed);
				break;
			case 'config':
				sendEmbed(interaction, configEmded);
				break;
		}
	},
};

async function sendEmbed(
	interaction: CommandInteraction,
	embed: any
): Promise<void> {
	interaction.reply({ embeds: [embed] });
}

const configEmded = {
	description:
		'You can change several things when looking at the Craftory config file. For example changing the plugins language. Learn more here!\n\nhttps://craftory.studio/craftory-tech/wiki/server-config.html',
	color: 10579918,
	author: {
		name: 'Server Config',
		icon_url:
			'https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png',
	},
	thumbnail: {
		url: 'https://www.spigotmc.org/data/resource_icons/81/81151.jpg?1594072221',
	},
};

const permissionsEmbed = {
	description:
		'Here is a list of all current permissions that craftory has to offer. \n\nhttps://craftory.studio/craftory-tech/wiki/permissions.html',
	color: 8156547,
	author: {
		name: 'Permissions',
		icon_url:
			'https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png',
	},
	thumbnail: {
		url: 'https://www.spigotmc.org/data/resource_icons/81/81151.jpg?1594072221',
	},
};

const resourcePackEmbed = {
	description:
		'If you are going to use Craftory Tech with another resource pack on your server. You will need to merge the two resource packs. Download the Craftory resource pack and learn more here.\n\nhttps://github.com/CraftoryStudios/Craftory-TechResources',
	color: 3077393,
	author: {
		name: 'Craftory-Tech:  Resource Pack',
		icon_url:
			'https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png',
	},
	thumbnail: {
		url: 'https://www.spigotmc.org/data/resource_icons/81/81151.jpg?1594072221',
	},
};

const resourcePackFAQEmbed = {
	description:
		'Having trouble getting the Craftory Tech resource pack working, follow these troubleshooting steps! \n\nhttps://craftory.studio/craftory-tech/wiki/resource-pack-problems.html',
	color: 3077393,
	author: {
		name: 'Craftory-Tech:  Resource Pack Troubleshooting',
		icon_url:
			'https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png',
	},
	thumbnail: {
		url: 'https://www.spigotmc.org/data/resource_icons/81/81151.jpg?1594072221',
	},
};

const guideEmbed = {
	description:
		'Need help getting started or just needing to look catch up on the plugin. Here is the official Craftory guide.\n\nhttps://craftory.studio/craftory-tech/wiki/getting-started.html',
	color: 12314511,
	author: {
		name: 'Getting Started',
		icon_url:
			'https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png',
	},
	thumbnail: {
		url: 'https://www.spigotmc.org/data/resource_icons/81/81151.jpg?1594072221',
	},
};

module.exports = command;
