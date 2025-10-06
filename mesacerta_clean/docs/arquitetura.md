# Arquitetura do Aplicativo MESACERTA para Android

## 1. Visão Geral da Arquitetura

O aplicativo MESACERTA para Android será desenvolvido seguindo a arquitetura MVVM (Model-View-ViewModel) combinada com o padrão Repository. Esta arquitetura foi escolhida por proporcionar uma clara separação de responsabilidades, facilitar os testes unitários e seguir as recomendações oficiais do Android.

### 1.1 Diagrama de Arquitetura

```
┌─────────────────────────────────────────────────────────────────┐
│                           UI Layer                              │
│  ┌─────────────┐      ┌─────────────┐      ┌─────────────┐      │
│  │  Activities │      │  Fragments  │      │   Adapters  │      │
│  └──────┬──────┘      └──────┬──────┘      └──────┬──────┘      │
│         │                    │                    │             │
│         └──────────┬─────────┴──────────┬─────────┘             │
│                    │                    │                       │
│           ┌────────▼────────┐  ┌────────▼────────┐              │
│           │   ViewModels    │  │ Navigation Comp.│              │
│           └────────┬────────┘  └─────────────────┘              │
└───────────────────┬─────────────────────────────────────────────┘
                    │
┌───────────────────▼─────────────────────────────────────────────┐
│                       Domain Layer                              │
│  ┌─────────────┐      ┌─────────────┐      ┌─────────────┐      │
│  │ Use Cases   │      │   Models    │      │ Repositories│      │
│  └──────┬──────┘      └─────────────┘      └──────┬──────┘      │
│         │                                         │             │
└─────────┼─────────────────────────────────────────┼─────────────┘
          │                                         │
┌─────────▼─────────────────────────────────────────▼─────────────┐
│                        Data Layer                               │
│  ┌─────────────┐      ┌─────────────┐      ┌─────────────┐      │
│  │ Remote Data │      │ Local Data  │      │ Preferences │      │
│  │   Source    │      │   Source    │      │   Manager   │      │
│  └──────┬──────┘      └──────┬──────┘      └─────────────┘      │
│         │                    │                                  │
│  ┌──────▼──────┐      ┌──────▼──────┐                           │
│  │  Retrofit   │      │  Room DB    │                           │
│  └─────────────┘      └─────────────┘                           │
└─────────────────────────────────────────────────────────────────┘
```

## 2. Componentes da Arquitetura

### 2.1 UI Layer (Camada de Interface do Usuário)

**Activities e Fragments**: Responsáveis por exibir os dados ao usuário e capturar interações.

**ViewModels**: Mantêm o estado da UI e preparam os dados para exibição. Sobrevivem às mudanças de configuração e isolam a lógica de negócios da UI.

**Adapters**: Conectam os dados às RecyclerViews para exibição de listas (restaurantes, reservas, etc.).

**Navigation Component**: Gerencia a navegação entre diferentes telas do aplicativo.

### 2.2 Domain Layer (Camada de Domínio)

**Models**: Classes de dados que representam as entidades do negócio (Restaurante, Reserva, Usuário, etc.).

**Repositories**: Abstraem a origem dos dados, fornecendo uma API limpa para os ViewModels.

**Use Cases**: Encapsulam lógicas de negócio específicas que podem ser reutilizadas por diferentes ViewModels.

### 2.3 Data Layer (Camada de Dados)

**Remote Data Source**: Responsável pela comunicação com APIs remotas.

**Local Data Source**: Gerencia o armazenamento local de dados usando Room Database.

**Preferences Manager**: Gerencia as preferências do usuário e dados de configuração.

## 3. Fluxo de Dados

1. O usuário interage com a UI (Activity/Fragment)
2. A UI notifica o ViewModel sobre a ação
3. O ViewModel executa a lógica de negócio, possivelmente através de Use Cases
4. O Use Case acessa o Repository para obter ou modificar dados
5. O Repository decide se busca dados da fonte local ou remota
6. Os dados fluem de volta pela mesma cadeia até a UI
7. A UI é atualizada com os novos dados

