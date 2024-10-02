const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Gera um número aleatório entre 1 e o número escolhido.')
		.addIntegerOption(option => 
			option.setName('x')
			.setDescription('Escolha um número máximo para o sorteio.')
			.setRequired(true)),
	async execute(interaction) {
        const maxNumber = interaction.options.getInteger('x');
        const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        const userMention = `<@${interaction.user.id}>`; 

        await interaction.reply(`${userMention} tirou ${randomNumber}`);
	},
};
