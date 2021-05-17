import { Collection, CommandInteraction } from "discord.js";
import { Bot } from "../client/Client";
import Command from "../interfaces/Command";

const command: Command = {
    config: {
        name: 'ore',
        description: 'Provides details on a Craftory-Tech Ore',
        options: [{
            name: 'ore',
            type: 'STRING',
            description: 'Craftory Tech Ore',
            required: true,
            choices: [
                {
                    name: 'Copper Ore',
                    value: 'copper',
                }
            ],
          }],
          defaultPermission: true
        
    },
    async execute(client: Bot, interaction: CommandInteraction) {
        const args: Collection<string, any> = new Collection;
        interaction.options.forEach((option) => args.set(option.name, option.value));
        switch(args.get('ore')) {
            case 'copper': 
                sendEmbed(interaction, copperEmbed);
                break;
        
        }
    }
};

async function sendEmbed(interaction: CommandInteraction, embed: any): Promise<void> {
    interaction.reply({embeds: [embed]});
  }

const copperEmbed = {
    "description": "Copper Ore naturally generates around the world, it can be smelted into Copper Ingots or Macerated into Copper Dust. Learn more here. \n\n https://craftory.studio/craftory-tech/wiki/copper-ore.html",
    "color": 16098851,
    "author": {
        "name": "Copper Ore",
        "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
    },
    "thumbnail": {
        "url": "https://craftory.studio/assets/craftory-tech/renders/Copper%20Ore.png"
    }
};

module.exports = command;