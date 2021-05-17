import { Collection, CommandInteraction } from "discord.js";
import { Bot } from "../client/Client";
import Command from "../interfaces/Command";

const command: Command = {
    config: {
        name: 'machine',
        description: 'Provides details on a Craftory-Tech Machine',
        options: [{
            name: 'machine',
            type: 'STRING',
            description: 'Craftory Tech Machine',
            required: true,
            choices: [
                {
                    name: 'Block Breaker',
                    value: 'block-breaker',
                },
                {
                    name: 'Block Placer',
                    value: 'block-placer',
                },
                {
                    name: 'Electric Furnace',
                    value: 'electric-furnace',
                },
                {
                    name: 'Energy Cell',
                    value: 'energy-cell',
                },
                {
                    name: 'Magnatisation table',
                    value: 'magnatisation-table',
                },
                {
                    name: 'Foundry',
                    value: 'foundry',
                },
                {
                    name: 'Macerator',
                    value: 'macerator',
                },
                {
                    name: 'Magnatiser',
                    value: 'magnatiser',
                },
                {
                    name: 'Sonar Panel',
                    value: 'solar-panel',
                },
                {
                    name: 'Solid Fuel Generator',
                    value: 'generator',
                }
            ],
          }],
          defaultPermission: true
        
    },
    async execute(client: Bot, interaction: CommandInteraction) {
        const args: Collection<string, any> = new Collection;
        interaction.options.forEach((option) => args.set(option.name, option.value));
        switch(args.get('machine')) {
            case 'block-breaker': 
                sendEmbed(interaction, breakerEmbed);
                break;
            case 'block-placer' :
                sendEmbed(interaction, placerEmbed);
                break;
            case 'electric-furnace' :
                sendEmbed(interaction, furnaceEmbed);
                break;
            case 'energy-cell' :
                sendEmbed(interaction, cellEmbed);
                break;
            case 'foundry' :
                sendEmbed(interaction, foundryEmbed);
                break;
            case 'macerator' :
                sendEmbed(interaction, maceratorEmbed);
                break;
            case 'magnatisation-table' :
                sendEmbed(interaction, magTableEmbed);
                break;
            case 'magnatiser' :
                sendEmbed(interaction, magnatiserEmbed);
                break;
            case 'solar-panel' :
                sendEmbed(interaction, solarEmbed);
                break;
            case 'generator' :
                sendEmbed(interaction, generatorEmbed);
                break;

        }
    }
};

async function sendEmbed(interaction: CommandInteraction, embed: any): Promise<void> {
    interaction.reply({embeds: [embed]});
  }

const generatorEmbed  = {
    "description": "The Solid Fuel Generator burns fuel like a furnace to generate energy, this can be used to power machines, stored in cells, or distributed across a Power Grid. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/solid-fuel-generator.html",
    "color": 4510943,
    "author": {
        "name": "Solid Fuel Generator",
        "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
    },
    "thumbnail": {
        "url": "https://craftory.studio/assets/craftory-tech/renders/Solid%20Fuel%20Generator.png"
    }
};

const solarEmbed  = {
    "description": "Solar Panels produce energy from sunlight. To work they need the sun to be up and have direct line of sight to the sky. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/solar-panel.htmls",
    "color": 1466470,
    "author": {
        "name": "Solar Panel",
        "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
    },
    "thumbnail": {
        "url": "https://craftory.studio/assets/craftory-tech/renders/Solar%20Panel.png"
    }
};

const magnatiserEmbed = {
    "description": "One of the core crafting components is Magnetised Iron, a magnatiser can be used to produce it. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/magnatiser.html",
    "color": 14787310,
    "author": {
        "name": "Magnatiser",
        "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
    },
    "thumbnail": {
        "url": "https://craftory.studio/assets/craftory-tech/renders/Magnatiser.png"
    }
};

const magTableEmbed = {
    "description": "The Magnetising Table is a manual version that requires no Energy. A Engineers Hammer is used to hit it and progress the crafting. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/magnatisation-table.html",
    "color": 5004670,
    "author": {
        "name": "Magnatisation Table",
        "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
    },
    "thumbnail": {
        "url": "https://craftory.studio/assets/craftory-tech/renders/Magnatisation%20Table.png"
    }
};

const maceratorEmbed = {
    "description": "Macerators are used to double ores and create dust! Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/macerator.html",
    "color": 13278699,
    "author": {
        "name": "Macerator",
        "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
    },
    "thumbnail": {
        "url": "https://craftory.studio/assets/craftory-tech/renders/Macerator.png"
    }
};

const foundryEmbed = {
    "description": "Foundries are used to combine two materials together. Currently their only use is the production of steel from Iron Ingots and Charcoal or Coal Dust. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/foundry.html",
    "color": 4845196,
    "author": {
        "name": "Foundry",
        "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
    },
    "thumbnail": {
        "url": "https://craftory.studio/assets/craftory-tech/renders/Foundry.png"
    }
};

const cellEmbed = {
    "description": "Energy Cells are a core part of progression, as you begin to generate energy, you’ll want to store it so you can use it later, or to act as a buffer. This can allow you to build up a surplus of energy to use when you need to smelt on mass or any of action that required energy. They can also Charge up tools!! Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/energy-cell.html",
    "color": 4845196,
    "author": {
        "name": "Energy Cell",
        "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
    },
    "thumbnail": {
        "url": "https://craftory.studio/assets/craftory-tech/renders/Energy%20Cell.png"
    }
};

const breakerEmbed = {
    "description": "Block Breakers, as the name suggested can be used to automatically break blocks. Great for automation and many other things. When placed they can be trigger by pulsing a redstone signal, as long as there is a valid block in front and they have enough power, they will break it and return the result. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/block-breaker.html",
    "color": 10197915,
    "author": {
        "name": "Block Breaker",
        "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
    },
    "thumbnail": {
        "url": "https://craftory.studio/assets/craftory-tech/renders/Block%20Breaker.png"
    }
};

const placerEmbed = {
    "description": "Block Placers are capable of placing blocks in their inventory in front of them. To do this they require energy, a place able block in their inventory and AIR in front of them. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/block-placer.html",
    "color": 6703525,
    "author": {
      "name": "Block Placer",
      "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
    },
    "thumbnail": {
      "url": "https://craftory.studio/assets/craftory-tech/renders/Block%20Placer.png"
    }
};

const furnaceEmbed = {
    "description": "Electric Furnaces perform all functions of a normal Minecraft furnace, but require power rather than fuel. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/electric-furnace.html",
    "color": 6703525,
    "author": {
        "name": "Electric Furnace",
        "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
    },
    "thumbnail": {
        "url": "https://craftory.studio/assets/craftory-tech/renders/Electric%20Furnace.png"
    }
};

module.exports = command;