# Quickstart 摘要

## 插件根目录
- 必须包含 `info.json` 与 `main.js`。
- 可选 `icon.png`，或在 `info.json` 用内置图标 ID。

## info.json 关键字段
- `identifier`：仅由数字、小写字母和 `.` 组成。
- `version`：仅由数字、小写字母和 `.` 组成。
- `category`：只能是 `translate` / `ocr` / `tts`。
- `name`：插件名称。
- `summary`：插件描述。
- `icon` / `icons`：内置或文件图标（`icons` 支持 keyOption 切换）。
- `author` / `homepage` / `appcast` / `minBobVersion`。
- `options`：用户配置项。

### option object
- `identifier` (必填)
- `type`：`text` 或 `menu`
- `title` (必填)
- `defaultValue`
- `textConfig`（Bob 1.8.0+）
- `menuValues`（type 为 `menu` 必填）
- `desc`
- `isKeyOption`（Bob 1.8.0+，仅 `menu`）

### menu object
- `title` (必填)
- `value` (必填)
- `defaultPluginIconIdentifier`（Bob 1.8.0+）
- `defaultPluginName`（Bob 1.8.0+）

## 入口函数（按类型）

### 通用：语言列表
```
function supportLanguages() {
  return ['auto', 'zh-Hans', 'en', ...];
}
```
返回 Bob 语言代码数组。

### translate
```
function translate(query, completion) { ... }
```
- Bob 1.8.0+ 推荐使用 `query.onCompletion({result|error})`，可选 `query.onStream(result)`。
- `query` 常用字段：`text`, `from`, `to`, `detectFrom`, `detectTo`, `cancelSignal`, `onStream`, `onCompletion`。

### ocr
```
function ocr(query, completion) { ... }
```
- `query.image` 为 `$data`。
- `query.from`, `query.detectFrom` 语言码。

### tts
```
function tts(query, completion) { ... }
```
- `query.text`, `query.lang`（非 `auto`）。

### 超时（可选）
```
function pluginTimeoutInterval() {
  return 60; // 30-300 秒
}
```

### 验证（可选）
```
function pluginValidate(completion) { ... }
```
`completion` 传 `{ result: true }` 或 `{ result: false, error: serviceError }`。
