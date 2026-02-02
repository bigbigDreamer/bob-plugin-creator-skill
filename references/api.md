# API 与运行环境要点

## 运行环境
- 插件运行在 JavaScriptCore 中，不是 Web/Node。
- 只能使用 JS 内置对象 + Bob 提供 API + 随插件打包的模块。

## $http
- `$http.request({ method, url, header, body, files, timeout, cancelSignal, streamHandler, handler })`
- `handler(resp)`：`resp.data` 自动解析 JSON/UTF-8/$data。
- `$http.streamRequest(...)`：不支持 `files`，通过 `streamHandler` 接收流式数据，最终 `handler` 不包含 `data/rawData`。

## $file
- 只能用**虚拟绝对路径**。
- `/` 开头：插件目录（只读）。
- `$sandbox/`：插件沙盒（可读写）。
- 写/删/移动仅能在 `$sandbox/` 内完成。

## $data
- 常用构造：`$data.fromUTF8()`, `$data.fromHex()`, `$data.fromBase64()`。
- OCR 图片等二进制数据使用 `$data`。
