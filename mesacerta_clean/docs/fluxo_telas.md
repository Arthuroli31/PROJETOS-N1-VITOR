# Fluxo de Telas do Aplicativo MESACERTA

## 1. Visão Geral do Fluxo de Usuário

O fluxo de telas do aplicativo MESACERTA foi projetado para proporcionar uma experiência intuitiva e eficiente, permitindo que os usuários encontrem e reservem restaurantes com o mínimo de etapas possível.

## 2. Detalhamento das Telas

### 2.1 Splash Screen
- **Objetivo**: Apresentar a marca enquanto o aplicativo carrega
- **Interações**: Nenhuma, transição automática após 2 segundos
- **Próximas telas**: Onboarding (primeiro acesso) ou Home/Login (acessos subsequentes)

### 2.2 Onboarding
- **Objetivo**: Apresentar as principais funcionalidades do aplicativo para novos usuários
- **Interações**: Deslizar para navegar entre as páginas, botão "Pular", botão "Próximo"
- **Próximas telas**: Login/Registro

### 2.3 Login
- **Objetivo**: Autenticar usuários existentes
- **Interações**: 
  - Campos de entrada: email e senha
  - Botão "Entrar"
  - Link "Esqueci minha senha"
  - Link "Criar conta"
  - Opções de login social (Google, Facebook)
- **Próximas telas**: Home (sucesso), Recuperação de Senha, Registro

### 2.4 Registro
- **Objetivo**: Criar nova conta de usuário
- **Interações**:
  - Campos de entrada: nome, email, telefone, senha, confirmação de senha
  - Checkbox para termos de uso
  - Botão "Registrar"
  - Link "Já tenho uma conta"
- **Próximas telas**: Home (sucesso), Login

### 2.5 Home
- **Objetivo**: Ponto central de navegação e descoberta de restaurantes
- **Interações**:
  - Barra de pesquisa
  - Carrossel de restaurantes em destaque
  - Categorias de cozinha
  - Restaurantes próximos
  - Menu inferior (Home, Busca, Reservas, Perfil)
- **Próximas telas**: Busca de Restaurantes, Detalhes do Restaurante, Minhas Reservas, Perfil

### 2.6 Busca de Restaurantes
- **Objetivo**: Permitir a busca e filtragem de restaurantes
- **Interações**:
  - Barra de pesquisa
  - Filtros (cozinha, preço, avaliação, distância)
  - Lista de resultados
  - Opções de ordenação
- **Próximas telas**: Detalhes do Restaurante

### 2.7 Detalhes do Restaurante
- **Objetivo**: Apresentar informações detalhadas sobre um restaurante específico
- **Interações**:
  - Galeria de fotos
  - Informações básicas (endereço, horário, contato)
  - Avaliações e comentários
  - Menu/cardápio
  - Botão "Fazer Reserva"
  - Botão "Adicionar aos Favoritos"
- **Próximas telas**: Fazer Reserva, Visualizar Cardápio, Ver Avaliações

### 2.8 Fazer Reserva
- **Objetivo**: Permitir a criação de uma nova reserva
- **Interações**:
  - Seleção de data (calendário)
  - Seleção de horário
  - Seleção de número de pessoas
  - Campo para observações especiais
  - Botão "Confirmar Reserva"
- **Próximas telas**: Confirmação de Reserva

### 2.9 Confirmação de Reserva
- **Objetivo**: Confirmar os detalhes da reserva e finalizar o processo
- **Interações**:
  - Resumo da reserva
  - Botão "Adicionar ao Calendário"
  - Botão "Compartilhar"
  - Botão "Ver Minhas Reservas"
- **Próximas telas**: Minhas Reservas, Home

### 2.10 Minhas Reservas
- **Objetivo**: Listar todas as reservas do usuário
- **Interações**:
  - Tabs para reservas ativas, passadas e canceladas
  - Lista de reservas com informações básicas
  - Opções de filtro por data
- **Próximas telas**: Detalhes da Reserva

### 2.11 Detalhes da Reserva
- **Objetivo**: Mostrar informações detalhadas sobre uma reserva específica
- **Interações**:
  - Informações completas da reserva
  - Botão "Cancelar Reserva"
  - Botão "Modificar Reserva"
  - Botão "Como Chegar" (mapa)
  - Botão "Contatar Restaurante"
- **Próximas telas**: Modificar Reserva, Cancelar Reserva, Mapa

### 2.12 Perfil do Usuário
- **Objetivo**: Gerenciar informações pessoais e preferências
- **Interações**:
  - Edição de dados pessoais
  - Preferências de notificação
  - Restaurantes favoritos
  - Histórico de visitas
  - Configurações do aplicativo
  - Botão "Sair"
- **Próximas telas**: Editar Perfil, Restaurantes Favoritos, Configurações, Login (após sair)

## 3. Fluxos Principais

### 3.1 Fluxo de Primeira Utilização
```
Splash Screen → Onboarding → Registro → Home
```

### 3.2 Fluxo de Login
```
Splash Screen → Login → Home
```

### 3.3 Fluxo de Reserva
```
Home → Busca de Restaurantes → Detalhes do Restaurante → Fazer Reserva → Confirmação de Reserva
```

### 3.4 Fluxo de Gerenciamento de Reservas
```
Home → Minhas Reservas → Detalhes da Reserva → [Modificar/Cancelar Reserva]
```

## 4. Considerações de UX/UI

### 4.1 Consistência Visual
- Paleta de cores consistente em todo o aplicativo
- Elementos de UI padronizados (botões, campos, cards)
- Tipografia hierárquica clara

### 4.2 Feedback ao Usuário
- Indicadores de carregamento para operações assíncronas
- Mensagens de sucesso/erro claras
- Animações sutis para transições

### 4.3 Acessibilidade
- Suporte a TalkBack para deficientes visuais
- Tamanhos de texto ajustáveis
- Contraste adequado para legibilidade
- Áreas de toque dimensionadas corretamente (mínimo 48dp)

### 4.4 Responsividade
- Layout adaptável a diferentes tamanhos de tela
- Suporte a orientação retrato e paisagem
- Comportamento adequado com teclado visível

Este documento apresenta o fluxo de telas planejado para o aplicativo MESACERTA, focando na experiência do usuário e na navegação intuitiva entre as diferentes funcionalidades.
