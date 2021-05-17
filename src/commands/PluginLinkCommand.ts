import { CommandInteraction } from "discord.js";
import { Bot } from "../client/Client";
import Command from "../interfaces/Command";

const command: Command = {
    config: {
        name: 'plugin',
        description: 'Provides a link to Craftory Tech Spigot page',
        options: [],
          defaultPermission: true
        
    },
    async execute(client: Bot, interaction: CommandInteraction) {
        interaction.reply(`Wiki: https://craftory.studio/craftory-tech/ \n Spigot: https://www.spigotmc.org/resources/craftory-tech.81151/ \n Github: Closed Source`);
    }
};

module.exports = command;