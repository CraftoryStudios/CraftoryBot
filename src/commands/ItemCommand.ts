import { Collection, CommandInteraction } from "discord.js";
import { Bot } from "../client/Client";
import Command from "../interfaces/Command";

const command: Command = {
    config: {
        name: 'item',
        description: 'Provides details on a Craftory-Tech Item',
        options: [{
            name: 'item',
            type: 'STRING',
            description: 'Craftory Tech Item',
            required: true,
            choices: [
                {
                    name: 'Configurator',
                    value: 'configurator',
                },
                {
                    name: 'Machine Cores',
                    value: 'cores',
                },
                {
                    name: 'Drill',
                    value: 'drill',
                },
                {
                    name: 'Engineers Hammer',
                    value: 'engineers-hammer',
                },
                {
                    name: 'Excavator',
                    value: 'excavator',
                },
                {
                    name: 'Power Hammer',
                    value: 'power-hammer',
                },
                {
                    name: 'Sickle',
                    value: 'sickle',
                },
                {
                    name: 'Wrench',
                    value: 'wrench',
                }
            ],
          }],
          defaultPermission: true
        
    },
    async execute(client: Bot, interaction: CommandInteraction) {
        const args: Collection<string, any> = new Collection;
        interaction.options.forEach((option) => args.set(option.name, option.value));
        switch(args.get('item')) {
            case 'configurator': 
                sendEmbed(interaction, configuratorEmbed);
                break;
            case 'cores' :
                sendEmbed(interaction, coresEmbed);
                break;
            case 'drill' :
                sendEmbed(interaction, drillEmbed);
                break;
            case 'engineers-hammer' :
                sendEmbed(interaction, engHammerEmbed);
                break;
            case 'excavator' :
                sendEmbed(interaction, excavatorEmbed);
                break;
            case 'power-hammer' :
                sendEmbed(interaction, powerHammerEmbed);
                break;
            case 'sickle' :
                sendEmbed(interaction, sickleEmbed);
                break;
            case 'wrench' :
                sendEmbed(interaction, wrenchEmbed);
                break;

        }
    }
};

async function sendEmbed(interaction: CommandInteraction, embed: any): Promise<void> {
    interaction.reply({embeds: [embed]});
  }

const wrenchEmbed = {
    "description": "A Wrench is a handy tool with multiple functions. It can be used to pick up Energy blocks with Energy inside, connect Power Grids and more. Learn more here. \n\n https://craftory.studio/craftory-tech/wiki/wrench.html",
    "color": 9442302,
    "author": {
        "name": "Wrench",
        "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
    },
    "thumbnail": {
        "url": "https://craftory.studio/assets/craftory-tech/renders/Wrench.png"
    }
};

const sickleEmbed = {
    "description": "A Sickle tool can be used to destory large areas of annoy Tall Grass, or harvest crops, plants and flowers. Learn more here. \n\n https://craftory.studio/craftory-tech/wiki/sickle.html",
    "color": 9131818,
    "author": {
        "name": "Sickle",
        "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
    },
    "thumbnail": {
        "url": "https://craftory.studio/assets/craftory-tech/renders/Sickle.png"
    }
};

const powerHammerEmbed = {
    "description": "A Power Hammer is a powered tool used to quickly break a 3x3 area of stone like blocks. Each Power Hammer is slower than their pick-axe equivalent as they break 9 blocks at once. They do not break as they use energy rather than durability. Learn more here. \n\n https://craftory.studio/craftory-tech/wiki/power-hammer.html",
    "color": 12390624,
    "author": {
        "name": "Power Hammer",
        "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
    },
    "thumbnail": {
        "url": "https://craftory.studio/assets/craftory-tech/renders/Power%20Hammer.png"
    }
};

const excavatorEmbed = {
    "description": "A Excavator is a powered tool used to quickly break a 3x3 area of soft blocks. The excavator is slower than a shovel but breaks up to 9 blocks at once. Learn more here. \n\n https://craftory.studio/craftory-tech/wiki/excavator.html",
    "color": 12118406,
    "author": {
        "name": "Excavator",
        "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
    },
    "thumbnail": {
        "url": "https://craftory.studio/assets/craftory-tech/renders/Excavator.png"
    }
};

const engHammerEmbed = {
    "description": "A Engineers Hammer currently has one use, making Magnetised Iron. Craft it and hit a magnetisation table with iron on to forge magnetised iron! Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/engineers-hammer.html",
    "color": 9079434,
    "author": {
        "name": "Engineers Hammer",
        "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
    },
    "thumbnail": {
        "url": "https://craftory.studio/assets/craftory-tech/renders/Engineers%20Hammer.png"
    }
};

const drillEmbed = {
    "description": "A drill is a powered tool used to quickly break single blocks like a Pick-axe. Each drill is faster than their pick-axe equivalent and they do not break as they use energy rather than durability. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/drill.html",
    "color": 58367,
    "author": {
        "name": "Drill",
        "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
    },
    "thumbnail": {
        "url": "https://craftory.studio/assets/craftory-tech/renders/Drill.png"
    }
};

const coresEmbed = {
    "description": "Cores are a crafting component allowing you to upgrade machines to a higher level. This allows your machines to run faster and use less energy. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/cores.html",
    "color": 4456703,
    "author": {
        "name": "Cores",
        "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
    },
    "thumbnail": {
        "url": "https://craftory.studio/assets/craftory-tech/renders/Cores.png"
    }
};

const configuratorEmbed = {
    "description": "The configurator has one function and that’s to copy the output side configs from one machine to the other, allowing mass placement of machines. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/configurator.html",
    "color": 16645948,
    "author": {
      "name": "Configurator",
      "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
    },
    "thumbnail": {
      "url": "https://craftory.studio/assets/craftory-tech/renders/Configurator.png"
    }
  };

module.exports = command;