function supportLanguages() {
  return ["auto", "zh-Hans", "en"];
}

function ocr(query, completion) {
  var texts = [
    { text: "" }
  ];

  if (typeof query.onCompletion === "function") {
    query.onCompletion({
      result: { texts: texts }
    });
    return;
  }

  completion({
    result: { texts: texts }
  });
}

function pluginTimeoutInterval() {
  return 60; // seconds
}

function pluginValidate(completion) {
  completion({ result: true });
}