## 4. Tecnologias Utilizadas

### 4.1 Bibliotecas e Frameworks

| Categoria | Tecnologia | Propósito |
|-----------|------------|-----------|
| UI | **Jetpack Compose** | Framework moderno para construção de UI declarativa |
| UI | **Material Design Components** | Componentes visuais seguindo as diretrizes do Material Design |
| Navegação | **Navigation Component** | Gerenciamento de navegação entre telas |
| Injeção de Dependência | **Hilt** | Simplifica a injeção de dependências |
| Comunicação de Rede | **Retrofit** | Cliente HTTP para comunicação com APIs REST |
| Processamento JSON | **Moshi** | Conversão entre JSON e objetos Kotlin |
| Banco de Dados | **Room** | Abstração sobre SQLite para persistência local |
| Imagens | **Coil** | Carregamento e cache de imagens |
| Concorrência | **Kotlin Coroutines** | Programação assíncrona simplificada |
| Reatividade | **Flow** | Streams reativos para dados assíncronos |
| Testes | **JUnit** | Framework para testes unitários |
| Testes | **Espresso** | Framework para testes de UI |

### 4.2 Ferramentas de Desenvolvimento

- **Android Studio**: IDE principal para desenvolvimento
- **Gradle**: Sistema de automação de build
- **Git**: Controle de versão
- **Firebase**: Plataforma para analytics, crash reporting e notificações push

## 5. Fluxo de Telas do Aplicativo

### 5.1 Diagrama de Navegação

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Splash     │────▶│  Onboarding │────▶│  Login      │
└─────────────┘     └─────────────┘     └──────┬──────┘
                                               │
                                               ▼
┌─────────────┐     ┌─────────────┐     ┌──────────────┐
│ Perfil      │◀───▶│  Home       │◀───▶│  Registro    │
└──────┬──────┘     └──────┬──────┘     └──────────────┘
       │                   │
       │                   ▼
       │            ┌─────────────┐     ┌─────────────┐
       └───────────▶│ Restaurantes│────▶│ Detalhes do │
                    └──────┬──────┘     │ Restaurante │
                           │            └──────┬──────┘
                           ▼                   │
                    ┌─────────────┐            │
                    │ Minhas      │◀───────────┘
                    │ Reservas    │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │ Detalhes da │
                    │ Reserva     │
                    └─────────────┘
```

### 5.2 Descrição das Telas Principais

1. **Splash**: Tela inicial de carregamento com logo do aplicativo
2. **Onboarding**: Introdução ao aplicativo para novos usuários
3. **Login/Registro**: Autenticação do usuário
4. **Home**: Tela principal com restaurantes em destaque e acesso rápido às funcionalidades
5. **Restaurantes**: Listagem de restaurantes com filtros e busca
6. **Detalhes do Restaurante**: Informações detalhadas, fotos, avaliações e opção de reserva
7. **Minhas Reservas**: Listagem de reservas do usuário
8. **Detalhes da Reserva**: Informações detalhadas sobre uma reserva específica
9. **Perfil**: Informações do usuário, preferências e configurações

## 6. Considerações de Segurança

1. **Autenticação**: Implementação de JWT (JSON Web Tokens) para autenticação segura
2. **Armazenamento Seguro**: Uso de EncryptedSharedPreferences para dados sensíveis
3. **Comunicação**: HTTPS para todas as comunicações com o servidor
4. **Validação de Entrada**: Verificação e sanitização de todas as entradas do usuário
5. **Proteção contra Ataques**: Implementação de medidas contra ataques comuns (SQL Injection, XSS)

## 7. Estratégia de Testes

1. **Testes Unitários**: Para lógica de negócios, ViewModels e Repositories
2. **Testes de Integração**: Para interações entre componentes
3. **Testes de UI**: Para fluxos de usuário e interações com a interface
4. **Testes de Performance**: Para garantir tempos de resposta adequados

Esta arquitetura foi projetada para garantir escalabilidade, manutenibilidade e testabilidade do aplicativo MESACERTA, seguindo as melhores práticas de desenvolvimento Android moderno.
