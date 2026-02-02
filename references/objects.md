# 返回对象规范

## service error
- `type` / `message` / `addition` / `troubleshootingLink`。
- 常见 type：`unknown`, `param`, `unsupportedLanguage`, `secretKey`, `network`, `api`, `notFound`。

## translate result
- 至少返回 `toParagraphs` 或 `toDict` 之一。
- 可选：`from`, `to`, `toTTS`, `raw`, `thinkInfo`（Bob 1.15.0+）。
- 流式输出时 `onStream` 需传 `toParagraphs`。

## ocr result
- `from`（可选）
- `texts`（必传，ocr text 对象数组，每项含 `text` 字段）
- `raw`（可选）

## tts result
- `type`: `url` 或 `base64`
- `value`: 对应的音频地址或 Base64
- `raw`（可选）
