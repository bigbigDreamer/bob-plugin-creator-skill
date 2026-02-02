function supportLanguages() {
  return ["zh-Hans", "en"];
}

function tts(query, completion) {
  // Demo returns a placeholder URL. Replace with real service call.
  var result = { type: "url", value: "" };

  if (typeof query.onCompletion === "function") {
    query.onCompletion({ result: result });
    return;
  }

  completion({ result: result });
}

function pluginTimeoutInterval() {
  return 60; // seconds
}

function pluginValidate(completion) {
  completion({ result: true });
}
