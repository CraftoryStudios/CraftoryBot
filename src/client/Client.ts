import {
	Client,
	Intents,
	Collection,
	MessageEmbed,
	Message,
	MessageEmbedOptions,
	ApplicationCommand,
	CommandInteraction,
	Interaction,
} from 'discord.js';
import glob from 'glob';
import { promisify } from 'util';
import consola, { Consola } from 'consola';
import Command from '../interfaces/Command';

const globPromise = promisify(glob);
const intents = new Intents();
intents.add(
	'GUILDS',
	'GUILD_MESSAGES',
	'GUILD_MESSAGE_REACTIONS',
	'DIRECT_MESSAGES',
	'DIRECT_MESSAGE_REACTIONS',
	'GUILD_INTEGRATIONS',
	'GUILD_WEBHOOKS'
);

class Bot extends Client {
	public logger: Consola = consola;
	public commands: Collection<string, Command> = new Collection();

	public constructor() {
		super({
			intents,
		});
	}

	public async start(token: any): Promise<void> {
		this.login(token);

		this.once('ready', async () => {
			//Register Command Files
			const commandFiles: string[] = await globPromise(
				`${__dirname}/../commands/**/*{.ts,.js}`
			);
			commandFiles.map(async (commandFile: string) => {
				const command: Command = await import(commandFile);
				const appCommand: ApplicationCommand = await this.guilds.cache
					.get('732153200551133206')
					?.commands.create(command.config);
				command.command = appCommand;

				this.commands.set(command.config.name, command);
				console.log(`Registered command ${command.config.name}`);
			});
		});

		this.on('interaction', async (interaction: Interaction) =>
			this.onInteraction(interaction)
		);
	}

	public async onInteraction(interaction: Interaction) {
		if (!interaction.isCommand()) return;

		if (this.commands.has(interaction.commandName)) {
			this.commands
				.get(interaction.commandName)
				.execute(this, interaction as CommandInteraction);
		}
	}

	public embed(options: MessageEmbedOptions, message: Message): MessageEmbed {
		return new MessageEmbed({ ...options, color: 'RANDOM' }).setFooter(
			`${message.author.tag}`
		);
	}
}

export { Bot };
