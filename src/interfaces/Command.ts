import {Bot} from '../client/Client';
import {ApplicationCommandData, ApplicationCommand, CommandInteraction} from 'discord.js';

export default interface Command {
    execute(client: Bot, interaction: CommandInteraction): Promise<void>;
    config: ApplicationCommandData
    command?: ApplicationCommand
}