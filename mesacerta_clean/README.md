# MESACERTA - Aplicativo Android

## 📱 Sobre o Projeto

Aplicativo Android para reservas de restaurantes desenvolvido em Kotlin com arquitetura MVVM e Clean Architecture.

## ✅ Status do Projeto

**Projeto totalmente corrigido e funcional!**

Todos os erros do Gradle foram resolvidos:
- ✅ Erro do método `module()` corrigido
- ✅ Configuração de repositórios atualizada para Gradle 7.6
- ✅ Gradle Wrapper configurado corretamente
- ✅ Sincronização do Gradle funcionando perfeitamente
- ✅ Dependências validadas

## 🛠️ Tecnologias Utilizadas

- **Linguagem**: Kotlin 1.8.0
- **Gradle**: 7.6
- **Android Gradle Plugin**: 7.4.2
- **Arquitetura**: MVVM + Clean Architecture
- **Injeção de Dependência**: Hilt/Dagger 2.44
- **Navegação**: Navigation Component 2.5.3
- **Banco de Dados**: Room 2.5.1
- **Networking**: Retrofit 2.9.0 + Moshi
- **Coroutines**: Kotlinx Coroutines 1.6.4
- **Carregamento de Imagens**: Coil 2.3.0

## 📋 Pré-requisitos

Para compilar e executar este projeto, você precisará:

1. **Android Studio** (versão Flamingo ou superior recomendada)
   - Download: https://developer.android.com/studio

2. **JDK 11** (já incluído no Android Studio)

3. **Android SDK** com os seguintes componentes:
   - Android SDK Platform 33
   - Android SDK Build-Tools
   - Android SDK Platform-Tools

## 🚀 Como Configurar o Projeto

### Opção 1: Usando Android Studio (Recomendado)

1. Extraia o arquivo `MESACERTA_MOBAPP.zip`

2. Abra o Android Studio

3. Clique em **File → Open**

4. Navegue até a pasta extraída e selecione-a

5. Aguarde o Android Studio sincronizar o projeto automaticamente

6. O Android Studio irá:
   - Detectar o Android SDK automaticamente
   - Baixar as dependências necessárias
   - Configurar o projeto

7. Após a sincronização, clique em **Run** (▶️) para compilar e executar

### Opção 2: Linha de Comando

1. Extraia o arquivo `MESACERTA_MOBAPP.zip`

2. Configure a variável de ambiente `ANDROID_HOME`:

   **Linux/Mac:**
   ```bash
   export ANDROID_HOME=$HOME/Android/Sdk
   export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
   ```

   **Windows:**
   ```cmd
   set ANDROID_HOME=C:\Users\SeuUsuario\AppData\Local\Android\Sdk
   set PATH=%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools
   ```

3. Ou crie o arquivo `local.properties` na raiz do projeto:
   ```properties
   sdk.dir=/caminho/para/seu/Android/Sdk
   ```

4. Execute os comandos:
   ```bash
   # Linux/Mac
   ./gradlew clean assembleDebug
   
   # Windows
   gradlew.bat clean assembleDebug
   ```

## 📁 Estrutura do Projeto

```
MESACERTA/
├── app/
│   ├── src/
│   │   └── main/
│   │       ├── java/com/example/mesacerta/
│   │       │   ├── data/          # Camada de dados
│   │       │   ├── domain/        # Camada de domínio
│   │       │   ├── ui/            # Camada de apresentação
│   │       │   └── util/          # Utilitários
│   │       ├── res/               # Recursos (layouts, strings, etc)
│   │       └── AndroidManifest.xml
│   └── build.gradle               # Configurações do módulo app
├── docs/                          # Documentação adicional
├── gradle/                        # Gradle Wrapper
├── build.gradle                   # Configurações do projeto raiz
├── settings.gradle                # Configurações do Gradle
├── gradle.properties              # Propriedades do Gradle
└── README.md                      # Este arquivo
```

## 🔧 Comandos Úteis do Gradle

```bash
# Limpar o projeto
./gradlew clean

# Compilar versão Debug
./gradlew assembleDebug

# Compilar versão Release
./gradlew assembleRelease

# Executar testes unitários
./gradlew test

# Verificar dependências
./gradlew :app:dependencies

# Listar todas as tarefas disponíveis
./gradlew tasks
```

## 🐛 Solução de Problemas

### Erro: "SDK location not found"
**Solução**: Configure a variável `ANDROID_HOME` ou crie o arquivo `local.properties` conforme descrito acima.

### Erro: "Gradle sync failed"
**Solução**: 
1. No Android Studio: **File → Invalidate Caches / Restart**
2. Ou via linha de comando: `./gradlew clean --refresh-dependencies`

### Erro: "Could not resolve dependencies"
**Solução**: Verifique sua conexão com a internet e tente novamente. O Gradle precisa baixar as dependências.

### Erro de memória do Gradle
**Solução**: Edite o arquivo `gradle.properties` e aumente a memória:
```properties
org.gradle.jvmargs=-Xmx4096m -Dfile.encoding=UTF-8
```

## 📝 Notas Importantes

- Este projeto foi testado e validado com Gradle 7.6
- A sincronização do Gradle está funcionando corretamente
- Todas as dependências estão configuradas adequadamente
- O projeto segue as melhores práticas modernas do Android

## 📞 Suporte

Se encontrar algum problema:
1. Verifique se todos os pré-requisitos estão instalados
2. Certifique-se de que o Android SDK está configurado corretamente
3. Limpe o cache do Gradle: `./gradlew clean --refresh-dependencies`
4. Reinicie o Android Studio

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e comerciais.

---

**Versão do Projeto**: 1.0  
**Data de Correção**: 05 de Outubro de 2025  
**Status**: ✅ Totalmente Funcional
