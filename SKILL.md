---
name: bob-plugin-creator
description: Create/update Bob (bobtranslate.com) plugins (translate/ocr/tts): info.json, main.js, options, API usage, packaging.
---

# Bob 插件 Skill

## 适用场景
当用户希望创建或更新 Bob 插件（文本翻译/文本识别/语音合成）时使用。

## 工作流程（精简版）
1. 明确插件类型：`translate` / `ocr` / `tts`，确认是否需要流式输出、鉴权配置和最低 Bob 版本。
2. 搭好插件根目录：必须包含 `info.json` 与 `main.js`，可选 `icon.png`。
3. 按类型实现入口函数：`supportLanguages()` + 对应的 `translate/ocr/tts`，必要时实现 `pluginTimeoutInterval()` 与 `pluginValidate()`。
4. 按需使用 Bob API（$http/$file/$data/$env 等），避免使用 Web/Node 专属 API。
5. 严格按对象规范回传结果/错误（translate/ocr/tts result, service error）。
6. 需要发布时再执行调试、打包、发布流程。

## 类型对应的必备函数
- **translate**: `supportLanguages()`, `translate(query, completion)`；可选 `pluginTimeoutInterval()`, `pluginValidate()`。
- **ocr**: `supportLanguages()`, `ocr(query, completion)`；可选 `pluginTimeoutInterval()`, `pluginValidate()`。
- **tts**: `supportLanguages()`, `tts(query, completion)`；可选 `pluginTimeoutInterval()`, `pluginValidate()`。

## 重要约束
- 运行环境是 JavaScriptCore，不是 Web/Node；只能使用 JS 内置对象、Bob 提供的 API、或随插件打包的模块。
- 语言代码必须使用 Bob 语言代码表。

## 参考文件
- `references/quickstart.md`：插件结构、info.json、入口函数、超时/验证
- `references/api.md`：$http/$file/$data/$env/模块化、环境限制
- `references/objects.md`：service error、translate/ocr/tts result
- `references/language-codes.md`：Bob 语言代码表入口

## 脚手架模板
在需要快速开始时，使用 `assets/templates/` 下的最小模板：
- `assets/templates/translate/`：translate 插件模板
- `assets/templates/ocr/`：ocr 插件模板
- `assets/templates/tts/`：tts 插件模板
