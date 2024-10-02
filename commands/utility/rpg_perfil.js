const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const dbconnection = require('../../utils/connection');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('perfil')
        .setDescription('Exibe o perfil do seu personagem no RPG "Crônicas de Camelot".')
        .addUserOption(option => 
            option.setName('jogador')
                .setDescription('O jogador cujo perfil você quer ver')
                .setRequired(false) // A menção do jogador é opcional
        ),

    async execute(interaction) {
         // Pega o usuário mencionado, ou usa o próprio usuário que executou o comando
         const targetUser = interaction.options.getUser('jogador') || interaction.user;
         const userId = targetUser.id;
         const userMention = `<@${userId}>`;

        try {
            const query = `SELECT * FROM players WHERE user_id = ?`;
            console.log("Executando... " + query + " com user_id: " + userId);
            
            // Executa a query e pega o primeiro item da resposta, que contém os dados da consulta
            const [rows] = await dbconnection.execute(query, [userId]);
        
            // Verificação
            if (rows.length > 0) {
                const playerProfile = rows[0]; // Primeiro resultado da consulta (perfil do jogador)
                console.log("Usuário encontrado: ", playerProfile.user_id);

                // Formata o inventário para ser exibido como uma lista
                const inventario = JSON.parse(playerProfile.inventario).length > 0 
                    ? JSON.parse(playerProfile.inventario).join(', ') 
                    : 'Nenhum item no inventário';

                // Emojis
                const heartIcon = '❤️';        // Vida
                const manaIcon = '💧';         // Mana
                const inventoryIcon = '🎒';    // Inventário
                const abilitiesIcon = '⚔️';    // Habilidades
                const raceIcon = '🧬';         // Raça
                const alignmentIcon = '⚖️';    // Alinhamento
                const strengthIcon = '💪';     // Força
                const agilityIcon = '🏃';      // Agilidade
                const durabilityIcon = '🛡️';  // Durabilidade
                const luckIcon = '🍀';         // Sorte
                const noblePhantasmIcon = '👻'; // Fantasma Nobre

                // Cria o embed com a imagem e as informações do perfil
                const embed = new EmbedBuilder()
                .setColor(0x00AE86) // Cor que pode variar com base em atributos
                .setTitle(`Perfil de ${playerProfile.nome}`)
                .setDescription(`Veja o perfil do personagem de ${userMention}`)
                .setImage(playerProfile.imagem) // Imagem principal
                .setThumbnail(playerProfile.classe_image) // Thumbnail da classe
                .addFields(
                    { name: 'Atributos Básicos', value: '\u200B', inline: false }, // Seção de Atributos
                    { name: `${raceIcon} Raça`, value: `${playerProfile.raca}`, inline: true },
                    { name: `${alignmentIcon} Alinhamento`, value: `${playerProfile.alinhamento}`, inline: true },
                    { name: `${heartIcon} Vida`, value: `${playerProfile.vida.toString()}/${playerProfile.vida_atual.toString()}`, inline: true },
                    { name: `${manaIcon} Mana`, value: `${playerProfile.mana}`, inline: true },
                    
                    { name: 'Atributos de Combate', value: '\u200B', inline: false }, // Seção de Combate
                    { name: `${strengthIcon} Força`, value: `${playerProfile.forca}`, inline: true },
                    { name: `${agilityIcon} Agilidade`, value: `${playerProfile.agilidade}`, inline: true },
                    { name: `${durabilityIcon} Durabilidade`, value: `${playerProfile.durabilidade}`, inline: true },
                    { name: `${luckIcon} Sorte`, value: `${playerProfile.sorte}`, inline: true },
                    { name: `${noblePhantasmIcon} Fantasma Nobre`, value: `Rank ${playerProfile.fantasma_nobre} [Animação](${playerProfile.fantasma_nobre_link})`, inline: false },
                    
                    { name: 'Equipamento e Habilidades', value: '\u200B', inline: false }, // Equipamentos
                    { name: `${inventoryIcon} Inventário`, value: `${inventario}`, inline: false },
                    { name: `${abilitiesIcon} Habilidades`, value: `${JSON.parse(playerProfile.habilidades).join(', ')}`, inline: false }
                )
                .setFooter({ text: 'RPG Crônicas de Camelot', iconURL: 'https://r3d3s.com.br/assets/brainwave-symbol-BpglIlwE.svg' });

                // Envia o embed no chat
                await interaction.reply({ embeds: [embed] });

            } else {
                // Se o array estiver vazio, significa que o user_id não foi encontrado no banco de dados
                console.log("Usuário não encontrado");
                await interaction.reply('Você ainda não tem um perfil de personagem criado.');
            }
        } catch (error) {
            console.error(error); // Exibe o erro para debug
            await interaction.reply('Ocorreu um erro ao buscar o perfil do personagem.');
        }
    },
};
