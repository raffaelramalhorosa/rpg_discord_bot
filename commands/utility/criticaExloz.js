const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('exloz')
		.setDescription('Eu vou criticar todas as atitudes questionáveis do exloz'),
	async execute(interaction) {
		// Caminho para o arquivo de texto
		const filePath = path.join(__dirname, 'criticaExloz.txt');

		// Ler o conteúdo do arquivo
		fs.readFile(filePath, 'utf8', (err, data) => {
			if (err) {
				console.error(err);
				return interaction.reply('Houve um erro ao ler o arquivo.');
			}

			// Enviar o conteúdo do arquivo como resposta
			interaction.reply(data);
		});
	},
};