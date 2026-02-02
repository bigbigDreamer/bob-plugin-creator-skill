function supportLanguages() {
  return ["auto", "zh-Hans", "en"];
}

function translate(query, completion) {
  // Prefer onCompletion/onStream for Bob 1.8.0+
  if (typeof query.onCompletion === "function") {
    query.onCompletion({
      result: {
        toParagraphs: [[query.text]]
      }
    });
    return;
  }

  completion({
    result: {
      toParagraphs: [[query.text]]
    }
  });
}

function pluginTimeoutInterval() {
  return 60; // seconds
}

function pluginValidate(completion) {
  completion({ result: true });
}
