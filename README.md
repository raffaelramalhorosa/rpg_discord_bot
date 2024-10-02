# 🛡️ Crônicas de Camelot RPG Bot

[![Node.js](https://img.shields.io/badge/Node.js-16.6+-green)](https://nodejs.org/)
[![Discord.js](https://img.shields.io/badge/Discord.js-v14-blue)](https://discord.js.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Crônicas de Camelot** é um bot de RPG criado para jogar em servidores do Discord. Ele permite a criação de personagens, consulta de perfis, gestão de inventário e muito mais em um universo inspirado nas lendas arturianas. ✨⚔️

## 📜 Funcionalidades
- **Perfis de Personagens**: Cada usuário pode criar e visualizar seu personagem, incluindo atributos, classe e habilidades especiais.
- **Inventário**: Gerenciamento de inventário, habilidades e itens mágicos.
- **Atributos Dinâmicos**: Os jogadores têm atributos como vida, mana, força, agilidade, e outros.
- **Sistema de Alinhamento**: Crie personagens baseados em alinhamentos clássicos de RPG, como "Caótico Bom" e "Neutro".
- **Interações com Outros Jogadores**: Visualize o perfil de outros jogadores mencionando-os no comando.

## 🚀 Instalação e Configuração

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 16.6+)
- [Discord.js v14](https://discord.js.org/#/)
- Uma chave de bot do [Discord Developer Portal](https://discord.com/developers/applications)

### Passo a Passo

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```

2. Navegue até a pasta do projeto:
    ```bash
    cd nome-do-repositorio
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias:
    ```
    DISCORD_TOKEN=seu-token-do-bot
    DATABASE_URL=seu-url-do-banco-de-dados
    ```

5. Execute o bot:
    ```bash
    node index.js
    ```

## ⚔️ Comandos Disponíveis

### `/perfil`
Exibe o perfil do personagem do jogador. Você pode visualizar o seu próprio perfil ou o de outro usuário ao mencioná-lo.

```bash
/perfil
/perfil @usuario
