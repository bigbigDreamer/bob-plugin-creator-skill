# Bob Plugin Creator Skill

[English](#english) | [中文](#中文)

---

## English

A Claude Code skill for creating and updating [Bob](https://bobtranslate.com/) plugins (translate/OCR/TTS).

### What is Bob?

Bob is a popular macOS translation and OCR application. This skill helps you develop plugins for Bob with comprehensive templates, API references, and best practices.

### Installation

#### Method 1: Download .skill File (Recommended)

1. Download `bob-plugin-creator-skill.skill` from [Releases](https://github.com/bigbigDreamer/bob-plugin-creator-skill/releases)
2. In Claude Code, run:
   ```bash
   /skill install /path/to/bob-plugin-creator-skill.skill
   ```

#### Method 2: Git Clone

```bash
git clone https://github.com/bigbigDreamer/bob-plugin-creator-skill.git
# Then add the directory to your Claude Code skills path
```

#### Method 3: GitHub Marketplace

```bash
/plugin marketplace add https://github.com/bigbigDreamer/bob-plugin-creator-skill
/plugin install bob-plugin-creator@bob-plugin-creator-marketplace
```

### Features

- ✨ **Complete Templates**: Ready-to-use templates for translate/OCR/TTS plugins
- 📚 **API References**: Comprehensive documentation for Bob plugin APIs
- 🌍 **Language Codes**: Complete Bob language code reference
- 🚀 **Quick Start**: Step-by-step guide from creation to packaging
- 🛠️ **Best Practices**: Workflow patterns and constraint guidelines

### Usage

After installation, simply ask Claude Code to help you create or modify Bob plugins:

```
"Create a Bob translation plugin using OpenAI API"
"Help me add OCR support to my Bob plugin"
"Update my Bob TTS plugin to support streaming"
```

### What's Included

```
bob-plugin-creator-skill/
├── SKILL.md                    # Main skill definition
├── references/
│   ├── quickstart.md          # Quick start guide
│   ├── api.md                 # Bob API reference
│   ├── objects.md             # Data structures
│   └── language-codes.md      # Language code mapping
└── assets/
    └── templates/
        ├── translate/         # Translation plugin template
        ├── ocr/              # OCR plugin template
        └── tts/              # TTS plugin template
```

### Contributing

Contributions are welcome! Feel free to:
- Report issues
- Submit pull requests
- Suggest improvements

### License

MIT License - see [LICENSE](LICENSE) file for details.

### Resources

- [Bob Official Website](https://bobtranslate.com/)
- [Bob Plugin Development Guide](https://bobtranslate.com/plugin/)

---

## 中文

一个用于创建和更新 [Bob](https://bobtranslate.com/) 插件（翻译/OCR/TTS）的 Claude Code 技能包。

### Bob 是什么？

Bob 是一款 macOS 平台上流行的翻译和 OCR 应用。这个 skill 帮助你通过完整的模板、API 参考和最佳实践来开发 Bob 插件。

### 安装方法

#### 方法 1：下载 .skill 文件（推荐）

1. 从 [Releases](https://github.com/bigbigDreamer/bob-plugin-creator-skill/releases) 下载 `bob-plugin-creator-skill.skill`
2. 在 Claude Code 中运行：
   ```bash
   /skill install /path/to/bob-plugin-creator-skill.skill
   ```

#### 方法 2：Git 克隆

```bash
git clone https://github.com/bigbigDreamer/bob-plugin-creator-skill.git
# 然后将目录添加到你的 Claude Code skills 路径
```

#### 方法 3：GitHub Marketplace

```bash
/plugin marketplace add https://github.com/bigbigDreamer/bob-plugin-creator-skill
/plugin install bob-plugin-creator@bob-plugin-creator-marketplace
```
```

### 功能特性

- ✨ **完整模板**：开箱即用的翻译/OCR/TTS 插件模板
- 📚 **API 参考**：完整的 Bob 插件 API 文档
- 🌍 **语言代码**：完整的 Bob 语言代码对照表
- 🚀 **快速入门**：从创建到打包的分步指南
- 🛠️ **最佳实践**：工作流模式和约束指南

### 使用方式

安装后，直接让 Claude Code 帮你创建或修改 Bob 插件：

```
"创建一个使用 OpenAI API 的 Bob 翻译插件"
"帮我给 Bob 插件添加 OCR 支持"
"更新我的 Bob TTS 插件以支持流式输出"
```

### 包含内容

```
bob-plugin-creator-skill/
├── SKILL.md                    # 主技能定义文件
├── references/
│   ├── quickstart.md          # 快速入门指南
│   ├── api.md                 # Bob API 参考
│   ├── objects.md             # 数据结构说明
│   └── language-codes.md      # 语言代码映射
└── assets/
    └── templates/
        ├── translate/         # 翻译插件模板
        ├── ocr/              # OCR 插件模板
        └── tts/              # TTS 插件模板
```

### 贡献

欢迎贡献！你可以：
- 报告问题
- 提交 Pull Request
- 提出改进建议

### 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件。

### 相关资源

- [Bob 官方网站](https://bobtranslate.com/)
- [Bob 插件开发指南](https://bobtranslate.com/plugin/)
