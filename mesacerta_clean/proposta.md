# Proposta do Aplicativo MESACERTA para Android

## 1. Descrição do Aplicativo

O MESACERTA é um aplicativo de reserva de restaurantes que permite aos usuários descobrir, avaliar e reservar mesas em restaurantes de forma rápida e conveniente. O aplicativo resolve o problema da dificuldade em encontrar e reservar restaurantes adequados às preferências do usuário, eliminando a necessidade de ligações telefônicas e proporcionando uma visão completa das opções disponíveis.

### 1.1 Por que portabilizar para mobile?

A portabilização do MESACERTA para uma plataforma móvel oferece diversos benefícios:

1. **Mobilidade e conveniência**: Os usuários podem fazer reservas em qualquer lugar e a qualquer momento, sem necessidade de um computador.
2. **Acesso a recursos nativos**: Aproveitamento de recursos como GPS para localização de restaurantes próximos, notificações push para lembretes de reservas e câmera para avaliações com fotos.
3. **Experiência offline**: Possibilidade de acessar informações básicas e reservas confirmadas mesmo sem conexão à internet.
4. **Integração com outros aplicativos**: Facilidade para compartilhar reservas em redes sociais ou adicionar ao calendário do dispositivo.

### 1.2 Diferenças na experiência do usuário

A versão móvel do MESACERTA trará as seguintes melhorias na experiência do usuário:

1. **Interface otimizada para toque**: Botões maiores, gestos intuitivos (swipe para navegar entre restaurantes) e navegação simplificada.
2. **Geolocalização em tempo real**: Sugestões de restaurantes baseadas na localização atual do usuário.
3. **Notificações contextuais**: Lembretes de reservas, promoções de restaurantes próximos e atualizações sobre status de reservas.
4. **Acesso rápido**: Autenticação biométrica (impressão digital/face) para login mais rápido e seguro.

### 1.3 Adaptações necessárias

Para garantir uma experiência móvel fiel à versão web, serão necessárias as seguintes adaptações:

1. **Redesenho da interface**: Adaptação do layout para telas menores, priorizando as informações mais importantes.
2. **Navegação simplificada**: Implementação de menu inferior (bottom navigation) para acesso rápido às principais funcionalidades.
3. **Otimização de imagens**: Carregamento progressivo e cache de imagens para economizar dados móveis.
4. **Modo offline**: Implementação de armazenamento local para acesso a informações básicas sem conexão.
5. **Adaptação de formulários**: Simplificação dos formulários de reserva para facilitar o preenchimento em dispositivos móveis.

### 1.4 Persona-alvo e jornada do usuário

**Persona principal**: João, 32 anos, profissional ocupado que frequentemente janta fora com amigos e colegas de trabalho. Possui pouco tempo para planejar e prefere soluções rápidas e eficientes.

**Jornada do usuário**:
1. **Descoberta**: João abre o aplicativo e visualiza restaurantes próximos ou pesquisa por tipo de cozinha/localização.
2. **Exploração**: Navega pelos detalhes do restaurante, vê fotos, cardápio e avaliações de outros usuários.
3. **Decisão**: Seleciona data, horário e número de pessoas para verificar disponibilidade.
4. **Reserva**: Confirma a reserva, adiciona observações especiais se necessário.
5. **Confirmação**: Recebe notificação de confirmação e pode adicionar ao calendário.
6. **Lembrete**: Recebe notificação algumas horas antes da reserva.
7. **Pós-experiência**: Após a visita, é convidado a avaliar o restaurante.

## 2. Requisitos Funcionais

1. **Autenticação de usuários**:
   - Registro com e-mail ou redes sociais
   - Login com credenciais ou biometria
   - Recuperação de senha

2. **Perfil do usuário**:
   - Dados pessoais e preferências
   - Histórico de reservas
   - Restaurantes favoritos

3. **Descoberta de restaurantes**:
   - Listagem por proximidade
   - Filtros por tipo de cozinha, preço, avaliação
   - Busca por nome ou localização

4. **Detalhes do restaurante**:
   - Informações básicas (endereço, horário, contato)
   - Fotos e cardápio
   - Avaliações e comentários

5. **Sistema de reservas**:
   - Seleção de data, horário e número de pessoas
   - Verificação de disponibilidade em tempo real
   - Confirmação e cancelamento de reservas
   - Adição de observações especiais

6. **Notificações**:
   - Confirmação de reserva
   - Lembretes de reservas próximas
   - Atualizações de status (confirmação, cancelamento)

7. **Avaliações**:
   - Avaliação pós-visita
   - Adição de fotos e comentários

## 3. Requisitos Não Funcionais

1. **Desempenho**:
   - Tempo de carregamento inicial < 3 segundos
   - Resposta a interações < 1 segundo

2. **Usabilidade**:
   - Interface intuitiva seguindo Material Design
   - Acessibilidade para usuários com necessidades especiais

3. **Segurança**:
   - Proteção de dados pessoais
   - Autenticação segura
   - Comunicação criptografada

4. **Disponibilidade**:
   - Funcionamento básico mesmo offline
   - Sincronização automática quando online

5. **Compatibilidade**:
   - Android 8.0 (API 26) ou superior
   - Otimizado para diferentes tamanhos de tela

Este documento apresenta a proposta inicial para o desenvolvimento do aplicativo MESACERTA para Android, destacando os principais aspectos da portabilização da versão web para a plataforma móvel.
